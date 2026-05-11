import { Link } from 'react-router-dom'
import PageLayout from '../components/sections/PageLayout'

export default function NotFound() {
  return (
    <PageLayout>
      <section className="py-28 sm:py-36 px-6 min-h-[60vh] flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-inter text-xs font-semibold text-magenta uppercase tracking-[0.3em]">
            Página no encontrada
          </span>

          <h1 className="mt-6 font-display text-7xl sm:text-8xl md:text-9xl font-black text-texto/10 leading-none">
            404
          </h1>

          <p className="mt-6 font-inter text-lg text-texto/50 font-light">
            Esta página no existe o fue movida.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="px-8 py-3.5 bg-magenta text-white font-inter font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-magenta/90 transition-colors"
            >
              Ir al inicio
            </Link>
            <Link
              to="/productores"
              className="px-8 py-3.5 border border-texto/15 text-texto/50 font-inter font-medium text-sm uppercase tracking-wider rounded-full hover:border-magenta/30 hover:text-magenta transition-all"
            >
              Ver productores
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
