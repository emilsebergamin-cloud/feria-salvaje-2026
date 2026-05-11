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
      className="rounded-xl border border-texto/5 px-3.5 py-3 sm:px-5 sm:py-4 transition-all duration-300 cursor-default"
      style={{ backgroundColor: 'white', ['--card-color' as string]: color }}
      whileHover={{ y: -5, scale: 1.03, backgroundColor: color + '45' }}
      whileTap={{ scale: 0.97, backgroundColor: color + '45' }}
      transition={{ duration: 0.15 }}
    >
      <p className="font-inter text-[13px] sm:text-sm font-semibold text-texto transition-colors duration-300">
        {productor.nombre}
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
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:flex-wrap sm:gap-2 sm:p-1.5 sm:bg-texto/[0.03] sm:rounded-full sm:w-fit">
          {tabs.map((tab, i) => {
            const isActive = activeTab === i
            const isDark = tab.color === '#252653'
            const isYellow = tab.color === '#FFF500'
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`prod-tab px-4 py-3 sm:py-2.5 rounded-full font-inter text-[13px] sm:text-sm transition-all duration-300 sm:border-0 ${
                  isActive
                    ? 'prod-tab-active border-[1.5px] font-bold'
                    : 'border-[1.5px] bg-transparent font-medium'
                }`}
                style={isActive
                  ? {
                      ['--tab-color' as string]: tab.color,
                      backgroundColor: tab.color,
                      borderColor: tab.color,
                      color: '#ffffff',
                    }
                  : {
                      borderColor: isYellow ? tab.color + '80' : tab.color + '40',
                      color: isDark ? '#252653' : isYellow ? '#b3aa00' : tab.color,
                    }
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
            <ProductorCard key={p.nombre} productor={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
