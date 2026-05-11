import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Nosotros', to: '/sobre' },
  { label: 'Line-up', to: '/lineup' },
  { label: 'Productores', to: '/productores' },
  { label: 'Ediciones', to: '/ediciones' },
  { label: 'Prensa', to: '/prensa' },
  { label: 'Exponer', to: '/exponer' },
]

export default function Footer() {
  return (
    <footer className="py-10 sm:py-10 px-6 bg-navy">
      <div className="max-w-6xl mx-auto">
        {/* Top row: logo left — nav right, tops aligned */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-8">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 self-center md:self-start">
            <img
              src="/assets/logos/logotipo_claro_crop.svg"
              alt="Feria Salvaje"
              className="h-5 sm:h-6 w-auto opacity-45 hover:opacity-65 transition-opacity"
            />
          </Link>

          {/* Nav links + event info stacked right */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-inter text-xs text-white/40 hover:text-magenta transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://feriasalvaje.empretienda.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-xs text-magenta hover:text-white transition-colors py-1"
              >
                Entradas
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom row: social left — copyright right */}
        <div className="mt-8 pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4">
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/feriasalvaje"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/35 hover:text-magenta transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
              <span className="font-inter text-[11px]">@feriasalvaje</span>
            </a>
            <a
              href="mailto:feriasalvaje@gmail.com"
              className="flex items-center gap-2 text-white/35 hover:text-white/55 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13 2 4" />
              </svg>
              <span className="font-inter text-[11px]">feriasalvaje@gmail.com</span>
            </a>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-1">
            <p className="font-inter text-[11px] text-white/25 font-light">
              Octubre 2026 · Buenos Aires, Argentina
            </p>
            <p className="font-inter text-[10px] text-white/20">
              © 2026 Feria Salvaje
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
