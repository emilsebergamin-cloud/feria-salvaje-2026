import { motion } from 'framer-motion'
import PageLayout from '../components/sections/PageLayout'
import Stats from '../components/sections/Stats'
import { TICKET_URL } from '../lib/config'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: 'easeOut' as const },
} as const

export default function Sobre() {
  return (
    <PageLayout>
      {/* Hero — foto full width con overlay */}
      <section className="group relative h-[50vh] sm:h-[70vh] min-h-[320px] sm:min-h-[480px] max-h-[70vh] overflow-hidden -mt-20">
        <img
          src="/assets/fotos/nosotros-comunidad.webp"
          alt="Comunidad degustando vinos en Feria Salvaje"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 bg-texto/10"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-texto/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-texto/85 via-texto/40 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-14 sm:pb-20">
          <div className="max-w-6xl mx-auto w-full">
            <motion.span
              className="font-inter text-xs font-semibold text-amarillo uppercase tracking-[0.3em]"
              {...fadeUp}
            >
              Nosotros
            </motion.span>
            <motion.h1
              className="mt-4 font-display text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95]"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              Más que un evento,<br />
              <span className="text-turquesa italic">una comunidad.</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Banner marquee */}
      <div className="w-full max-w-[100vw] overflow-hidden py-3 sm:py-4 bg-magenta">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-inter text-[10px] sm:text-xs font-medium text-white uppercase tracking-[0.3em]"
            >
              VINOS NATURALES &nbsp;· &nbsp;CHARLAS &nbsp;· &nbsp;BIODINAMIA &nbsp;· &nbsp;GASTRONOMÍA &nbsp;· &nbsp;NACIONALES &nbsp;· &nbsp;INTERNACIONALES &nbsp;· &nbsp;ENCUENTROS REALES &nbsp;· &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Intro + ilustración */}
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.p
            className="font-inter text-xl sm:text-2xl leading-relaxed text-texto/70 font-light"
            {...fadeUp}
          >
            Salvaje es un espacio de encuentro alrededor del vino natural, la sensibilidad y la curiosidad. Un lugar donde el disfrute convive con las ideas, los sabores con las historias y lo humano vuelve a ocupar el centro de la creatividad y el goce.
          </motion.p>

          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.35 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <img
              src="/assets/ilustraciones/ilu-03.svg"
              alt="Ilustración de dos chicas bebiendo vino"
              className="w-full max-w-[280px] md:max-w-[320px] object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Pull quote — turquesa */}
      <section className="py-16 sm:py-20 px-6 bg-turquesa">
        <div className="max-w-4xl mx-auto">
          <motion.blockquote
            className="font-inter text-2xl sm:text-3xl md:text-4xl font-light text-white/90 leading-snug text-center italic"
            {...fadeUp}
          >
            "Salir de lo establecido y explorar formas alternativas de consumir, preguntar y producir."
          </motion.blockquote>
        </div>
      </section>

      {/* Historia + galería de fotos */}
      <section id="historia" className="py-20 sm:py-28 px-6 scroll-mt-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 mb-16">
            <motion.div {...fadeUp}>
              <span className="font-inter text-xs font-semibold text-texto/40 uppercase tracking-[0.3em]">
                Historia
              </span>
              <div className="mt-4 w-12 h-0.5 bg-magenta/40" />
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              <p className="font-inter text-lg sm:text-xl leading-relaxed text-texto/70 font-light">
                Feria Salvaje nace en el 2021, luego de la pandemia, como motivo especial de encuentro. Encontrarse con el alma del vino. Con la historia detrás de cada etiqueta. Con las personas creadoras y las mentes curiosas que buscaban lo mismo que nosotros.
              </p>
              <p className="mt-6 font-inter text-lg sm:text-xl leading-relaxed text-texto/70 font-light">
                Nos mueve y motiva esta forma de ser y estar en este mundo. Fue así como ya han pasado más de 4000 personas por Salvaje y año a año logramos de cada edición un universo especial y delicioso. Esta será nuestra <strong className="text-texto font-medium">5ta edición porteña</strong>.
              </p>
            </motion.div>
          </div>

          {/* Mosaico de fotos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <motion.div className="rounded-xl overflow-hidden aspect-[3/4]" {...fadeUp}>
              <img src="/assets/fotos/encuentro.webp" alt="Visitantes conversando en la feria" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 bg-texto/10 saturate-[0.85] brightness-[0.95] sepia-[0.08]" loading="lazy" />
            </motion.div>
            <motion.div className="rounded-xl overflow-hidden aspect-[3/4]" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              <img src="/assets/fotos/servicio.webp" alt="Sirviendo vino naranjo en copa Salvaje" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 bg-texto/10 saturate-[0.85] brightness-[0.95] sepia-[0.08]" loading="lazy" />
            </motion.div>
            <motion.div className="rounded-xl overflow-hidden aspect-[3/4]" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
              <img src="/assets/fotos/nosotros.webp" alt="Gente en Feria Salvaje" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 bg-texto/10 saturate-[0.85] brightness-[0.95] sepia-[0.08]" loading="lazy" />
            </motion.div>
            <motion.div className="rounded-xl overflow-hidden aspect-[3/4]" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              <img src="/assets/ediciones/2023/14.webp" alt="Botellas de vino natural sobre aguayo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 bg-texto/10 saturate-[0.85] brightness-[0.95] sepia-[0.08]" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Valores — foto + texto */}
      <section id="valores" className="py-20 sm:py-28 px-6 scroll-mt-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:items-stretch items-start">
          <motion.div className="rounded-2xl overflow-hidden" {...fadeUp}>
            <img
              src="/assets/fotos/mesa-vinos-hd.webp"
              alt="Personas eligiendo vinos en una mesa de productores"
              className="w-full h-full object-cover bg-texto/10" loading="lazy"
            />
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <span className="font-inter text-xs font-semibold text-texto/40 uppercase tracking-[0.3em] md:-mt-0.5 md:block">
              Nuestros valores
            </span>
            <div className="mt-4 w-12 h-0.5 bg-magenta/40" />

            <p className="mt-8 font-inter text-lg sm:text-xl leading-relaxed text-texto/70 font-light">
              Sabemos que hablar de "vinos naturales" hoy no es simple. No hay información ni reglas claras, por eso asumimos un rol activo: investigar, preguntar, viajar, probar y construir el criterio más acorde e inclusivo posible.
            </p>
            <p className="mt-6 font-inter text-lg sm:text-xl leading-relaxed text-texto/70 font-light">
              <strong className="text-texto font-medium">Nos interesa representar productores que cultivan y se vinculan con la tierra de forma sana, con respeto, visión y cuidado; que fermentan espontáneamente sus vinos usando únicamente levaduras nativas.</strong>
            </p>
            <p className="mt-6 font-inter text-lg sm:text-xl leading-relaxed text-texto/70 font-light">
              No aceptamos el uso de aditivos enológicos como levaduras industriales seleccionadas, enzimas, acidificantes, estabilizantes, colorantes, saborizantes, pasteurizantes ni clarificantes.
            </p>

            <div className="mt-8 p-3.5 rounded-lg bg-turquesa/8 border border-turquesa/15">
              <p className="font-inter text-[14px] leading-relaxed text-turquesa/90 font-light">
                <strong className="text-turquesa font-medium">Sulfitos (SO2):</strong> el uso debe ser nulo o mínimo, en cantidades que no superen los 30 mg/L. En casos de niveles más elevados, siendo 50 mg/L indiferentemente del color y tipo de vino como tope máximo y excepcional, deberá ser declarado de forma transparente, quedando bajo nuestra decisión la posibilidad de participar o no en Feria Salvaje.
              </p>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Experiencia — foto full width + contenido */}
      <section id="experiencia" className="relative overflow-hidden scroll-mt-28">
        <div className="absolute inset-0">
          <img
            src="/assets/fotos/experiencia.webp"
            alt="La experiencia Feria Salvaje"
            className="w-full h-full object-cover bg-texto/20" loading="lazy"
          />
          <div className="absolute inset-0 bg-texto/75" />
        </div>

        <div className="relative z-10 py-20 sm:py-28 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
              <span className="font-inter text-xs font-semibold text-white/40 uppercase tracking-[0.3em]">
                La experiencia
              </span>
              <div className="mt-4 w-12 h-0.5 bg-magenta/40" />
              <h2 className="mt-6 font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                ¿Qué incluye<br />tu entrada?
              </h2>
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-inter text-lg sm:text-xl leading-relaxed text-white/70 font-light">
                La compra de tu entrada incluye una <strong className="text-white font-medium">copa personal coleccionable</strong>, la degustación libre de más de 300 vinos, otras bebidas y alimentos, así como también el encuentro cara a cara con las personas que los crean.
              </p>
              <p className="mt-6 font-inter text-lg sm:text-xl leading-relaxed text-white/70 font-light">
                Dentro de Salvaje también se viven experiencias enriquecedoras como charlas y demostraciones en vivo.
              </p>
              <p className="mt-6 font-inter text-lg sm:text-xl leading-relaxed text-white/70 font-light">
                Habrá un <strong className="text-white font-medium">patio gastronómico</strong> con stands de restaurantes porteños.
              </p>

              <a
                href={TICKET_URL} target="_blank" rel="noopener noreferrer"
                className="inline-block mt-10 w-full sm:w-auto text-center px-8 py-4 sm:py-3.5 bg-amarillo text-texto font-inter font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-magenta hover:text-white transition-colors sm:self-start"
              >
                Conseguí tus entradas
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
