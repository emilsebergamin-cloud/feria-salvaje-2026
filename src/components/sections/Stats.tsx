import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const start = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

const stats = [
  { value: 90, label: 'productores' },
  { value: 300, label: 'etiquetas' },
  { value: 4000, label: 'asistentes' },
  { value: 8, label: 'países' },
]

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 px-6 border-y border-magenta/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-wrap justify-between gap-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {stats.map((stat, i) => {
            const { count, ref } = useCountUp(stat.value)
            return (
              <div
                key={stat.label}
                ref={ref}
                className="flex items-baseline gap-2 sm:gap-3"
              >
                <span className="font-inter text-5xl sm:text-6xl md:text-7xl font-black text-magenta leading-none">
                  +{count.toLocaleString()}
                </span>
                <span className="font-inter text-sm sm:text-base text-texto/35 font-light">
                  {stat.label}
                </span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
