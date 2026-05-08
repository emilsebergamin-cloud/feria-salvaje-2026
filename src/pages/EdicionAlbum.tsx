import { useState, useCallback, useRef, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Nav from '../components/sections/Nav'
import MiniCountdown from '../components/ui/MiniCountdown'

const edicionYears = ['2021', '2022-mendoza', '2022', '2023', '2025']

const edicionesData: Record<string, { title: string; desc: string; color: string; fotos: string[] }> = {
  '2021': {
    title: '2021',
    desc: 'La primera Salvaje',
    color: '#252653',
    fotos: Array.from({ length: 12 }, (_, i) =>
      `/assets/ediciones/2021/${String(i + 1).padStart(2, '0')}.webp`
    ),
  },
  '2022': {
    title: '2022',
    desc: '2da edición · Buenos Aires',
    color: '#42B7A4',
    fotos: Array.from({ length: 16 }, (_, i) =>
      `/assets/ediciones/2022/${String(i + 1).padStart(2, '0')}.webp`
    ),
  },
  '2022-mendoza': {
    title: '2022',
    desc: 'Edición Mendoza',
    color: '#252653',
    fotos: Array.from({ length: 16 }, (_, i) =>
      `/assets/ediciones/2022-mendoza/${String(i + 1).padStart(2, '0')}.webp`
    ),
  },
  '2023': {
    title: '2023',
    desc: '3ra edición',
    color: '#BE008D',
    fotos: Array.from({ length: 16 }, (_, i) =>
      `/assets/ediciones/2023/${String(i + 1).padStart(2, '0')}.webp`
    ),
  },
  '2025': {
    title: '2025',
    desc: '4ta edición porteña',
    color: '#FFF500',
    fotos: Array.from({ length: 16 }, (_, i) =>
      `/assets/ediciones/2025/${String(i + 1).padStart(2, '0')}.webp`
    ),
  },
}

function usePreloadImages(urls: string[]) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (urls.length === 0) {
      setLoaded(true)
      return
    }
    setLoaded(false)
    let count = 0
    const total = urls.length

    urls.forEach(url => {
      const img = new Image()
      img.onload = img.onerror = () => {
        count++
        if (count >= total) setLoaded(true)
      }
      img.src = url
    })
  }, [urls.join(',')])

  return loaded
}

