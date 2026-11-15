import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Producto from './pages/Producto'
import Ingredientes from './pages/Ingredientes'
import Anemia from './pages/Anemia'
import Recetas from './pages/Recetas'
import Juegos from './pages/Juegos'
import Promociones from './pages/Promociones'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto" element={<Producto />} />
          <Route path="/ingredientes" element={<Ingredientes />} />
          <Route path="/anemia" element={<Anemia />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/juegos" element={<Juegos />} />
          <Route path="/promociones" element={<Promociones />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App