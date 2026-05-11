import { motion } from 'framer-motion'

const ediciones = [
  { year: '2021', color: 'bg-magenta' },
  { year: '2022', color: 'bg-turquesa' },
  { year: '2023', color: 'bg-amarillo' },
  { year: '2025', color: 'bg-navy' },
]

export default function Ediciones() {
  return (
    <section className="py-24 sm:py-32 px-6 bg-magenta/[0.04]" id="ediciones">
      <div className="max-w-6xl mx-auto">
        <div>
          <span className="font-inter text-xs font-semibold text-magenta uppercase tracking-[0.3em]">
            Nuestra historia
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-texto leading-tight">
            Ediciones anteriores
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {ediciones.map((ed) => (
            <motion.a
              key={ed.year}
              href="#"
              className={`${ed.color} rounded-2xl p-8 sm:p-10 flex flex-col justify-end aspect-[4/5] relative overflow-hidden group cursor-pointer`}
              whileHover={{ y: -6 }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

              <span className="relative font-inter text-6xl sm:text-7xl font-black text-white/90 leading-none">
                {ed.year}
              </span>
              <span className="relative mt-2 font-inter text-sm text-white/60 font-medium uppercase tracking-wider">
                Ver edición →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
