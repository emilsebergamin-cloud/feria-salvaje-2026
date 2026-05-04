import { motion } from 'framer-motion'
import { useState } from 'react'
import { vinosNacionales, vinosInternacionales, afines, gastronomia, type Productor } from '../../lib/productores'

const tabs = [
  { label: 'Vinos nacionales', data: vinosNacionales },
  { label: 'Vinos internacionales', data: vinosInternacionales },
  { label: 'Afines', data: afines },
  { label: 'Gastronomía', data: gastronomia },
]

function ProductorCard({ productor }: { productor: Productor }) {
  return (
    <motion.div
      className="bg-white rounded-xl border border-texto/5 px-5 py-4 hover:border-magenta/30 hover:shadow-md transition-all duration-300 cursor-default group"
      whileHover={{ y: -3 }}
    >
      <p className="font-inter text-sm font-semibold text-texto group-hover:text-magenta transition-colors">
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

  return (
    <section className="pb-24 sm:pb-32 px-6 bg-white" id="productores">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full font-inter text-sm font-medium transition-all duration-200 ${
                activeTab === i
                  ? 'bg-magenta text-white'
                  : 'bg-magenta/[0.05] text-texto/50 hover:text-texto/80 hover:bg-magenta/10'
              }`}
            >
              {tab.label}
              <span className="ml-1.5 text-xs opacity-60">{tab.data.length}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={activeTab}
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {tabs[activeTab].data.map((p) => (
            <ProductorCard key={p.nombre} productor={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
