import { motion } from 'framer-motion'

export default function QueEs() {
  return (
    <section className="py-24 sm:py-32 px-6 bg-magenta/[0.04]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.span
          className="font-inter text-xs font-semibold text-magenta uppercase tracking-[0.3em]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Sobre la feria
        </motion.span>

        <motion.p
          className="mt-8 font-inter text-xl sm:text-2xl md:text-[1.75rem] leading-[1.6] text-texto/75 font-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          Feria Salvaje es más que un evento: es una comunidad construida alrededor del vino como experiencia, encuentro y relato. Un espacio donde lo humano, lo sensible y lo colectivo toman protagonismo.
        </motion.p>

        <motion.a
          href="#"
          className="inline-block mt-10 font-inter text-sm font-medium text-magenta border border-magenta/20 rounded-full px-6 py-3 hover:bg-magenta hover:text-white transition-all duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          ¿Qué es el vino natural? →
        </motion.a>
      </div>
    </section>
  )
}
