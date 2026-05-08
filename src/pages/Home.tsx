import Nav from '../components/sections/Nav'
import Hero from '../components/sections/Hero'

export default function Home() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <Nav transparent />
      <Hero />
    </div>
  )
}
