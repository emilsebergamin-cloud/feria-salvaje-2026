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
    <div className="flex flex-col items-center w-full sm:w-auto gap-2">
      <span className="font-inter text-[10px] text-white/30 uppercase tracking-[0.25em] font-medium">Faltan</span>
      <div className="flex items-baseline justify-center gap-1.5 sm:gap-2 text-white/90">
        <span className="font-mono text-2xl sm:text-2xl md:text-3xl font-bold tabular-nums">{time.dias}</span>
        <span className="font-mono text-[10px] sm:text-[10px] font-medium text-white/30 uppercase tracking-wide mr-1.5 sm:mr-2">d</span>
        <span className="font-mono text-2xl sm:text-2xl md:text-3xl font-bold tabular-nums">{String(time.horas).padStart(2, '0')}</span>
        <span className="font-mono text-[10px] sm:text-[10px] font-medium text-white/30 uppercase tracking-wide mr-1.5 sm:mr-2">h</span>
        <span className="font-mono text-2xl sm:text-2xl md:text-3xl font-bold tabular-nums">{String(time.minutos).padStart(2, '0')}</span>
        <span className="font-mono text-[10px] sm:text-[10px] font-medium text-white/30 uppercase tracking-wide mr-1.5 sm:mr-2">m</span>
        <span className="font-mono text-2xl sm:text-2xl md:text-3xl font-bold tabular-nums">{String(time.segundos).padStart(2, '0')}</span>
        <span className="font-mono text-[10px] sm:text-[10px] font-medium text-white/30 uppercase tracking-wide">s</span>
      </div>
    </div>
  )
}
