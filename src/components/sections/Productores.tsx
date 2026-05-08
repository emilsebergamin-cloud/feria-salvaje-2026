import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { vinosNacionales, vinosInternacionales, afines, gastronomia, type Productor } from '../../lib/productores'

const tabs = [
  { label: 'Vinos nacionales', hash: 'nacionales', data: vinosNacionales, color: '#BE008D' },
  { label: 'Vinos internacionales', hash: 'internacionales', data: vinosInternacionales, color: '#42B7A4' },
  { label: 'Afines', hash: 'afines', data: afines, color: '#FFF500' },
  { label: 'Gastronomía', hash: 'gastronomia', data: gastronomia, color: '#252653' },
]

const paletteColors = ['#BE008D', '#42B7A4', '#FFF500', '#252653']

function ProductorCard({ productor, index }: { productor: Productor; index: number }) {
  const color = paletteColors[index % paletteColors.length]

  return (
    <motion.div
      className="rounded-xl border border-texto/5 px-5 py-4 transition-all duration-300 cursor-default group"
      style={{ backgroundColor: 'white' }}
      whileHover={{ y: -5, scale: 1.03, backgroundColor: color + '45' }}
                  transition={{ duration: 0.15 }}
    >
      <p
        className="font-inter text-sm font-semibold text-texto transition-colors duration-300"
        style={{ ['--hover-color' as string]: color }}
      >
        <span className="group-hover:hidden">{productor.nombre}</span>
        <span className="hidden group-hover:inline" style={{ color }}>{productor.nombre}</span>
      </p>
      <p className="font-inter text-[11px] text-texto/35 mt-0.5">
        {productor.origen}
      </p>
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
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-2 sm:p-1.5 sm:bg-texto/[0.03] sm:rounded-full w-full sm:w-fit">
          {tabs.map((tab, i) => {
            const isActive = activeTab === i
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`prod-tab px-5 py-3 sm:py-2.5 rounded-full font-inter text-sm font-medium transition-all duration-300 w-full sm:w-auto ${
                  isActive
                    ? 'prod-tab-active border-[1.5px] border-magenta bg-magenta text-white sm:border-0'
                    : 'border-[1.5px] border-magenta/30 bg-transparent text-magenta sm:border-0 sm:text-texto/45'
                }`}
                style={isActive ? { ['--tab-color' as string]: tab.color } : {}}
              >
                {tab.label}
                <span className="ml-1.5 text-xs opacity-60">{tab.data.length}</span>
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {tabs[activeTab].data.map((p, i) => (
            <ProductorCard key={p.nombre} productor={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
