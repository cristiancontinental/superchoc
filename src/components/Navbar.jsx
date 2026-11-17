import { useState } from 'react'
import { NavLink } from 'react-router'
import { Menu, X, ShoppingBag } from 'lucide-react'

const links = [
  { name: 'Inicio', path: '/' },
  { name: 'Producto', path: '/producto' },
  { name: 'Ingredientes', path: '/ingredientes' },
  { name: 'Anemia', path: '/anemia' },
  { name: 'Recetas', path: '/recetas' },
  { name: 'Juegos', path: '/juegos' },
  { name: 'Promociones', path: '/promociones' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#542D25] text-white shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

      {/* LOGO */}
      <NavLink to="/" className="flex items-center gap-2">
        <img
          src="/imagenes/logo2.jpg"
          alt="Logo de SuperChoc"
          className="h-10 w-10 object-contain"
        />

        <span className="text-2xl font-extrabold tracking-wide">
          SuperChoc<span className="text-[#E7B85C]">.</span>
        </span>
      </NavLink>

        {/* MENU DE ESCRITORIO */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-[#E7B85C] ${
                  isActive ? 'text-[#E7B85C]' : 'text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* BOTON HAMBURGUESA */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 transition hover:bg-[#75483C] lg:hidden"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MENU MOVIL */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#542D25] px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 font-medium transition ${
                    isActive
                      ? 'bg-[#E7B85C] text-[#542D25]'
                      : 'text-white hover:bg-[#75483C]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar