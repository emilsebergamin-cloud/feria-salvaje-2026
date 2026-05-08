import { useEffect } from 'react'
import Nav from '../components/sections/Nav'
import Hero from '../components/sections/Hero'

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add('no-scroll')
    document.body.classList.add('no-scroll')
    return () => {
      document.documentElement.classList.remove('no-scroll')
      document.body.classList.remove('no-scroll')
    }
  }, [])

  return (
    <div className="w-screen h-dvh overflow-hidden">
      <Nav transparent />
      <Hero />
    </div>
  )
}
