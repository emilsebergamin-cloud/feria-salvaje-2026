import { motion } from 'framer-motion'
import Countdown from '../ui/Countdown'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
      {/* Photo background */}
      <img
        src="/assets/fotos/hero.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 60%' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Subtle magenta tint */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(190, 0, 141, 0.15)', mixBlendMode: 'screen' }}
      />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
        <motion.div
          className="relative w-[95vw] sm:w-[85vw] max-w-[850px]"
          style={{ aspectRatio: '1600 / 900', filter: 'drop-shadow(0 0 20px rgba(255, 245, 0, 0.15)) drop-shadow(0 0 40px rgba(255, 245, 0, 0.08))' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src="/assets/logos/logo_sin_alas.svg"
            alt="Feria Salvaje"
            className="w-full h-full"
          />

          <motion.img
            src="/assets/logos/ala_izq.svg"
            alt=""
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ transformOrigin: '47% 40%' }}
            animate={{ rotate: [0, -8, 0] }}
            transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
          />

          <motion.img
            src="/assets/logos/ala_der.svg"
            alt=""
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ transformOrigin: '54% 43%' }}
            animate={{ rotate: [0, 8, 0] }}
            transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
          />
        </motion.div>

        <motion.div
          className="mt-2 sm:-mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Countdown />
        </motion.div>
      </div>
    </section>
  )
}
