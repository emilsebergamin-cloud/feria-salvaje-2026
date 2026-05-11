export default function ProximaEdicion() {
  return (
    <section className="py-28 sm:py-36 px-6 bg-white relative overflow-hidden">
      {/* Decorative accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 80% 50%, #BE008D, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative">
        <div>
          <span className="font-inter text-xs font-semibold text-turquesa uppercase tracking-[0.3em]">
            5ta edición porteña
          </span>

          <h2 className="mt-8 font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-texto leading-[0.9] tracking-tight">
            Octubre<br />
            <span className="text-turquesa">2026</span>
          </h2>

          <p className="mt-6 font-inter text-lg sm:text-xl text-texto/40 font-light">
            Buenos Aires, Argentina
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://feriasalvaje.empretienda.com.ar" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3.5 bg-magenta text-white font-inter font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-magenta/90 transition-colors"
            >
              Conseguí tus entradas
            </a>
            <a
              href="/exponer"
              className="px-8 py-3.5 border border-texto/15 text-texto/50 font-inter font-medium text-sm uppercase tracking-wider rounded-full hover:border-magenta/30 hover:text-magenta transition-all"
            >
              Quiero exponer
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
