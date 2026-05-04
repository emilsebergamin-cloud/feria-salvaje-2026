import { motion } from 'framer-motion'
import PageLayout from '../components/sections/PageLayout'
import Stats from '../components/sections/Stats'
import AnimatedBottle from '../components/ui/AnimatedBottle'

export default function Sobre() {
  return (
    <PageLayout>
      {/* Hero — asymmetric, left-aligned */}
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-inter text-xs font-semibold text-magenta uppercase tracking-[0.3em]">
              Sobre la feria
            </span>
            <h1 className="mt-4 font-inter text-5xl sm:text-6xl md:text-7xl font-black text-texto leading-[0.95]">
              Más que<br />un evento,
            </h1>
            <h1 className="font-inter text-5xl sm:text-6xl md:text-7xl font-black text-magenta leading-[0.95]">
              una comunidad.
            </h1>
            <p className="mt-6 font-inter text-lg text-texto/50 font-light max-w-md">
              Un espacio donde lo humano, lo sensible y lo colectivo toman protagonismo.
            </p>
          </motion.div>

          {/* Bottle animation as visual element */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <AnimatedBottle className="w-[250px] sm:w-[300px] opacity-15" />
          </motion.div>
        </div>
      </section>

      {/* Pull quote — full width, dramatic */}
      <section className="py-16 sm:py-20 px-6 bg-magenta">
        <div className="max-w-4xl mx-auto">
          <motion.blockquote
            className="font-inter text-2xl sm:text-3xl md:text-4xl font-light text-white/90 leading-snug text-center italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            "Salir de lo establecido y explorar formas alternativas de consumir, preguntar y producir."
          </motion.blockquote>
        </div>
      </section>

      {/* Historia — two column */}
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-inter text-xs font-semibold text-magenta uppercase tracking-[0.3em]">
              Historia
            </span>
            <div className="mt-4 w-12 h-0.5 bg-magenta/30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-inter text-lg sm:text-xl leading-relaxed text-texto/70 font-light">
              Feria Salvaje nace en el 2021, luego de la pandemia, como motivo especial de encuentro. Encontrarse con el alma del vino. Con la historia detrás de cada etiqueta. Con las personas creadoras y las mentes curiosas que buscaban lo mismo que nosotros.
            </p>
            <p className="mt-6 font-inter text-lg sm:text-xl leading-relaxed text-texto/70 font-light">
              Nos mueve y motiva esta forma de ser y estar en este mundo. Fue así como ya han pasado más de 4000 personas por Salvaje y año a año logramos de cada edición un universo especial y delicioso. Esta será nuestra <strong className="text-texto font-medium">5ta edición porteña</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats — horizontal, no cards */}
      <Stats />

      {/* Valores — two column inverted */}
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[2fr_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-inter text-lg sm:text-xl leading-relaxed text-texto/70 font-light">
              Sabemos que hablar de "vinos naturales" hoy no es simple. No hay información ni reglas claras, por eso asumimos un rol activo: investigar, preguntar, viajar, probar y construir el criterio más acorde e inclusivo posible.
            </p>
            <p className="mt-6 font-inter text-lg sm:text-xl leading-relaxed text-texto/70 font-light">
              Nos interesa representar productores que cultivan y se vinculan con la tierra de forma sana, con respeto, visión y cuidado; que fermentan espontáneamente sus vinos usando únicamente levaduras nativas. <strong className="text-texto font-medium">No aceptamos el uso de aditivos enológicos.</strong>
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-inter text-xs font-semibold text-magenta uppercase tracking-[0.3em]">
              Nuestros valores
            </span>
            <div className="mt-4 w-12 h-0.5 bg-magenta/30" />
            <p className="mt-6 font-inter text-sm text-texto/40 leading-relaxed">
              Sulfitos: nulo o mínimo<br />
              Máx 30 mg/L<br />
              Excepcional hasta 50 mg/L
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experiencia — full width highlight */}
      <section className="py-20 sm:py-28 px-6 bg-magenta/[0.04]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-inter text-xs font-semibold text-magenta uppercase tracking-[0.3em]">
              La experiencia
            </span>
            <div className="mt-4 w-12 h-0.5 bg-magenta/30" />
            <h2 className="mt-6 font-inter text-3xl sm:text-4xl font-bold text-texto leading-tight">
              ¿Qué incluye<br />tu entrada?
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-inter text-lg sm:text-xl leading-relaxed text-texto/70 font-light">
              Al comprar tu ticket contarás con una <strong className="text-texto font-medium">copa personal coleccionable</strong> que te dará acceso a la degustación libre de más de 300 vinos y todos los rubros alimenticios, así como también el encuentro cara a cara con las personas que los crean.
            </p>
            <p className="mt-6 font-inter text-lg sm:text-xl leading-relaxed text-texto/70 font-light">
              Dentro de Salvaje también se viven experiencias enriquecedoras como charlas y demostraciones en vivo.
            </p>

            <a
              href="#entradas"
              className="inline-block mt-10 px-8 py-3.5 bg-magenta text-white font-inter font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-magenta/90 transition-colors self-start"
            >
              Conseguí tus entradas
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}
