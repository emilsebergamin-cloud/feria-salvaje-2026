import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-navy">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <Link to="/">
          <img
            src="/assets/logos/03_logo_completo_claro.svg"
            alt="Feria Salvaje"
            className="h-8 w-auto opacity-40 hover:opacity-60 transition-opacity"
          />
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {[
            { label: 'Nosotros', to: '/sobre' },
            { label: 'Line-up', to: '/lineup' },
            { label: 'Productores', to: '/productores' },
            { label: 'Ediciones', to: '/ediciones' },
            { label: 'Prensa', to: '/prensa' },
            { label: 'Exponer', to: '/exponer' },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="font-inter text-[11px] text-white/25 hover:text-magenta transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <a href="https://www.instagram.com/feriasalvaje" target="_blank" rel="noopener noreferrer" className="font-inter text-[11px] text-white/25 hover:text-magenta transition-colors">
            Instagram
          </a>
          <span className="text-white/10 hidden sm:inline">|</span>
          <a href="https://feriasalvaje.empretienda.com.ar" target="_blank" rel="noopener noreferrer" className="font-inter text-[11px] text-white/25 hover:text-magenta transition-colors">
            Entradas
          </a>
          <span className="text-white/10 hidden sm:inline">|</span>
          <a
            href="mailto:feriasalvaje@gmail.com"
            className="font-inter text-[11px] text-white/25 hover:text-white/50 transition-colors"
          >
            feriasalvaje@gmail.com
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-4 border-t border-white/[0.04]">
        <p className="font-inter text-[10px] text-white/15 text-center">
          © 2026 Feria Salvaje. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
