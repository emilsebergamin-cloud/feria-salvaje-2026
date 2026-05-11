import { motion } from 'framer-motion'
import Countdown from '../ui/Countdown'

export default function Hero() {
  return (
    <section
      className="relative w-full flex flex-col overflow-hidden"
      style={{
        minHeight: '100dvh',
        paddingTop: 'env(safe-area-inset-top, 0px)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        backgroundColor: '#1a0a14',
      }}
    >
      {/* Photo background */}
      <div
        className="absolute"
        style={{
          top: 'calc(-1 * env(safe-area-inset-top, 16px) - 16px)',
          left: '-16px',
          right: '-16px',
          bottom: 'calc(-1 * env(safe-area-inset-bottom, 16px) - 16px)',
          backgroundImage: 'url(/assets/fotos/hero.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute"
        style={{
          top: 'calc(-1 * env(safe-area-inset-top, 16px) - 16px)',
          left: '-16px',
          right: '-16px',
          bottom: 'calc(-1 * env(safe-area-inset-bottom, 16px) - 16px)',
          backgroundColor: 'rgba(0,0,0,0.65)',
        }}
      />

      {/* Subtle magenta tint */}
      <div
        className="absolute"
        style={{
          top: 'calc(-1 * env(safe-area-inset-top, 16px) - 16px)',
          left: '-16px',
          right: '-16px',
          bottom: 'calc(-1 * env(safe-area-inset-bottom, 16px) - 16px)',
          backgroundColor: 'rgba(190, 0, 141, 0.15)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center px-2 sm:px-4 sm:justify-center justify-start pt-[18vh] sm:pt-0 pb-8 sm:pb-0">
        {/* Logo */}
        <motion.div
          className="hero-logo relative w-[98vw] sm:w-[85vw] sm:max-w-[850px]"
          style={{ filter: 'drop-shadow(0 0 20px rgba(255, 245, 0, 0.15)) drop-shadow(0 0 40px rgba(255, 245, 0, 0.08))' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src="/assets/logos/logo_sin_alas.svg" alt="Feria Salvaje" className="w-full h-full" loading="eager" fetchPriority="high" />
          <motion.img
            src="/assets/logos/ala_izq.svg" alt=""
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ transformOrigin: '47% 40%' }}
            animate={{ rotate: [0, -8, 0] }}
            transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
          />
          <motion.img
            src="/assets/logos/ala_der.svg" alt=""
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ transformOrigin: '54% 43%' }}
            animate={{ rotate: [0, 8, 0] }}
            transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
          />
        </motion.div>

        {/* Countdown only (no CTA) */}
        <motion.div
          className="mt-8 sm:-mt-2 w-full sm:w-auto flex flex-col items-center"
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
