import { motion } from 'framer-motion'
import PageLayout from '../components/sections/PageLayout'
import ProductoresSection from '../components/sections/Productores'

export default function ProductoresPage() {
  return (
    <PageLayout>
      <section className="pt-28 sm:pt-36 pb-20 sm:pb-28 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative md:min-h-[380px] sm:md:min-h-[440px]">
          <div className="relative z-10 max-w-xl pt-10 sm:pt-16">
            <span className="font-inter text-xs font-semibold text-turquesa uppercase tracking-[0.3em]">
              Quiénes participaron
            </span>
            <h1 className="mt-4 font-inter text-4xl sm:text-5xl md:text-7xl font-black text-texto leading-[0.95]">
              Productores
            </h1>
            <p className="mt-4 font-inter text-lg text-texto/50 font-light max-w-2xl">
              Más de 90 productores de Argentina y el mundo. Vinos naturales, bebidas afines y gastronomía.
            </p>
          </div>

          <motion.img
            src="/assets/ilustracion-persona-botella-negro.png"
            alt="Persona caminando con una botella de vino"
            className="hidden md:block absolute right-0 -top-20 h-[560px] lg:h-[620px] w-auto object-contain"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 0.35 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          />
        </div>
      </section>

      <ProductoresSection />
    </PageLayout>
  )
}
