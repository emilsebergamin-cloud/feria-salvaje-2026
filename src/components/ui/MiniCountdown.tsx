import { useState, useEffect } from 'react'
import { EVENT_DATE, TICKET_URL } from '../../lib/config'

function calcDays() {
  const diff = EVENT_DATE.getTime() - new Date().getTime()
  if (diff <= 0) return 0
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export default function MiniCountdown() {
  const [days, setDays] = useState(calcDays)

  useEffect(() => {
    const interval = setInterval(() => setDays(calcDays()), 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <a
      href={TICKET_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full bg-texto/85 backdrop-blur-md shadow-lg cursor-pointer hover:bg-magenta/90 transition-colors duration-300"
    >
      <div className="flex items-center gap-1.5">
        <span className="font-inter text-[10px] text-white/50 font-medium tracking-[0.05em]">
          Faltan
        </span>
        <span className="font-inter text-sm font-bold text-amarillo tabular-nums">
          {days}
        </span>
        <span className="font-inter text-[10px] text-white/50 font-medium tracking-[0.05em]">
          días
        </span>
      </div>
    </a>
  )
}
