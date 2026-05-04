import { motion } from 'framer-motion'
import PageLayout from '../components/sections/PageLayout'

const notas = [
  { medio: 'Perfil', titulo: 'Se viene la nueva edición de Feria Salvaje', url: 'https://www.perfil.com/noticias/cultura/se-viene-la-nueva-edicion-de-feria-salvaje-el-encuentro-de-productores-y-bebedores-de-vino-natural.phtml' },
  { medio: 'Il Globo', titulo: 'Feria Salvaje: el mundo del vino natural y biodinámico llega a Buenos Aires', url: 'https://ilglobo.com/es/news/feria-salvaje-el-mundo-del-vino-natural-y-biodinamico-llega-a-buenos-aires-129937/' },
  { medio: 'Diario de Cultura', titulo: 'Vinventions acompaña la tercera edición de Feria Salvaje', url: 'https://www.diariodecultura.com.ar/turismo-cultural/vinventions-acompana-la-tercera-edicion-de-feria-salvaje-el-encuentro-de-vinos-naturales-libres-y-biodinamicos/' },
  { medio: 'Enolife', titulo: 'Presentan 250 etiquetas de vinos naturales en la Feria Salvaje', url: 'https://enolife.com.ar/es/el-28-y-29-6-presentan-250-etiquetas-de-vinos-naturales-en-la-feria-salvaje-de-palermo/' },
  { medio: 'Latam Voyage', titulo: 'Todo listo para la tercera edición de Feria Salvaje', url: 'https://latamvoyage.com/todo-listo-para-la-tercera-edicion-de-feria-salvaje-con-sus-vinos-naturales-y-biodinamicos/' },
]

export default function Prensa() {
  return (
    <PageLayout>
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-inter text-xs font-semibold text-magenta uppercase tracking-[0.3em]">
              Feria Salvaje en los medios
            </span>
            <h1 className="mt-4 font-inter text-5xl sm:text-6xl md:text-7xl font-black text-texto leading-[0.95]">
              Prensa
            </h1>
          </motion.div>

          <div className="mt-14 flex flex-col gap-4">
            {notas.map((nota, i) => (
              <motion.a
                key={nota.medio}
                href={nota.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 sm:p-8 rounded-2xl border border-texto/5 bg-magenta/[0.02] hover:border-magenta/20 hover:bg-magenta/[0.04] transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div>
                  <span className="font-inter text-xs font-semibold text-magenta uppercase tracking-[0.2em]">
                    {nota.medio}
                  </span>
                  <p className="mt-2 font-inter text-base sm:text-lg text-texto/70 group-hover:text-texto transition-colors font-light">
                    {nota.titulo}
                  </p>
                </div>
                <span className="text-texto/20 group-hover:text-magenta transition-colors ml-4 flex-shrink-0 text-xl">
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
