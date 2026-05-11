import { motion } from 'framer-motion'
import PageLayout from '../components/sections/PageLayout'

export default function LineUp() {
  return (
    <PageLayout>
      <section className="py-20 sm:py-28 px-6 min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="font-inter text-xs font-semibold text-turquesa uppercase tracking-[0.3em]">
              5ta edición · Octubre 2026
            </span>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-8xl font-black text-texto leading-[0.9]">
              Line-up
            </h1>
          </motion.div>

          <motion.div
            className="mt-12 inline-flex flex-col items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {/* Ilustración con animación */}
            <motion.img
              src="/assets/ilustraciones/ilu-02.svg"
              alt=""
              className="w-44 sm:w-56 md:w-64 opacity-40"
              animate={{
                rotate: [0, -8, 0, 8, 0],
              }}
              transition={{
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
              style={{ transformOrigin: '50% 90%' }}
            />

            <p className="font-inter text-xl sm:text-2xl text-turquesa font-medium">
              Próximamente
            </p>

            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-texto/15" />
              <p className="font-inter text-sm text-texto/50 font-light">
                Estamos cerrando el line-up de productores para esta edición
              </p>
              <div className="w-8 h-[1px] bg-texto/15" />
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}
