import { useEffect, useRef } from 'react'
import { Renderer, Program, Mesh, Triangle } from 'ogl'

interface GradientMeshProps {
  colors?: string[]
  speed?: number
  grain?: number
  fade?: number
}

const vertex = /* glsl */ `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0, 1);
  }
`

const fragment = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec3 uColor0;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform float uGrain;
  uniform float uFade;
  uniform vec2 uResolution;

  varying vec2 vUv;

  // Simplex-style noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  // Film grain
  float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.4;

    // Aspect-corrected UV
    float aspect = uResolution.x / uResolution.y;
    vec2 uvAspect = vec2(uv.x * aspect, uv.y);

    // Multiple noise layers for organic movement
    float n1 = snoise(vec3(uvAspect * 2.0, t * 0.3));
    float n2 = snoise(vec3(uvAspect * 3.0 + 5.0, t * 0.2 + 10.0));
    float n3 = snoise(vec3(uvAspect * 1.5 + 10.0, t * 0.25 + 20.0));

    // Distorted UV for color mixing
    vec2 distUv = uv + vec2(n1, n2) * 0.15;

    // Wave effect
    float wave = sin(distUv.x * 8.0 + t * 0.15) * 0.08;
    distUv.y += wave;

    // Swirl
    float angle = n3 * 0.3 * 3.14159;
    float s = sin(angle);
    float c = cos(angle);
    vec2 center = vec2(0.5);
    distUv = center + mat2(c, -s, s, c) * (distUv - center);

    // Three-way color blend
    float blend1 = smoothstep(-0.3, 0.8, snoise(vec3(distUv * 3.0, t * 0.2)));
    float blend2 = smoothstep(-0.3, 0.8, snoise(vec3(distUv * 2.5 + 100.0, t * 0.15 + 50.0)));

    vec3 color = mix(uColor0, uColor1, blend1);
    color = mix(color, uColor2, blend2 * 0.6);

    // Desaturate and lighten to push colors back
    float luma = dot(color, vec3(0.299, 0.587, 0.114));
    color = mix(color, vec3(luma), uFade * 0.4);   // desaturate
    color = mix(color, vec3(1.0), uFade * 0.35);   // lighten toward white

    // Film grain
    float grain = (rand(vUv + fract(uTime)) - 0.5) * uGrain;
    color += grain;

    gl_FragColor = vec4(color, 1.0);
  }
`

function hexToVec3(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  return [r, g, b]
}

export default function GradientMesh({
  colors = ['#BE008D', '#42B7A4', '#FFF500'],
  speed = 0.4,
  grain = 0.04,
  fade = 0,
}: GradientMeshProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<Renderer | null>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const renderer = new Renderer({
      alpha: false,
      antialias: true,
    })
    rendererRef.current = renderer
    const gl = renderer.gl
    container.appendChild(gl.canvas as HTMLCanvasElement)

    const geometry = new Triangle(gl)

    const c0 = hexToVec3(colors[0])
    const c1 = hexToVec3(colors[1])
    const c2 = hexToVec3(colors[2])

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uColor0: { value: c0 },
        uColor1: { value: c1 },
        uColor2: { value: c2 },
        uGrain: { value: grain },
        uFade: { value: fade },
        uResolution: { value: [container.offsetWidth, container.offsetHeight] },
      },
    })

    const mesh = new Mesh(gl, { geometry, program })

    function resize() {
      if (!container) return
      const w = container.offsetWidth
      const h = container.offsetHeight
      renderer.setSize(w, h)
      program.uniforms.uResolution.value = [w, h]
    }

    resize()
    window.addEventListener('resize', resize)

    let startTime = performance.now()

    function update() {
      const elapsed = (performance.now() - startTime) / 1000
      program.uniforms.uTime.value = elapsed * speed
      renderer.render({ scene: mesh })
      rafRef.current = requestAnimationFrame(update)
    }

    rafRef.current = requestAnimationFrame(update)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      if (container.contains(gl.canvas as HTMLCanvasElement)) {
        container.removeChild(gl.canvas as HTMLCanvasElement)
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [colors, speed, grain, fade])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  )
}
