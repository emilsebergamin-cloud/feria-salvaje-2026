export default function Newsletter() {
  return (
    <section className="py-14 sm:py-18 px-6 bg-texto/[0.03] border-t border-texto/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-texto leading-tight">
            No te pierdas nada
          </h2>
          <p className="mt-2 font-inter text-sm text-texto/40 font-light">
            Suscribite para recibir novedades sobre productores, fechas y entradas.
          </p>
        </div>

        <form
          className="flex items-center gap-2 w-full md:w-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Tu email"
            className="flex-1 md:w-64 px-5 py-3 rounded-full bg-white border border-texto/10 text-texto placeholder-texto/30 font-inter text-sm focus:outline-none focus:border-turquesa/50 transition-all"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-magenta text-white font-inter font-semibold text-sm uppercase tracking-wider rounded-full transition-colors flex-shrink-0"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  )
}
