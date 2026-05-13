import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { vinosNacionales, vinosInternacionales, afines, gastronomia, type Productor } from '../../lib/productores'

const tabs = [
  { label: 'Vinos nacionales', shortLabel: 'Nacionales', hash: 'nacionales', data: vinosNacionales, color: '#BE008D' },
  { label: 'Vinos internacionales', shortLabel: 'Internacionales', hash: 'internacionales', data: vinosInternacionales, color: '#42B7A4' },
  { label: 'Afines', shortLabel: 'Afines', hash: 'afines', data: afines, color: '#FFF500' },
  { label: 'Gastronomía', shortLabel: 'Gastronomía', hash: 'gastronomia', data: gastronomia, color: '#252653' },
]

const paletteColors = ['#BE008D', '#42B7A4', '#FFF500', '#252653']

function ProductorCard({ productor, index }: { productor: Productor; index: number }) {
  const color = paletteColors[index % paletteColors.length]

  return (
    <motion.div
      className="group rounded-xl border border-texto/5 px-3.5 py-3 sm:px-5 sm:py-4 transition-all duration-300 cursor-default relative"
      style={{ backgroundColor: 'white', ['--card-color' as string]: color }}
      whileHover={{ y: -5, scale: 1.03, backgroundColor: color + '45' }}
      whileTap={{ scale: 0.97, backgroundColor: color + '45' }}
      transition={{ duration: 0.15 }}
    >
      <p className="font-inter text-[13px] sm:text-sm font-semibold text-texto transition-colors duration-300 pr-6">
        {productor.nombre}
      </p>
      <p className="font-inter text-[11px] text-texto/45 mt-0.5">
        {productor.origen}{productor.tipo ? ` · ${productor.tipo}` : ''}
      </p>
      {productor.ig && (
        <a
          href={`https://instagram.com/${productor.ig}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-60 sm:opacity-0 group-hover:opacity-60 hover:!opacity-100 transition-opacity duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-texto">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
      )}
    </motion.div>
  )
}

export default function Productores() {
  const [activeTab, setActiveTab] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash) {
      const index = tabs.findIndex(t => t.hash === hash)
      if (index !== -1) {
        setActiveTab(index)
        setTimeout(() => {
          const el = document.getElementById('productores')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location.hash])

  return (
    <section className="pb-24 sm:pb-32 px-6 bg-white scroll-mt-28" id="productores">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:flex-wrap sm:gap-2 sm:p-1.5 sm:bg-texto/[0.03] sm:rounded-full sm:w-fit">
          {tabs.map((tab, i) => {
            const isActive = activeTab === i
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`prod-tab px-4 py-3 sm:py-2.5 rounded-full font-inter text-[13px] sm:text-sm transition-all duration-300 sm:border-0 ${
                  isActive
                    ? 'prod-tab-active border-[1.5px] font-bold'
                    : 'border-[1.5px] border-texto/15 text-texto/50 bg-transparent font-medium'
                }`}
                style={isActive
                  ? {
                      ['--tab-color' as string]: tab.color,
                      backgroundColor: tab.color + '30',
                      borderColor: tab.color,
                    }
                  : undefined
                }
              >
                <span className="sm:hidden">{tab.shortLabel}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="ml-1 text-[11px] opacity-60">{tab.data.length}</span>
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
          {tabs[activeTab].data.map((p, i) => (
            <ProductorCard key={`${activeTab}-${p.nombre}`} productor={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
