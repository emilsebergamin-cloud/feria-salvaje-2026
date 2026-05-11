import { motion } from 'framer-motion'
import PageLayout from '../components/sections/PageLayout'

export default function Exponer() {
  return (
    <PageLayout>
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <span className="font-inter text-xs font-semibold text-turquesa uppercase tracking-[0.3em]">
              Sumate a Salvaje
            </span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-7xl font-black text-texto leading-[1.1]">
              ¿Querés exponer<br />
              <span className="text-turquesa italic">o auspiciar?</span>
            </h1>
            <p className="mt-6 font-inter text-lg text-texto/50 font-light max-w-2xl">
              Si sos productor, elaborador, o tenés una marca afín al mundo del vino natural, nos encantaría conocerte. Completá el formulario y nos ponemos en contacto.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdpL5JBUswQznjj7Mn-OT1a1Z8wFun2a4FkaLuem_7vvXfsyg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 w-full sm:w-auto text-center px-8 py-4 sm:py-3.5 bg-magenta text-white font-inter font-bold text-sm uppercase tracking-[0.15em] rounded-full transition-all duration-300"
            >
              Completar formulario
            </a>
          </div>

          <motion.img
            src="/assets/ilustraciones/ilu-05.svg"
            alt=""
            className="hidden md:block w-[350px] lg:w-[450px]"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.35 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          />
        </div>
      </section>
    </PageLayout>
  )
}
