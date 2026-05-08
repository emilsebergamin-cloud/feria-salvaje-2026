import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    label: 'Nosotros',
    to: '/sobre',
    photo: '/assets/fotos/nosotros.webp',
  },
  {
    label: 'Productores',
    to: '/productores',
    photo: '/assets/fotos/productores.webp',
  },
  {
    label: 'Ediciones',
    to: '/ediciones',
    photo: '/assets/fotos/ediciones.webp',
  },
  {
    label: 'Prensa',
    to: '/prensa',
    photo: '/assets/fotos/prensa.webp',
  },
  {
    label: 'Exponer',
    to: '/exponer',
    photo: '/assets/fotos/exponer.webp',
  },
]

export default function Explorar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <nav className="hidden md:flex flex-col justify-center gap-1 w-[180px] lg:w-[200px] flex-shrink-0 bg-texto/80 backdrop-blur-md px-6 py-8 relative overflow-hidden">
      {/* Photo background on hover — fills the entire sidebar */}
      {categories.map((cat, i) => (
        <div
          key={cat.label + '-bg'}
          className="absolute inset-0 transition-opacity duration-500"
          style={{ opacity: hoveredIndex === i ? 1 : 0 }}
        >
          <img
            src={cat.photo}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-texto/60" />
        </div>
      ))}

      {/* Links */}
      <div className="relative z-10 flex flex-col gap-1">
        {categories.map((cat, i) => (
          <Link
            key={cat.label}
            to={cat.to}
            className="group flex items-center gap-3 py-3 px-2 rounded-lg transition-all duration-300 hover:bg-white/10"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="w-[3px] h-4 rounded-full transition-all duration-300"
              style={{
                backgroundColor: hoveredIndex === i ? '#FFF500' : 'rgba(255,255,255,0.15)',
                height: hoveredIndex === i ? '20px' : '16px',
              }}
            />
            <span
              className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300"
              style={{
                color: hoveredIndex === i ? '#ffffff' : 'rgba(255,255,255,0.5)',
              }}
            >
              {cat.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
