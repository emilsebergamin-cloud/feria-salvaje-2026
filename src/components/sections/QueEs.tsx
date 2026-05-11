import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: 'easeOut' as const },
} as const

export default function QueEs() {
  return (
    <section id="que-es" className="py-24 sm:py-32 px-6 bg-magenta/[0.04]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          className="font-inter text-xs font-semibold text-magenta uppercase tracking-[0.3em]"
          {...fadeUp}
        >
          5ta edición · Octubre 2026
        </motion.span>

        <motion.h2
          className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-texto leading-tight"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
        >
          Más que un evento,{' '}
          <span className="text-magenta italic">una comunidad.</span>
        </motion.h2>

        <motion.p
          className="mt-8 font-inter text-lg sm:text-xl md:text-[1.4rem] leading-[1.7] text-texto/65 font-light max-w-3xl mx-auto"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
        >
          Feria Salvaje es una comunidad construida alrededor del vino como experiencia,
          encuentro y relato. Un espacio donde lo humano, lo sensible y lo colectivo
          toman protagonismo.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
        >
          <Link
            to="/sobre"
            className="font-inter text-sm font-medium text-magenta border border-magenta/20 rounded-full px-6 py-3 hover:bg-magenta hover:text-white transition-all duration-300"
          >
            Conocé nuestra historia
          </Link>
          <Link
            to="/productores"
            className="font-inter text-sm font-medium text-texto/50 border border-texto/10 rounded-full px-6 py-3 hover:border-turquesa/30 hover:text-turquesa transition-all duration-300"
          >
            Ver productores
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
