import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Sobre', to: '/sobre' },
  { label: 'Productores', to: '/productores' },
  { label: 'Ediciones', to: '/ediciones' },
  { label: 'Prensa', to: '/prensa' },
  { label: 'Exponer', to: '/exponer' },
]

export default function Nav({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const showTransparent = transparent && !scrolled

  useEffect(() => {
    if (!transparent) return
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [transparent])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo — only visible on internal pages */}
        {!isHome && (
          <Link
            to="/"
            className="flex-shrink-0 font-inter font-black text-lg sm:text-xl uppercase tracking-[0.15em] text-texto transition-colors hover:text-magenta"
          >
            Feria Salvaje
          </Link>
        )}

        {/* Desktop links */}
        <div className={`hidden md:flex items-center gap-7 ${isHome ? 'mx-auto' : 'ml-auto'}`}>
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`font-inter text-[13px] font-medium uppercase tracking-[0.1em] px-4 py-2 rounded-full transition-all duration-200 ${
                location.pathname === link.to
                  ? 'bg-amarillo text-texto'
                  : showTransparent
                    ? 'text-white hover:bg-amarillo hover:text-texto'
                    : 'text-texto hover:bg-amarillo hover:text-texto'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 ${isHome ? 'ml-auto' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-5 h-0.5 transition-all ${showTransparent ? 'bg-white' : 'bg-texto'}`}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-texto/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-inter text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all ${
                    location.pathname === link.to ? 'bg-amarillo text-texto' : 'text-texto'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
