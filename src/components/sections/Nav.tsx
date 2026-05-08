import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

type SubItem = { label: string; to: string; anchor?: boolean }
type NavLink = { label: string; to: string; sub?: SubItem[] }

const links: NavLink[] = [
  {
    label: 'Nosotros',
    to: '/sobre',
    sub: [
      { label: 'Historia', to: '/sobre#historia', anchor: true },
      { label: 'Valores', to: '/sobre#valores', anchor: true },
      { label: 'Experiencia', to: '/sobre#experiencia', anchor: true },
    ],
  },
  { label: 'Line-up', to: '/lineup' },
  {
    label: 'Productores',
    to: '/productores',
    sub: [
      { label: 'Nacionales', to: '/productores/nacionales' },
      { label: 'Internacionales', to: '/productores/internacionales' },
      { label: 'Afines', to: '/productores/afines' },
      { label: 'Gastronomía', to: '/productores/gastronomia' },
    ],
  },
  {
    label: 'Ediciones',
    to: '/ediciones',
    sub: [
      { label: '2021', to: '/ediciones/2021' },
      { label: '2022 Mendoza', to: '/ediciones/2022-mendoza' },
      { label: '2022 Buenos Aires', to: '/ediciones/2022' },
      { label: '2023', to: '/ediciones/2023' },
      { label: '2025', to: '/ediciones/2025' },
    ],
  },
  { label: 'Prensa', to: '/prensa' },
  { label: 'Exponer', to: '/exponer' },
]

export default function Nav({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const handleAnchorClick = useCallback((to: string) => {
    const [path, hash] = to.split('#')
    if (location.pathname === path && hash) {
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        setHoveredLink(null)
        setMobileOpen(false)
        return
      }
    }
    navigate(to)
    setTimeout(() => {
      if (hash) {
        const el = document.getElementById(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
    setHoveredLink(null)
    setMobileOpen(false)
  }, [location.pathname, navigate])

  const showTransparent = transparent && !scrolled

  useEffect(() => {
    if (!transparent) return
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [transparent])

  useEffect(() => {
    setMobileOpen(false)
    setMobileExpanded(null)
    setHoveredLink(null)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24 py-4">
        {/* Logo — only visible on internal pages */}
        {!isHome && (
          <Link to="/" className="flex-shrink-0">
            <img
              src="/assets/logos/logo_completo_oscuro.svg"
              alt="Feria Salvaje"
              className="h-14 sm:h-20 md:h-24 w-auto"
            />
          </Link>
        )}

        {/* Desktop links */}
        <div
          className={`hidden md:flex items-center gap-7 ${isHome ? 'mx-auto' : 'ml-auto'}`}
          onMouseLeave={() => setHoveredLink(null)}
        >
          {links.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setHoveredLink(link.label)}
            >
              <Link
                to={link.to}
                className={`font-inter text-[13px] font-medium uppercase tracking-[0.1em] px-4 py-2 rounded-full transition-all duration-200 ${
                  location.pathname === link.to || location.pathname.startsWith(link.to + '/')
                    ? 'bg-amarillo text-texto'
                    : showTransparent
                      ? 'text-white hover:bg-magenta hover:text-white'
                      : 'text-texto hover:bg-magenta hover:text-white'
                }`}
              >
                {link.label}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {link.sub && hoveredLink === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.1 }}
                    className="absolute top-full left-0 mt-1 w-full min-w-fit bg-white rounded-xl shadow-lg border border-texto/5 py-1.5 overflow-hidden"
                  >
                    {link.sub.map((sub) => (
                      sub.anchor ? (
                        <button
                          key={sub.label}
                          onClick={() => handleAnchorClick(sub.to)}
                          className="block w-full text-left px-3 py-2 font-inter text-[11px] text-texto/60 hover:text-magenta hover:bg-magenta/5 transition-colors whitespace-nowrap"
                        >
                          {sub.label}
                        </button>
                      ) : (
                        <Link
                          key={sub.label}
                          to={sub.to}
                          className="block px-3 py-2 font-inter text-[11px] text-texto/60 hover:text-magenta hover:bg-magenta/5 transition-colors whitespace-nowrap"
                        >
                          {sub.label}
                        </Link>
                      )
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden flex flex-col gap-2 p-3 ${isHome ? 'ml-auto' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-[2px] rounded-full transition-all ${showTransparent ? 'bg-white' : 'bg-texto'}`}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-texto/5 shadow-lg"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {links.map((link) => (
                <div key={link.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.to}
                      className={`font-inter text-sm font-semibold uppercase tracking-wider px-3 py-2.5 rounded-lg transition-all ${
                        location.pathname === link.to || location.pathname.startsWith(link.to + '/') ? 'text-magenta' : 'text-texto'
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.sub && (
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                        className="p-2 text-texto/25"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          className={`transition-transform duration-200 ${mobileExpanded === link.label ? 'rotate-180' : ''}`}
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>
                    )}
                  </div>

                  <AnimatePresence>
                    {link.sub && mobileExpanded === link.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 pb-2 flex flex-col gap-0.5">
                          {link.sub.map((sub) => (
                            sub.anchor ? (
                              <button
                                key={sub.label}
                                onClick={() => handleAnchorClick(sub.to)}
                                className="text-left font-inter text-xs text-texto/35 hover:text-magenta py-1.5 px-3 transition-colors"
                              >
                                {sub.label}
                              </button>
                            ) : (
                              <Link
                                key={sub.label}
                                to={sub.to}
                                className="font-inter text-xs text-texto/35 hover:text-magenta py-1.5 px-3 transition-colors"
                              >
                                {sub.label}
                              </Link>
                            )
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
