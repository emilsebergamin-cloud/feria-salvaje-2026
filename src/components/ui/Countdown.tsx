import { useState, useEffect } from 'react'

const TARGET_DATE = new Date('2026-10-10T00:00:00-03:00')

function calcTimeLeft() {
  const now = new Date()
  const diff = TARGET_DATE.getTime() - now.getTime()

  if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 }

  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown() {
  const [time, setTime] = useState(calcTimeLeft)

  useEffect(() => {
    const interval = setInterval(() => setTime(calcTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center">
      {/* Numbers — clean, no container */}
      <div className="flex items-baseline gap-1.5 text-white/90">
        <span className="font-inter text-xl sm:text-2xl md:text-3xl font-bold tabular-nums">{time.dias}</span>
        <span className="font-inter text-[9px] sm:text-[10px] font-medium text-white/30 uppercase tracking-wide mr-1.5 sm:mr-2">d</span>
        <span className="font-inter text-xl sm:text-2xl md:text-3xl font-bold tabular-nums">{String(time.horas).padStart(2, '0')}</span>
        <span className="font-inter text-[9px] sm:text-[10px] font-medium text-white/30 uppercase tracking-wide mr-1.5 sm:mr-2">h</span>
        <span className="font-inter text-xl sm:text-2xl md:text-3xl font-bold tabular-nums">{String(time.minutos).padStart(2, '0')}</span>
        <span className="font-inter text-[9px] sm:text-[10px] font-medium text-white/30 uppercase tracking-wide mr-1.5 sm:mr-2">m</span>
        <span className="font-inter text-xl sm:text-2xl md:text-3xl font-bold tabular-nums">{String(time.segundos).padStart(2, '0')}</span>
        <span className="font-inter text-[9px] sm:text-[10px] font-medium text-white/30 uppercase tracking-wide">s</span>
      </div>

      {/* CTA */}
      <a
        href="https://feriasalvaje.empretienda.com.ar"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 px-6 sm:px-8 py-3 sm:py-3.5 bg-magenta text-white font-inter font-bold text-xs sm:text-sm uppercase tracking-[0.15em] rounded-full transition-all duration-300"
      >
        Comprá tus entradas
      </a>
    </div>
  )
}
