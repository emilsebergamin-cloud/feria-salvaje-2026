import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import ProductoresPage from './pages/Productores'
import ProductoresCategoria from './pages/ProductoresCategoria'
import EdicionesPage from './pages/Ediciones'
import Prensa from './pages/Prensa'
import Exponer from './pages/Exponer'
import LineUp from './pages/LineUp'
import EdicionAlbum from './pages/EdicionAlbum'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/productores" element={<ProductoresPage />} />
        <Route path="/productores/:categoria" element={<ProductoresCategoria />} />
        <Route path="/lineup" element={<LineUp />} />
        <Route path="/ediciones" element={<EdicionesPage />} />
        <Route path="/ediciones/:year" element={<EdicionAlbum />} />
        <Route path="/prensa" element={<Prensa />} />
        <Route path="/exponer" element={<Exponer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
