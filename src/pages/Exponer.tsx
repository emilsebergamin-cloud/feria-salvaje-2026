import { motion } from 'framer-motion'
import PageLayout from '../components/sections/PageLayout'

export default function Exponer() {
  return (
    <PageLayout>
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-inter text-xs font-semibold text-magenta uppercase tracking-[0.3em]">
              Sumate a Salvaje
            </span>
            <h1 className="mt-4 font-inter text-5xl sm:text-6xl md:text-7xl font-black text-texto leading-[0.95]">
              ¿Querés exponer<br />
              <span className="text-magenta">o auspiciar?</span>
            </h1>
            <p className="mt-6 font-inter text-lg text-texto/50 font-light max-w-2xl">
              Si sos productor, elaborador, o tenés una marca afín al mundo del vino natural, nos encantaría conocerte. Completá el formulario y nos ponemos en contacto.
            </p>
          </motion.div>

          {/* Google Form placeholder */}
          <motion.div
            className="mt-14 rounded-2xl border border-texto/10 bg-magenta/[0.02] p-8 sm:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="font-inter text-texto/40 text-sm">
              Formulario de Google Forms — se embebe acá el iframe
            </p>
            <p className="mt-4 font-inter text-texto/30 text-xs">
              Mientras tanto podés escribirnos a{' '}
              <a href="mailto:feriasalvaje@gmail.com" className="text-magenta hover:underline">
                feriasalvaje@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}
