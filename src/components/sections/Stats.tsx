import { useRef, useState, useCallback, useEffect } from 'react'

const stats = [
  { value: 90, label: 'productores', color: '#BE008D' },
  { value: 300, label: 'etiquetas', color: '#42B7A4' },
  { value: 4000, label: 'asistentes', color: '#FFF500' },
  { value: 8, label: 'países', color: '#BE008D' },
]

function animateCount(
  value: number,
  setCount: (n: number) => void,
  animRef: React.MutableRefObject<number>
) {
  cancelAnimationFrame(animRef.current)
  const duration = 800
  const start = performance.now()
  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    setCount(Math.floor(eased * value))
    if (progress < 1) animRef.current = requestAnimationFrame(step)
  }
  setCount(0)
  animRef.current = requestAnimationFrame(step)
}

function StatItem({ value, label, color, trigger }: { value: number; label: string; color: string; trigger: number }) {
  const [count, setCount] = useState(0)
  const animRef = useRef(0)
  const lastTrigger = useRef(-1)

  if (trigger !== lastTrigger.current && trigger > 0) {
    lastTrigger.current = trigger
    animateCount(value, setCount, animRef)
  }

  return (
    <div className="flex items-baseline gap-2 sm:gap-3">
      <span
        className="font-inter text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none"
        style={{ color }}
      >
        +{count.toLocaleString()}
      </span>
      <span className="font-inter text-sm sm:text-base text-white/40 font-light">
        {label}
      </span>
    </div>
  )
}

export default function Stats() {
  const [trigger, setTrigger] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const hasAppeared = useRef(false)

  // Animate on first scroll into view
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAppeared.current) {
          hasAppeared.current = true
          setTrigger(1)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Re-animate on hover
  const handleMouseEnter = useCallback(() => {
    setTrigger(t => t + 1)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 px-6 bg-texto cursor-default"
      onMouseEnter={handleMouseEnter}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-between gap-6 sm:gap-y-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} trigger={trigger} />
          ))}
        </div>
      </div>
    </section>
  )
}
