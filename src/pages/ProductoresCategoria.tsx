import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageLayout from '../components/sections/PageLayout'
import { vinosNacionales, vinosInternacionales, afines, gastronomia, type Productor } from '../lib/productores'

const categorias: Record<string, { label: string; data: Productor[]; color: string }> = {
  nacionales: { label: 'Vinos nacionales', data: vinosNacionales, color: '#BE008D' },
  internacionales: { label: 'Vinos internacionales', data: vinosInternacionales, color: '#42B7A4' },
  afines: { label: 'Afines', data: afines, color: '#FFF500' },
  gastronomia: { label: 'Gastronomía', data: gastronomia, color: '#252653' },
}

const paletteColors = ['#BE008D', '#42B7A4', '#FFF500', '#252653']

export default function ProductoresCategoria() {
  const { categoria } = useParams()
  const cat = categorias[categoria || '']

  if (!cat) {
    return (
      <PageLayout>
        <section className="py-20 px-6 text-center">
          <p className="font-inter text-texto/50">Categoría no encontrada</p>
          <Link to="/productores" className="font-inter text-turquesa mt-4 inline-block">
            Ver todos los productores
          </Link>
        </section>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/productores"
            className="font-inter text-[11px] font-semibold text-texto/30 uppercase tracking-[0.15em] hover:text-magenta transition-colors flex items-center gap-1.5 mb-6"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Todos los productores
          </Link>

          <div className="flex items-center gap-4">
            <div
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: cat.color }}
            />
            <h1 className="font-inter text-4xl sm:text-5xl md:text-6xl font-black text-texto leading-[0.95]">
              {cat.label}
            </h1>
          </div>

          <p className="mt-4 font-inter text-lg text-texto/50 font-light">
            {cat.data.length} productores
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {cat.data.map((p, i) => {
              const color = paletteColors[i % paletteColors.length]
              return (
                <motion.div
                  key={p.nombre}
                  className="rounded-xl border border-texto/5 px-5 py-4 transition-all duration-300 cursor-default group"
                  style={{ backgroundColor: 'white' }}
                  whileHover={{ y: -5, scale: 1.03, backgroundColor: color + '45' }}
                  transition={{ duration: 0.15 }}
                >
                  <p className="font-inter text-sm font-semibold text-texto transition-colors duration-300">
                    <span className="group-hover:hidden">{p.nombre}</span>
                    <span className="hidden group-hover:inline" style={{ color }}>{p.nombre}</span>
                  </p>
                  <p className="font-inter text-[11px] text-texto/35 mt-0.5">
                    {p.origen}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
