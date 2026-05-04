import { motion } from 'framer-motion'

const headliners = ['Matías Michelini', 'Paula Michelini', 'SuperUco', 'Familia Cecchin']
const midTier = ['Alpamanta', 'Escala Humana', 'Finca Cosmos', 'Rocamadre', 'Casa Tano', 'Galileo', 'Bodega Costa', 'Utama']
const rest = ['El Monte', 'Atlántica', 'Noble San Javier', 'Uraqui', 'La Baguala', 'Asciende', 'Cara Sur', 'Chipica', 'La Rosendo', 'Primer Horizonte', 'Stella Crinita', 'Pielihueso', 'Cantina Mincarone', 'Bodega Mariana', 'Pablo Fallabrino']

export default function LineUp() {
  return (
    <section className="py-28 sm:py-36 px-6 bg-navy text-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block font-inter text-[11px] font-semibold text-white uppercase tracking-[0.3em] border border-white/20 px-4 py-1.5 rounded-full">
            Productores confirmados
          </span>

          <h2 className="mt-8 font-inter text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight">
            Line Up
          </h2>
        </motion.div>

        {/* Headliners */}
        <motion.div
          className="mt-14 flex flex-wrap gap-x-6 gap-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {headliners.map((name) => (
            <span key={name} className="font-inter text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {name}
            </span>
          ))}
        </motion.div>

        {/* Mid tier */}
        <motion.div
          className="mt-8 flex flex-wrap gap-x-5 gap-y-1.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {midTier.map((name) => (
            <span key={name} className="font-inter text-xl sm:text-2xl font-semibold text-white/60 leading-relaxed">
              {name}
            </span>
          ))}
        </motion.div>

        {/* Rest */}
        <motion.div
          className="mt-6 flex flex-wrap gap-x-4 gap-y-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {rest.map((name) => (
            <span key={name} className="font-inter text-sm text-white/30 font-light">
              {name}
            </span>
          ))}
        </motion.div>

        {/* Coming soon */}
        <div className="mt-14">
          <span className="inline-block font-inter text-[11px] font-semibold text-white/40 uppercase tracking-[0.2em] border border-white/10 px-4 py-1.5 rounded-full">
            Lineup completo próximamente
          </span>
        </div>
      </div>
    </section>
  )
}
