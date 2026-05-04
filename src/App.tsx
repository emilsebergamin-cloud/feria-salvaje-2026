import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import ProductoresPage from './pages/Productores'
import EdicionesPage from './pages/Ediciones'
import Prensa from './pages/Prensa'
import Exponer from './pages/Exponer'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/productores" element={<ProductoresPage />} />
        <Route path="/ediciones" element={<EdicionesPage />} />
        <Route path="/prensa" element={<Prensa />} />
        <Route path="/exponer" element={<Exponer />} />
      </Routes>
    </BrowserRouter>
  )
}
