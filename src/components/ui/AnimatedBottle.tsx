import { motion } from 'framer-motion'

export default function AnimatedBottle({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Left wing — rotation ±8° */}
      <motion.img
        src="/assets/animacion/05_botella_animacion_ala_izq.svg"
        alt=""
        className="absolute inset-0 w-full h-full"
        style={{ transformOrigin: '48% 45%' }}
        animate={{ rotate: [0, -8, 0, 8, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Right wing — rotation ±6°, different phase */}
      <motion.img
        src="/assets/animacion/05_botella_animacion_ala_der.svg"
        alt=""
        className="absolute inset-0 w-full h-full"
        style={{ transformOrigin: '55% 50%' }}
        animate={{ rotate: [0, 6, 0, -6, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Bottle body — gentle vertical float */}
      <motion.img
        src="/assets/animacion/05_botella_animacion_botella.svg"
        alt="Botella Feria Salvaje"
        className="relative w-full h-full"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
