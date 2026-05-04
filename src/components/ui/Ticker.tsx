export default function Ticker() {
  const text = 'BUENOS AIRES  ·  VINOS NATURALES DEL MUNDO  ·  5TA EDICIÓN  ·  OCTUBRE 2026  ·  '

  return (
    <div className="w-full overflow-hidden py-4 bg-magenta/10">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="font-inter text-xs sm:text-sm font-semibold text-magenta uppercase tracking-[0.4em]"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
