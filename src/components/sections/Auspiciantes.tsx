const sponsors = ['Stanley', 'Marca 2', 'Marca 3', 'Marca 4', 'Marca 5', 'Marca 6']

export default function Auspiciantes() {
  return (
    <section className="py-20 sm:py-24 px-6 bg-white border-y border-texto/5">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-inter text-xs font-semibold text-texto/30 uppercase tracking-[0.3em]">
          Nos acompañan
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {sponsors.map((name) => (
            <div
              key={name}
              className="w-24 h-12 sm:w-32 sm:h-14 bg-texto/[0.04] rounded-lg flex items-center justify-center"
            >
              <span className="font-inter text-xs text-texto/20 font-medium uppercase tracking-wider">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
