import { motion } from 'framer-motion'

export default function Newsletter() {
  return (
    <section className="py-24 sm:py-32 px-6 bg-magenta">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-inter text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            No te pierdas nada
          </h2>
          <p className="mt-4 font-inter text-base text-white/70 font-light max-w-lg mx-auto">
            Suscribite para recibir novedades sobre productores, fechas y entradas anticipadas.
          </p>

          <form
            className="mt-10 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Tu email"
              className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-white/15 border border-white/20 text-white placeholder-white/40 font-inter text-sm focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-magenta font-inter font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-white/90 transition-colors flex-shrink-0"
            >
              Suscribirme
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
