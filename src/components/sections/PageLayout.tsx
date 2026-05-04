import Nav from './Nav'
import Newsletter from './Newsletter'
import Footer from './Footer'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="pt-20">
        {children}
      </main>
      <Newsletter />
      <Footer />
    </>
  )
}
