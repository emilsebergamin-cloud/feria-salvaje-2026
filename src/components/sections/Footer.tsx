export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & description */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/assets/logos/03_logo_completo_claro.svg"
              alt="Feria Salvaje"
              className="h-10 w-auto mb-4"
            />
            <p className="font-inter text-sm text-white/40 leading-relaxed">
              Vinos naturales, biodinámicos y de mínima intervención. Buenos Aires, Argentina.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-inter text-xs font-semibold text-white/60 uppercase tracking-[0.2em] mb-4">
              La feria
            </h4>
            <ul className="space-y-2.5">
              {['Historia', 'Experiencia', '¿Qué es el vino natural?', '¿Querés exponer?'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-inter text-sm text-white/40 hover:text-amarillo transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-inter text-xs font-semibold text-white/60 uppercase tracking-[0.2em] mb-4">
              Ediciones
            </h4>
            <ul className="space-y-2.5">
              {['2025', '2023', '2022', '2021'].map((year) => (
                <li key={year}>
                  <a href="#" className="font-inter text-sm text-white/40 hover:text-amarillo transition-colors">
                    Edición {year}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-inter text-xs font-semibold text-white/60 uppercase tracking-[0.2em] mb-4">
              Tienda
            </h4>
            <ul className="space-y-2.5">
              {['Entradas', 'Vinos', 'Merch'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-inter text-sm text-white/40 hover:text-amarillo transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-inter text-xs font-semibold text-white/60 uppercase tracking-[0.2em] mb-4 mt-8">
              Redes
            </h4>
            <ul className="space-y-2.5">
              {['Instagram', 'TikTok'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-inter text-sm text-white/40 hover:text-amarillo transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-white/25">
            © 2026 Feria Salvaje. Todos los derechos reservados.
          </p>
          <a
            href="mailto:feriasalvaje@gmail.com"
            className="font-inter text-xs text-white/25 hover:text-white/50 transition-colors"
          >
            feriasalvaje@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
