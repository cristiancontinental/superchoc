import { Heart } from 'lucide-react'
import { Link } from 'react-router'

function Footer() {
  return (
    <footer className="bg-[#542D25] px-5 py-8 text-center text-white">

      <h2 className="text-2xl font-bold">
        SuperChoc 🍫
      </h2>

      <p className="mx-auto mt-3 max-w-md text-sm text-[#F4E8D4]">
        Aprende, descubre y conoce más sobre la alimentación
        saludable y el cuidado de la anemia.
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-5 text-sm">
        <Link to="/producto">Producto</Link>
        <Link to="/anemia">Anemia</Link>
        <Link to="/recetas">Recetas</Link>
        <Link to="/juegos">Juegos</Link>
      </div>

      <div className="mt-6 border-t border-white/20 pt-5 text-xs text-[#F4E8D4]">
        © 2026 SuperChoc. Todos los derechos reservados.
        <p className="mt-2 flex items-center justify-center gap-1">
          Elaborado con <Heart size={13} /> para promover la educación nutricional.
        </p>
      </div>

    </footer>
  )
}

export default Footer