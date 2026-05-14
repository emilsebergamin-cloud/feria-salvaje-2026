import { motion } from 'framer-motion'
import PageLayout from '../components/sections/PageLayout'


const notas = [
  {
    medio: 'Perfil',
    titulo: 'Se viene la nueva edición de Feria Salvaje',
    url: 'https://www.perfil.com/noticias/cultura/se-viene-la-nueva-edicion-de-feria-salvaje-el-encuentro-de-productores-y-bebedores-de-vino-natural.phtml',
    img: '/assets/prensa/card-1.webp',
  },
  {
    medio: 'Il Globo',
    titulo: 'Feria Salvaje: el mundo del vino natural y biodinámico llega a Buenos Aires',
    url: 'https://ilglobo.com/es/news/feria-salvaje-el-mundo-del-vino-natural-y-biodinamico-llega-a-buenos-aires-129937/',
    img: '/assets/prensa/card-2.webp',
  },
  {
    medio: 'Diario de Cultura',
    titulo: 'Vinventions acompaña la tercera edición de Feria Salvaje',
    url: 'https://www.diariodecultura.com.ar/turismo-cultural/vinventions-acompana-la-tercera-edicion-de-feria-salvaje-el-encuentro-de-vinos-naturales-libres-y-biodinamicos/',
    img: '/assets/prensa/card-3.webp',
  },
  {
    medio: 'Enolife',
    titulo: 'Presentan 250 etiquetas de vinos naturales en la Feria Salvaje',
    url: 'https://enolife.com.ar/es/el-28-y-29-6-presentan-250-etiquetas-de-vinos-naturales-en-la-feria-salvaje-de-palermo/',
    img: '/assets/prensa/card-4.webp',
  },
  {
    medio: 'Latam Voyage',
    titulo: 'Todo listo para la tercera edición de Feria Salvaje',
    url: 'https://latamvoyage.com/todo-listo-para-la-tercera-edicion-de-feria-salvaje-con-sus-vinos-naturales-y-biodinamicos/',
    img: '/assets/prensa/card-5.webp',
  },
]

export default function Prensa() {
  return (
    <PageLayout>
      {/* Notas */}
      <section className="pt-20 sm:pt-28 pb-10 sm:pb-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div>
            <span className="font-inter text-xs font-semibold text-turquesa uppercase tracking-[0.3em]">
              Feria Salvaje en los medios
            </span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-7xl font-black text-texto leading-[0.95]">
              Prensa
            </h1>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {notas.map((nota) => (
              <motion.div
                key={nota.medio}
                className="block rounded-2xl aspect-[3/4] relative overflow-hidden group transition-all duration-300 shadow-md cursor-pointer"
                whileHover={{ y: -4 }}
                onClick={() => window.open(nota.url, '_blank', 'noopener,noreferrer')}
              >
                  <img
                    src={nota.img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-texto/85 via-texto/50 to-texto/30 group-hover:from-texto/90 group-hover:via-texto/55 transition-all duration-300" />
                  <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-6">
                    <div>
                      <span className="font-inter text-[10px] font-semibold text-white/40 uppercase tracking-[0.2em]">
                        Nota en
                      </span>
                      <h3 className="mt-2 font-inter text-xl sm:text-2xl font-black text-white leading-tight">
                        {nota.medio}
                      </h3>
                    </div>
                    <div>
                      <p className="font-inter text-[11px] text-white/50 font-light leading-relaxed line-clamp-3 group-hover:text-white/70 transition-colors duration-300">
                        {nota.titulo}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-white/30 group-hover:text-white/70 transition-all duration-300">
                        <span className="font-inter text-[10px] font-semibold uppercase tracking-[0.15em]">
                          Leer nota
                        </span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto prensa + formulario */}
      <section className="py-14 sm:py-20 px-6 bg-texto/[0.02] border-t border-texto/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <span className="font-inter text-xs font-semibold text-turquesa uppercase tracking-[0.3em]">
              Contacto de prensa
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-black text-texto leading-[1.1]">
              ¿Querés cubrir<br />
              <span className="text-turquesa italic">Feria Salvaje?</span>
            </h2>
            <p className="mt-6 font-inter text-lg text-texto/50 font-light max-w-2xl">
              Si sos periodista, medio o creador de contenido y querés cubrir la próxima edición, completá el formulario y nos ponemos en contacto.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdY-R7Uuv3GW_xlo9LfW3OwDvvqT-ZpIsP-b9zYJO_6BaOI-Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 w-full sm:w-auto text-center px-8 py-4 sm:py-3.5 bg-magenta text-white font-inter font-bold text-sm uppercase tracking-[0.15em] rounded-full transition-all duration-300"
            >
              Completar formulario
            </a>
          </div>

          <motion.img
            src="/assets/ilustraciones/ilu-01.svg"
            alt=""
            className="hidden md:block w-[450px] lg:w-[600px]"
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
