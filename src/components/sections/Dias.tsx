import { motion } from 'framer-motion'

const dias = [
  {
    dia: 'Domingo',
    descripcion: 'Degustación abierta, charlas en vivo, encuentro con productores.',
  },
  {
    dia: 'Lunes',
    descripcion: 'Edición especial: catas guiadas, experiencias gastronómicas.',
  },
]

export default function Dias() {
  return (
    <section className="py-20 sm:py-28 px-6 bg-texto/[0.02]">
      <div className="max-w-4xl mx-auto">
        <p className="font-inter text-xs font-semibold text-texto/40 uppercase tracking-[0.3em] text-center mb-12">
          Días de la feria
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {dias.map((d) => (
            <motion.div
              key={d.dia}
              className="bg-white rounded-2xl border border-texto/5 p-8 sm:p-10 relative overflow-hidden"
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-turquesa rounded-l-2xl" />

              <h3 className="font-inter text-2xl sm:text-3xl font-bold text-texto ml-4">
                {d.dia}
              </h3>
              <p className="mt-3 font-inter text-sm text-texto/50 leading-relaxed font-light ml-4">
                {d.descripcion}
              </p>
              <a
                href="https://feriasalvaje.empretienda.com.ar" target="_blank" rel="noopener noreferrer"
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
