import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../components/sections/PageLayout'

const ediciones = [
  { slug: '2021', year: '2021', fecha: 'Nov 2021', desc: '1ra edición · Buenos Aires', flyer: '/assets/ediciones/flyer-2021-new.webp', objectPos: 'center 15%' },
  { slug: '2022-mendoza', year: '2022', fecha: 'Jun 2022', desc: '2da edición · Mendoza', flyer: '/assets/ediciones/flyer-2022-mendoza.webp', objectPos: 'center 35%' },
  { slug: '2022', year: '2022', fecha: 'Nov 2022', desc: '2da edición · Buenos Aires', flyer: '/assets/ediciones/flyer-2022.webp', objectPos: 'center center' },
  { slug: '2023', year: '2023', fecha: 'Dic 2023', desc: '3ra edición · Buenos Aires', flyer: '/assets/ediciones/flyer-2023.webp', objectPos: 'center center' },
  { slug: '2025', year: '2025', fecha: 'Jun 2025', desc: '4ta edición · Buenos Aires', flyer: '/assets/ediciones/flyer-2025.webp', objectPos: 'center center' },
]

export default function EdicionesPage() {
  return (
    <PageLayout>
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div>
            <span className="font-inter text-xs font-semibold text-turquesa uppercase tracking-[0.3em]">
              Nuestra historia
            </span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-7xl font-black text-texto leading-[0.95]">
              Ediciones anteriores
            </h1>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {ediciones.map((ed) => (
              <motion.div key={ed.slug} whileHover={{ y: -4 }}>
                <Link
                  to={`/ediciones/${ed.slug}`}
                  className="block rounded-2xl overflow-hidden shadow-md relative group transition-all duration-300"
                >
                  {/* Flyer image */}
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={ed.flyer}
                      alt={`Flyer Feria Salvaje ${ed.year}`}
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500 object-cover"
                      style={{ objectPosition: ed.objectPos }}
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  {/* Bottom bar with date */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
                    <span className="font-inter text-[10px] font-semibold text-white/80 uppercase tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {ed.desc}
                    </span>
                    <span className="font-inter text-[9px] font-bold text-magenta bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm whitespace-nowrap">
                      {ed.fecha}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
