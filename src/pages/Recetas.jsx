
import { useState } from 'react'
import {
  Clock,
  ChefHat,
  ArrowRight,
  X,
  CheckCircle2,
  Utensils,
  Heart,
  Leaf
} from 'lucide-react'

import { Link } from 'react-router'

const categorias = [
  'Todas',
  'Desayunos',
  'Almuerzos',
  'Cenas',
  'Ensaladas'
]

const recetas = [
  {
    id: 1,
    nombre: 'Ensalada de lentejas',
    categoria: 'Ensaladas',
    tiempo: '25 min',
    dificultad: 'Fácil',
    emoji: '🥗',
    color: 'bg-green-100',
    descripcion: 'Una combinación de lentejas, tomate y limón.',
    ingredientes: [
      '1 taza de lentejas cocidas',
      '1 tomate mediano',
      '1/2 cebolla',
      'Jugo de 1 limón',
      'Perejil picado',
      'Una cucharada de aceite de oliva'
    ],
    preparacion: [
      'Cocina las lentejas hasta que estén suaves y escúrrelas.',
      'Lava y corta el tomate y la cebolla.',
      'Mezcla todos los ingredientes en un recipiente.',
      'Agrega el jugo de limón, el aceite y el perejil.',
      'Mezcla y sirve.'
    ],
    consejo: 'Las lentejas aportan hierro vegetal. El limón aporta vitamina C, que favorece su absorción.'
  },
  {
    id: 2,
    nombre: 'Tortilla de espinacas',
    categoria: 'Desayunos',
    tiempo: '15 min',
    dificultad: 'Fácil',
    emoji: '🍳',
    color: 'bg-yellow-100',
    descripcion: 'Una preparación sencilla con huevo y espinacas.',
    ingredientes: [
      '2 huevos',
      '1 taza de espinacas frescas',
      '1/4 de cebolla',
      'Una cucharadita de aceite',
      'Sal al gusto'
    ],
    preparacion: [
      'Lava bien las espinacas.',
      'Pica la cebolla y las espinacas.',
      'Bate los huevos en un recipiente.',
      'Agrega las verduras y mezcla.',
      'Cocina en una sartén con un poco de aceite hasta que esté lista.'
    ],
    consejo: 'El huevo y las espinacas aportan nutrientes importantes dentro de una alimentación variada.'
  },
  {
    id: 3,
    nombre: 'Salteado de carne y verduras',
    categoria: 'Almuerzos',
    tiempo: '30 min',
    dificultad: 'Media',
    emoji: '🥩',
    color: 'bg-orange-100',
    descripcion: 'Carne acompañada de verduras frescas.',
    ingredientes: [
      '150 g de carne de res',
      '1 zanahoria',
      '1/2 pimiento',
      '1/2 cebolla',
      'Una cucharada de aceite',
      'Sal al gusto'
    ],
    preparacion: [
      'Lava y corta las verduras.',
      'Corta la carne en tiras pequeñas.',
      'Calienta el aceite en una sartén.',
      'Cocina la carne hasta que esté bien cocida.',
      'Agrega las verduras y cocina hasta que estén tiernas.',
      'Sirve acompañado de arroz si lo deseas.'
    ],
    consejo: 'La carne de res aporta hierro hemo, que el organismo absorbe más fácilmente que el hierro no hemo.'
  },
  {
    id: 4,
    nombre: 'Ensalada de garbanzos',
    categoria: 'Ensaladas',
    tiempo: '20 min',
    dificultad: 'Fácil',
    emoji: '🥙',
    color: 'bg-amber-100',
    descripcion: 'Una ensalada fresca y nutritiva con garbanzos.',
    ingredientes: [
      '1 taza de garbanzos cocidos',
      '1 tomate',
      '1/2 pepino',
      'Jugo de medio limón',
      'Perejil',
      'Una cucharada de aceite de oliva'
    ],
    preparacion: [
      'Escurre los garbanzos cocidos.',
      'Lava y corta el tomate y el pepino.',
      'Coloca los ingredientes en un recipiente.',
      'Añade el limón, el aceite y el perejil.',
      'Mezcla y sirve fresco.'
    ],
    consejo: 'Los garbanzos contienen hierro vegetal. El limón aporta vitamina C.'
  },
  {
    id: 5,
    nombre: 'Bowl de avena y fresas',
    categoria: 'Desayunos',
    tiempo: '10 min',
    dificultad: 'Fácil',
    emoji: '🍓',
    color: 'bg-rose-100',
    descripcion: 'Una opción sencilla para comenzar el día.',
    ingredientes: [
      '1/2 taza de avena',
      '1 taza de leche o bebida de tu preferencia',
      '5 fresas',
      '1 plátano',
      'Una cucharadita de miel (opcional)'
    ],
    preparacion: [
      'Coloca la avena en un recipiente.',
      'Añade la leche y mezcla.',
      'Lava y corta las fresas.',
      'Agrega las fresas y el plátano.',
      'Añade miel si lo deseas y sirve.'
    ],
    consejo: 'La avena aporta hierro vegetal y las fresas contienen vitamina C.'
  },
  {
    id: 6,
    nombre: 'Guiso de lentejas',
    categoria: 'Cenas',
    tiempo: '40 min',
    dificultad: 'Media',
    emoji: '🍲',
    color: 'bg-red-100',
    descripcion: 'Un plato casero con lentejas y verduras.',
    ingredientes: [
      '1 taza de lentejas',
      '1 zanahoria',
      '1 tomate',
      '1/2 cebolla',
      '2 tazas de agua',
      'Ajo y condimentos al gusto'
    ],
    preparacion: [
      'Lava las lentejas.',
      'Pica la cebolla, el tomate y la zanahoria.',
      'Prepara un aderezo con cebolla, ajo y tomate.',
      'Añade las lentejas, el agua y la zanahoria.',
      'Cocina hasta que las lentejas estén suaves.',
      'Sirve caliente.'
    ],
    consejo: 'Las lentejas son una fuente vegetal de hierro y fibra.'
  }
]

