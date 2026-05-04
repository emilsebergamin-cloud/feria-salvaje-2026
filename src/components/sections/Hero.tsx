import { motion } from 'framer-motion'
import GradientMesh from '../ui/GradientMesh'
import Countdown from '../ui/Countdown'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
      <GradientMesh
        colors={['#BE008D', '#D1109B', '#A0007A']}
        speed={0.3}
        grain={0.05}
        fade={0.3}
      />

      {/* Top gradient overlay for nav legibility */}
      <div
        className="absolute top-0 left-0 right-0 h-28 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.18), transparent)',
        }}
      />

      {/* Main content — centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
        {/* Logo with animated wings */}
        <motion.div
          className="relative w-[340px] sm:w-[520px] md:w-[660px] lg:w-[750px]"
          style={{
            aspectRatio: '1600 / 900',
            filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.25)) drop-shadow(0 0 60px rgba(255, 187, 2, 0.15))',
          }}
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
            style={{ transformOrigin: '47.5% 39%' }}
            animate={{ rotate: [0, -12, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.img
            src="/assets/logos/ala_der.svg"
            alt=""
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ transformOrigin: '53% 42%' }}
            animate={{ rotate: [0, 12, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Countdown — subtle, single line feel */}
        <motion.div
          className="mt-4"
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
