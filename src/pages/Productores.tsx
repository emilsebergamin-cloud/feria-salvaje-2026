import { motion } from 'framer-motion'
import PageLayout from '../components/sections/PageLayout'
import ProductoresSection from '../components/sections/Productores'

export default function ProductoresPage() {
  return (
    <PageLayout>
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-inter text-xs font-semibold text-magenta uppercase tracking-[0.3em]">
              Quiénes participan
            </span>
            <h1 className="mt-4 font-inter text-5xl sm:text-6xl md:text-7xl font-black text-texto leading-[0.95]">
              Productores
            </h1>
            <p className="mt-4 font-inter text-lg text-texto/50 font-light max-w-2xl">
              Más de 90 productores de Argentina y el mundo. Vinos naturales, bebidas afines y gastronomía.
            </p>
          </motion.div>
        </div>
      </section>

      <ProductoresSection />
    </PageLayout>
  )
}
