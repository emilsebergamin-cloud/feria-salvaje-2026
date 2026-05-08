import Nav from './Nav'
import Footer from './Footer'
import MiniCountdown from '../ui/MiniCountdown'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="pt-20">
        {children}
      </main>
      <MiniCountdown />
      <Footer />
    </>
  )
}
