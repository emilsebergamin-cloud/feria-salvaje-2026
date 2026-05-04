import { motion } from 'framer-motion'

const dias = [
  {
    dia: 'Domingo',
    descripcion: 'Degustación abierta, charlas en vivo, encuentro con productores.',
    accent: 'bg-magenta',
  },
  {
    dia: 'Lunes',
    descripcion: 'Edición especial: catas guiadas, experiencias gastronómicas.',
    accent: 'bg-magenta/60',
  },
]

export default function Dias() {
  return (
    <section className="py-20 sm:py-28 px-6 bg-magenta/[0.04]">
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="font-inter text-xs font-semibold text-magenta uppercase tracking-[0.3em] text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Días de la feria
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-5">
          {dias.map((d, i) => (
            <motion.div
              key={d.dia}
              className="bg-white rounded-2xl border border-texto/5 p-8 sm:p-10 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <div className={`absolute top-0 left-0 w-1.5 h-full ${d.accent} rounded-l-2xl`} />

              <h3 className="font-inter text-2xl sm:text-3xl font-bold text-texto ml-4">
                {d.dia}
              </h3>
              <p className="mt-3 font-inter text-sm text-texto/50 leading-relaxed font-light ml-4">
                {d.descripcion}
              </p>
              <a
                href="#entradas"
                className="inline-block mt-6 ml-4 font-inter text-xs font-semibold text-magenta uppercase tracking-[0.2em] hover:text-magenta/70 transition-colors"
              >
                Comprar entrada →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