function PageImage({ src, side }: { src?: string; side: 'left' | 'right' }) {
  const margin = side === 'left' ? 'm-[10px] mr-[14px]' : 'm-[10px] ml-[14px]'
  return (
    <div className={`absolute inset-0 ${margin} overflow-hidden rounded-sm`}>
      {src ? (
        <img src={src} alt="" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-[#ede9e3]">
          <span className="font-inter text-sm text-texto/15 italic">Fin del álbum</span>
        </div>
      )}
    </div>
  )
}

export default function EdicionAlbum() {
  const { year } = useParams()
  const navigate = useNavigate()
  const edicion = edicionesData[year || '']
  const currentYearIndex = edicionYears.indexOf(year || '')
  const prevYear = currentYearIndex > 0 ? edicionYears[currentYearIndex - 1] : null
  const nextYear = currentYearIndex < edicionYears.length - 1 ? edicionYears[currentYearIndex + 1] : null
  const [spread, setSpread] = useState(0)
  const [mobileIndex, setMobileIndex] = useState(0)
  const [flipAngle, setFlipAngle] = useState(0)
  const [flipType, setFlipType] = useState<'next' | 'prev' | null>(null)
  const [isFlipping, setIsFlipping] = useState(false)
  const animRef = useRef(0)

  const imagesLoaded = usePreloadImages(edicion?.fotos || [])

  // Reset when switching editions
  useEffect(() => {
    cancelAnimationFrame(animRef.current)
    setSpread(0)
    setMobileIndex(0)
    setFlipAngle(0)
    setFlipType(null)
    setIsFlipping(false)
  }, [year])

  // Cleanup on unmount
  useEffect(() => {
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  const totalSpreads = edicion ? Math.ceil(edicion.fotos.length / 2) : 0

  const animate = useCallback((from: number, to: number, duration: number) => {
    return new Promise<void>(resolve => {
      cancelAnimationFrame(animRef.current)
      const start = performance.now()
      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
        setFlipAngle(from + (to - from) * eased)
        if (t < 1) {
          animRef.current = requestAnimationFrame(step)
        } else {
          resolve()
        }
      }
      animRef.current = requestAnimationFrame(step)
    })
  }, [])

  const goNext = useCallback(async () => {
    if (spread >= totalSpreads - 1 || isFlipping) return
    const target = spread + 1
    setIsFlipping(true)
    setFlipType('next')

    await animate(0, -180, 700)

    setSpread(target)
    setFlipAngle(0)
    setFlipType(null)
    setIsFlipping(false)
  }, [spread, totalSpreads, isFlipping, animate])

  const goPrev = useCallback(async () => {
    if (spread <= 0 || isFlipping) return
    const target = spread - 1
    setIsFlipping(true)
    setFlipType('prev')

    await animate(0, 180, 700)

    setSpread(target)
    setFlipAngle(0)
    setFlipType(null)
    setIsFlipping(false)
  }, [spread, isFlipping, animate])

  if (!edicion) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Link to="/ediciones" className="font-inter text-turquesa">Volver a ediciones</Link>
      </div>
    )
  }

  const leftIndex = spread * 2
  const rightIndex = spread * 2 + 1
  const leftPhoto = edicion.fotos[leftIndex]
  const rightPhoto = edicion.fotos[rightIndex]

  const nextLeft = edicion.fotos[(spread + 1) * 2]
  const nextRight = edicion.fotos[(spread + 1) * 2 + 1]
  const prevLeft = edicion.fotos[(spread - 1) * 2]
  const prevRight = edicion.fotos[(spread - 1) * 2 + 1]

  const shadowIntensity = Math.abs(flipAngle) / 180 * 0.35

  return (
    <div className="md:h-screen flex flex-col md:overflow-hidden bg-[#f8f6f2]">
      <Nav />

      <div className="flex-1 flex flex-col pt-28 min-h-0">
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-10 pb-4 flex-shrink-0">
          <div className="flex items-center gap-4">
            <Link
              to="/ediciones"
              className="font-inter text-[11px] font-semibold text-texto/30 uppercase tracking-[0.15em] hover:text-magenta transition-colors flex items-center gap-1.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Ediciones
            </Link>
            <span className="text-texto/10">|</span>
            <h1 className="font-inter text-xl sm:text-2xl md:text-3xl font-black leading-none" style={{ color: edicion.color }}>
              {edicion.title}
            </h1>
            <span className="font-inter text-xs text-texto/30 font-light hidden sm:inline">
              {edicion.desc}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <button
                onClick={() => prevYear && navigate(`/ediciones/${prevYear}`)}
                disabled={!prevYear}
                className="w-7 h-7 rounded-full border border-texto/10 flex items-center justify-center text-texto/30 hover:text-magenta hover:border-magenta transition-all disabled:opacity-15 disabled:cursor-default"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <span className="font-inter text-[11px] text-texto/30 font-semibold uppercase tracking-[0.1em]">
                Ediciones
              </span>
              <button
                onClick={() => nextYear && navigate(`/ediciones/${nextYear}`)}
                disabled={!nextYear}
                className="w-7 h-7 rounded-full border border-texto/10 flex items-center justify-center text-texto/30 hover:text-magenta hover:border-magenta transition-all disabled:opacity-15 disabled:cursor-default"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile carousel */}
        {edicion.fotos.length > 0 && (
          <div className="md:hidden flex flex-col items-center px-4 pt-2 pb-20">
            <img
              src={edicion.fotos[mobileIndex]}
              alt={`Foto ${mobileIndex + 1}`}
              className="w-full rounded-xl object-cover"
              style={{ maxHeight: '55vh' }}
            />
            <div className="flex items-center justify-center gap-6 mt-4">
              <button
                onClick={() => setMobileIndex(i => Math.max(0, i - 1))}
                disabled={mobileIndex === 0}
                className="w-10 h-10 rounded-full bg-white border-2 border-texto/15 flex items-center justify-center text-texto/50 disabled:opacity-20 disabled:cursor-default shadow-md"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <span className="font-inter text-xs text-texto/30 tabular-nums">
                {mobileIndex + 1} / {edicion.fotos.length}
              </span>
              <button
                onClick={() => setMobileIndex(i => Math.min(edicion.fotos.length - 1, i + 1))}
                disabled={mobileIndex >= edicion.fotos.length - 1}
                className="w-10 h-10 rounded-full bg-white border-2 border-texto/15 flex items-center justify-center text-texto/50 disabled:opacity-20 disabled:cursor-default shadow-md"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Desktop Book + arrows */}
        {edicion.fotos.length > 0 ? (
          !imagesLoaded ? (
            // Loading state
            <div className="hidden md:flex flex-1 items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div
                  className="w-10 h-10 border-2 border-texto/10 rounded-full animate-spin"
                  style={{ borderTopColor: edicion.color }}
                />
                <span className="font-inter text-sm text-texto/30">Cargando álbum...</span>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex flex-1 flex-row items-center justify-center px-4 pb-8 min-h-0 gap-8">
              {/* Desktop left arrow */}
              <button
                onClick={goPrev}
                disabled={spread === 0 || isFlipping}
                className="hidden md:flex w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-texto/15 items-center justify-center text-texto/50 hover:bg-magenta hover:text-white hover:border-magenta transition-all disabled:opacity-20 disabled:cursor-default disabled:hover:bg-white disabled:hover:text-texto/40 disabled:hover:border-texto/10 flex-shrink-0 shadow-md"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Book */}
              <div className="relative flex-1 max-w-3xl" style={{ perspective: '2500px', maxHeight: '100%' }}>
                <div className="relative mx-auto" style={{ aspectRatio: '16 / 10', maxHeight: 'calc(100vh - 210px)' }}>
                  {/* Book shadow */}
                  <div className="absolute -bottom-4 left-[5%] right-[5%] h-8" style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />

                  <div className="absolute inset-0 rounded-sm" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.05), 0 10px 40px -10px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.04)', transformStyle: 'preserve-3d' }}>

                    {/* LEFT PAGE */}
                    <div className="absolute top-0 bottom-0 left-0 right-1/2 bg-[#ebe7e0] overflow-hidden rounded-l-sm" style={{ transformStyle: 'preserve-3d' }}>
                      <PageImage src={leftPhoto} side="left" />

                      {flipType === 'next' && Math.abs(flipAngle) > 90 && (
                        <div className="absolute inset-0 z-[5]">
                          <PageImage src={nextLeft} side="left" />
                        </div>
                      )}

                      {flipType === 'prev' && (
                        <>
                          <div className="absolute inset-0 z-[5]">
                            <PageImage src={prevLeft} side="left" />
                          </div>
                          <div
                            className="absolute inset-0 z-[35]"
                            style={{
                              transformOrigin: 'right center',
                              transform: `rotateY(${flipAngle}deg)`,
                              transformStyle: 'preserve-3d',
                            }}
                          >
                            <div className="absolute inset-0 bg-[#ebe7e0] overflow-hidden rounded-l-sm" style={{ backfaceVisibility: 'hidden' }}>
                              <PageImage src={leftPhoto} side="left" />
                              <div className="absolute inset-0 pointer-events-none" style={{ background: `rgba(0,0,0,${shadowIntensity * 0.4})` }} />
                            </div>
                            <div className="absolute inset-0 bg-[#ede9e3] overflow-hidden rounded-r-sm" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                              <PageImage src={prevRight} side="right" />
                            </div>
                          </div>
                        </>
                      )}

                      <div className="absolute top-0 bottom-0 right-0 w-4 pointer-events-none z-[40]" style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.1), transparent)' }} />
                    </div>

                    {/* RIGHT PAGE */}
                    <div className="absolute top-0 bottom-0 left-1/2 right-0 bg-[#ede9e3] overflow-hidden rounded-r-sm" style={{ transformStyle: 'preserve-3d' }}>
                      <PageImage src={rightPhoto} side="right" />

                      {flipType === 'prev' && Math.abs(flipAngle) > 90 && (
                        <div className="absolute inset-0 z-[5]">
                          <PageImage src={prevRight} side="right" />
                        </div>
                      )}

                      {flipType === 'next' && (
                        <>
                          <div className="absolute inset-0 z-[5]">
                            <PageImage src={nextRight} side="right" />
                          </div>
                          <div
                            className="absolute inset-0 z-[35]"
                            style={{
                              transformOrigin: 'left center',
                              transform: `rotateY(${flipAngle}deg)`,
                              transformStyle: 'preserve-3d',
                            }}
                          >
                            <div className="absolute inset-0 bg-[#ede9e3] overflow-hidden rounded-r-sm" style={{ backfaceVisibility: 'hidden' }}>
                              <PageImage src={rightPhoto} side="right" />
                              <div className="absolute inset-0 pointer-events-none" style={{ background: `rgba(0,0,0,${shadowIntensity * 0.4})` }} />
                            </div>
                            <div className="absolute inset-0 bg-[#ebe7e0] overflow-hidden rounded-l-sm" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                              <PageImage src={nextLeft} side="left" />
                            </div>
                          </div>
                        </>
                      )}

                      <div className="absolute top-0 bottom-0 left-0 w-4 pointer-events-none z-[40]" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.1), transparent)' }} />
                    </div>

                    {/* Spine */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[7px] z-[50] pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.04) 20%, rgba(255,255,255,0.08) 50%, rgba(0,0,0,0.04) 80%, rgba(0,0,0,0.12) 100%)' }} />
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-2 rounded-b z-[50]" style={{ background: 'rgba(0,0,0,0.06)' }} />
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-3 h-2 rounded-t z-[50]" style={{ background: 'rgba(0,0,0,0.06)' }} />

                    {/* Stacked pages */}
                    <div className="absolute -bottom-[2px] left-[2px] right-[2px] h-[2px] bg-[#ddd8d0] rounded-b-sm z-[-1]" />
                    <div className="absolute -bottom-[4px] left-[4px] right-[4px] h-[2px] bg-[#d5d0c8] rounded-b-sm z-[-2]" />
                  </div>
                </div>
              </div>

              {/* Desktop right arrow */}
              <button
                onClick={goNext}
                disabled={spread >= totalSpreads - 1 || isFlipping}
                className="hidden md:flex w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-texto/15 items-center justify-center text-texto/50 hover:bg-magenta hover:text-white hover:border-magenta transition-all disabled:opacity-20 disabled:cursor-default disabled:hover:bg-white disabled:hover:text-texto/40 disabled:hover:border-texto/10 flex-shrink-0 shadow-md"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          )
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="font-inter text-xl text-texto/25 font-light">Fotos próximamente</p>
          </div>
        )}
      </div>

      <MiniCountdown />
    </div>
  )
}
