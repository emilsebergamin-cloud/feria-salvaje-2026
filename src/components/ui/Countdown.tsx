import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TARGET_DATE = new Date('2026-10-01T00:00:00-03:00')

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

const labels = ['Días', 'Horas', 'Min', 'Seg'] as const

export default function Countdown() {
  const [time, setTime] = useState(calcTimeLeft)

  useEffect(() => {
    const interval = setInterval(() => setTime(calcTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  const values = [time.dias, time.horas, time.minutos, time.segundos]

  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      {labels.map((label, i) => (
        <div key={label} className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex flex-col items-center px-3.5 sm:px-5 py-3 sm:py-4 rounded-lg border border-white/15 bg-white/[0.06] backdrop-blur-sm">
            <motion.span
              key={values[i]}
              className="font-inter text-xl sm:text-3xl font-bold text-white tabular-nums leading-none"
              initial={{ y: -3, opacity: 0.6 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {String(values[i]).padStart(2, '0')}
            </motion.span>
            <span className="font-inter text-[10px] sm:text-[11px] text-white/40 uppercase tracking-[0.15em] mt-1.5">
              {label}
            </span>
          </div>

          {i < 3 && (
            <span className="text-white/20 text-base sm:text-lg font-light select-none">:</span>
          )}
        </div>
      ))}
    </div>
  )
}