function Recetas() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todas')
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null)

  const recetasFiltradas = categoriaActiva === 'Todas'
    ? recetas
    : recetas.filter(
        receta => receta.categoria === categoriaActiva
      )

  return (
    <div className="bg-[#FFF9F0]">

      {/* PORTADA */}
      <section className="bg-gradient-to-br from-[#542D25] to-[#8B5038] px-6 py-20 text-white md:py-24">

        <div className="mx-auto max-w-5xl text-center">

          <span className="rounded-full bg-white/15 px-5 py-2 text-sm">
            🥗 Alimentación saludable
          </span>

          <h1 className="mt-8 text-4xl font-extrabold md:text-6xl">
            Recetas saludables
            <span className="block text-[#E7B85C]">
              para cuidar tu bienestar
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#F4E8D4]">
            Descubre preparaciones deliciosas con alimentos
            que aportan hierro y otros nutrientes importantes.
          </p>

          <a
            href="#catalogo"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E7B85C] px-8 py-4 font-bold text-[#542D25] transition hover:bg-[#F2CC7E]"
          >
            Explorar recetas
            <ArrowRight size={19} />
          </a>

        </div>
      </section>

      {/* INTRODUCCION */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">

        <Leaf size={40} className="mx-auto text-[#9C5B37]" />

        <h2 className="mt-4 text-3xl font-bold text-[#542D25]">
          Comer saludable también puede ser delicioso
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-600">
          Una alimentación variada puede incluir carnes,
          legumbres, verduras y frutas. Aquí encontrarás
          ideas sencillas para preparar en casa.
        </p>

      </section>

      {/* CATALOGO */}
      <section id="catalogo" className="bg-[#F4E8D4] px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">

            <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
              Nuestro recetario
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
              Encuentra tu próxima receta
            </h2>

            <p className="mt-4 text-gray-600">
              Selecciona una categoría para descubrir diferentes preparaciones.
            </p>

          </div>

          {/* FILTROS */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">

            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaActiva(categoria)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                  categoriaActiva === categoria
                    ? 'bg-[#542D25] text-white shadow-md'
                    : 'bg-white text-[#542D25] hover:bg-[#E7B85C]'
                }`}
              >
                {categoria}
              </button>
            ))}

          </div>

          {/* TARJETAS */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {recetasFiltradas.map((receta) => (

              <article
                key={receta.id}
                className="overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* IMAGEN PROVISIONAL */}
                <div className={`relative flex h-52 items-center justify-center ${receta.color}`}>

                  <span className="text-8xl">
                    {receta.emoji}
                  </span>

                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#542D25]">
                    {receta.categoria}
                  </span>

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold text-[#542D25]">
                    {receta.nombre}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {receta.descripcion}
                  </p>

                  <div className="mt-5 flex items-center gap-5 text-sm text-gray-500">

                    <span className="flex items-center gap-2">
                      <Clock size={17} />
                      {receta.tiempo}
                    </span>

                    <span className="flex items-center gap-2">
                      <ChefHat size={17} />
                      {receta.dificultad}
                    </span>

                  </div>

                  <button
                    onClick={() => setRecetaSeleccionada(receta)}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#542D25] px-5 py-3 font-semibold text-white transition hover:bg-[#8B5038]"
                  >
                    Ver preparación
                    <ArrowRight size={18} />
                  </button>

                </div>

              </article>

            ))}

          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            Mostrando {recetasFiltradas.length} recetas.
          </p>

        </div>
      </section>

      {/* CONSEJO NUTRICIONAL */}
      <section className="mx-auto max-w-5xl px-6 py-20">

        <div className="rounded-3xl bg-[#542D25] p-8 text-white md:p-12">

          <Heart size={42} className="text-[#E7B85C]" />

          <h2 className="mt-5 text-3xl font-bold">
            Un consejo para aprovechar mejor el hierro
          </h2>

          <p className="mt-5 leading-relaxed text-[#F4E8D4]">
            Combina alimentos vegetales ricos en hierro,
            como las lentejas y los garbanzos, con alimentos
            que aporten vitamina C, como la naranja, el limón
            y las fresas.
          </p>

          <Link
            to="/anemia"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#E7B85C] px-7 py-4 font-bold text-[#542D25] transition hover:bg-[#F2CC7E]"
          >
            Aprender sobre la anemia
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

      {/* MODAL DE RECETA */}
      {recetaSeleccionada && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setRecetaSeleccionada(null)}
        >

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-receta"
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-[#FFF9F0] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CABECERA */}
            <div className="sticky top-0 z-10 flex items-center justify-between bg-[#542D25] p-5 text-white">

              <h2 id="titulo-receta" className="text-xl font-bold">
                Preparación de receta
              </h2>

              <button
                onClick={() => setRecetaSeleccionada(null)}
                className="rounded-full p-2 transition hover:bg-white/20"
                aria-label="Cerrar receta"
              >
                <X size={24} />
              </button>

            </div>

            <div className="p-6 md:p-8">

              <div className="text-center">

                <span className="text-7xl">
                  {recetaSeleccionada.emoji}
                </span>

                <h3 className="mt-4 text-2xl font-extrabold text-[#542D25]">
                  {recetaSeleccionada.nombre}
                </h3>

                <div className="mt-4 flex justify-center gap-5 text-sm text-gray-600">

                  <span className="flex items-center gap-2">
                    <Clock size={17} />
                    {recetaSeleccionada.tiempo}
                  </span>

                  <span className="flex items-center gap-2">
                    <ChefHat size={17} />
                    {recetaSeleccionada.dificultad}
                  </span>

                </div>

              </div>

              {/* INGREDIENTES */}
              <div className="mt-9">

                <h4 className="flex items-center gap-2 text-xl font-bold text-[#542D25]">
                  <Utensils size={21} />
                  Ingredientes
                </h4>

                <div className="mt-4 space-y-3">

                  {recetaSeleccionada.ingredientes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 rounded-xl bg-white p-3">
                      <CheckCircle2 size={19} className="shrink-0 text-[#9C5B37]" />
                      <span className="text-sm text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>
              </div>

              {/* PREPARACION */}
              <div className="mt-9">

                <h4 className="text-xl font-bold text-[#542D25]">
                  Preparación paso a paso
                </h4>

                <div className="mt-5 space-y-5">

                  {recetaSeleccionada.preparacion.map((paso, index) => (

                    <div key={index} className="flex gap-4">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#542D25] font-bold text-white">
                        {index + 1}
                      </div>

                      <p className="pt-1 text-sm leading-relaxed text-gray-700">
                        {paso}
                      </p>

                    </div>

                  ))}

                </div>
              </div>

              {/* CONSEJO */}
              <div className="mt-9 rounded-2xl bg-[#F4E8D4] p-5">

                <h4 className="font-bold text-[#542D25]">
                  💡 Consejo nutricional
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  {recetaSeleccionada.consejo}
                </p>

              </div>

              <button
                onClick={() => setRecetaSeleccionada(null)}
                className="mt-8 w-full rounded-full bg-[#542D25] px-6 py-4 font-bold text-white transition hover:bg-[#8B5038]"
              >
                Cerrar receta
              </button>

            </div>

          </div>
        </div>

      )}

    </div>
  )
}

export default Recetas
