import { motion } from 'framer-motion'
import PageLayout from '../components/sections/PageLayout'

const ediciones = [
  { year: '2025', color: 'bg-magenta', desc: '4ta edición porteña' },
  { year: '2023', color: 'bg-turquesa', desc: '3ra edición' },
  { year: '2022', color: 'bg-amarillo', desc: '2da edición' },
  { year: '2021', color: 'bg-navy', desc: 'La primera Salvaje' },
]

export default function EdicionesPage() {
  return (
    <PageLayout>
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-inter text-xs font-semibold text-magenta uppercase tracking-[0.3em]">
              Nuestra historia
            </span>
            <h1 className="mt-4 font-inter text-5xl sm:text-6xl md:text-7xl font-black text-texto leading-[0.95]">
              Ediciones anteriores
            </h1>
          </motion.div>

          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {ediciones.map((ed, i) => (
              <motion.a
                key={ed.year}
                href="#"
                className={`${ed.color} rounded-2xl p-10 sm:p-14 flex flex-col justify-end aspect-[3/2] relative overflow-hidden group`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <span className="relative font-inter text-7xl sm:text-8xl font-black text-white/90 leading-none">
                  {ed.year}
                </span>
                <span className="relative mt-2 font-inter text-sm text-white/60 font-medium">
                  {ed.desc}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
