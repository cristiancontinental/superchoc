
import { useState } from 'react'

import {
  Clock,
  ChefHat,
  ArrowRight,
  X,
  CheckCircle2,
  Utensils,
  Heart,
  Leaf,
} from 'lucide-react'

import { Link } from 'react-router'

const categorias = [
  'Todas',
  'Almuerzos',
  'Cenas',
]

const recetas = [
  {
    id: 1,
    nombre: 'Picante de sangrecita',
    categoria: 'Almuerzos',
    tiempo: '35 min',
    dificultad: 'Media',
    emoji: '🍲',
    imagen: '/imagenes/sangresita.jpg',
    color: 'bg-red-100',
    descripcion:
      'Un plato tradicional peruano preparado con sangrecita de pollo, papa y un aderezo lleno de sabor.',
    ingredientes: [
      '250 g de sangrecita de pollo limpia',
      '2 papas medianas',
      '1 cebolla mediana',
      '2 dientes de ajo',
      '2 cucharadas de ají amarillo molido',
      'Una cucharada de aceite',
      'Hierbabuena o perejil picado',
      'Sal y pimienta al gusto',
      'Limón para acompañar',
    ],
    preparacion: [
      'Lava y cocina completamente la sangrecita de pollo en agua. Escúrrela y pícala en trozos pequeños.',
      'Pela las papas, córtalas en cubos y cocínalas hasta que estén suaves.',
      'En una sartén prepara un aderezo con aceite, cebolla picada, ajo y ají amarillo.',
      'Agrega la sangrecita cocida y mezcla con el aderezo durante unos minutos.',
      'Incorpora las papas y la hierbabuena o perejil picado.',
      'Verifica que todo esté bien cocido y sirve acompañado de limón y una ensalada.',
    ],
    consejo:
      'La sangrecita contiene hierro de origen animal (hierro hemo). Puedes acompañar el plato con limón para incorporar vitamina C a la comida.',
  },
  {
    id: 2,
    nombre: 'Lentejas guisadas con ensalada criolla',
    categoria: 'Almuerzos',
    tiempo: '40 min',
    dificultad: 'Fácil',
    emoji: '🥘',
    imagen: '/imagenes/guiso de lentejas con ensalada criolla.jpg',
    color: 'bg-amber-100',
    descripcion:
      'Un clásico de la cocina peruana que combina lentejas guisadas con una fresca ensalada criolla.',
    ingredientes: [
      '1 taza de lentejas',
      '1 cebolla mediana',
      '1 tomate',
      '1 zanahoria',
      '2 dientes de ajo',
      '2 tazas de agua aproximadamente',
      'Aceite vegetal',
      'Sal, comino y pimienta al gusto',
      'Limón para la ensalada',
    ],
    preparacion: [
      'Lava las lentejas y retira cualquier impureza.',
      'Pica la cebolla, el tomate, el ajo y la zanahoria.',
      'En una olla prepara un aderezo con aceite, cebolla, ajo y tomate.',
      'Agrega las lentejas, la zanahoria y el agua.',
      'Cocina a fuego medio hasta que las lentejas estén suaves.',
      'Prepara una ensalada con cebolla, tomate y limón. Sirve junto con las lentejas.',
    ],
    consejo:
      'Las lentejas aportan hierro no hemo. Acompañarlas con limón y tomate, fuentes de vitamina C, favorece su absorción.',
  },
  {
    id: 3,
    nombre: 'Quinua salteada con verduras y pollo',
    categoria: 'Almuerzos',
    tiempo: '30 min',
    dificultad: 'Fácil',
    emoji: '🍛',
    imagen: '/imagenes/quinua.jpg',
    color: 'bg-yellow-100',
    descripcion:
      'Una preparación nutritiva que combina quinua, pollo y verduras en un plato lleno de color.',
    ingredientes: [
      '1 taza de quinua',
      '150 g de pechuga de pollo',
      '1 zanahoria',
      '1/2 pimiento rojo',
      '1/2 cebolla',
      '1 diente de ajo',
      'Una cucharada de aceite',
      'Sal y pimienta al gusto',
      'Limón al gusto',
    ],
    preparacion: [
      'Lava la quinua varias veces con agua y cocínala hasta que esté suave.',
      'Corta el pollo en trozos pequeños y sazónalo.',
      'Pica la cebolla, el pimiento y la zanahoria.',
      'En una sartén agrega aceite, ajo y cebolla. Incorpora el pollo y cocínalo completamente.',
      'Añade las verduras y saltea durante unos minutos.',
      'Agrega la quinua cocida, mezcla bien y sirve con unas gotas de limón.',
    ],
    consejo:
      'La quinua y las verduras forman parte de una alimentación variada. El pimiento y el limón aportan vitamina C.',
  },
  {
    id: 4,
    nombre: 'Causa limeña de atún',
    categoria: 'Almuerzos',
    tiempo: '35 min',
    dificultad: 'Media',
    emoji: '🥑',
    imagen: '/imagenes/causa-de-atun-peruana.jpg',
    color: 'bg-orange-100',
    descripcion:
      'Un plato tradicional de la gastronomía peruana elaborado con papa amarilla, limón y un relleno de atún.',
    ingredientes: [
      '4 papas amarillas medianas',
      '1 lata de atún escurrido',
      '1 limón',
      '2 cucharadas de ají amarillo molido',
      '1 palta',
      '2 cucharadas de mayonesa',
      '1/2 cebolla pequeña',
      'Sal y pimienta al gusto',
    ],
    preparacion: [
      'Lava las papas y cocínalas hasta que estén suaves.',
      'Pela las papas mientras estén tibias y aplástalas hasta obtener un puré.',
      'Agrega el ají amarillo, el jugo de limón, sal y pimienta. Mezcla hasta integrar.',
      'En otro recipiente mezcla el atún con la cebolla picada y la mayonesa.',
      'Coloca una capa de papa en un molde, agrega el relleno de atún y unas rodajas de palta.',
      'Cubre con otra capa de papa, desmolda con cuidado y sirve.',
    ],
    consejo:
      'Puedes acompañar la causa con una ensalada de verduras frescas para incorporar variedad de nutrientes.',
  },
  {
    id: 5,
    nombre: 'Sudado de pescado peruano',
    categoria: 'Cenas',
    tiempo: '35 min',
    dificultad: 'Media',
    emoji: '🐟',
    imagen: '/imagenes/sudado de pescado.jpg',
    color: 'bg-blue-100',
    descripcion:
      'Un plato casero preparado con pescado, tomate, cebolla y culantro, característico de la cocina peruana.',
    ingredientes: [
      '2 filetes de pescado fresco',
      '1 cebolla mediana',
      '2 tomates',
      '1/2 pimiento',
      '1 cucharada de ají amarillo molido',
      '1 diente de ajo',
      '1/2 taza de agua o caldo',
      'Culantro picado',
      'Jugo de medio limón',
      'Sal y pimienta al gusto',
    ],
    preparacion: [
      'Lava y corta la cebolla, el tomate y el pimiento en tiras.',
      'En una olla prepara un aderezo con ajo, ají amarillo y cebolla.',
      'Agrega el tomate, el pimiento y el agua o caldo.',
      'Coloca los filetes de pescado sobre las verduras y sazona.',
      'Tapa la olla y cocina a fuego medio hasta que el pescado esté completamente cocido y se desmenuce fácilmente.',
      'Agrega culantro picado y unas gotas de limón antes de servir.',
    ],
    consejo:
      'El pescado aporta proteínas y otros nutrientes importantes. Puedes acompañarlo con verduras y una porción de camote.',
  },
]

function Recetas() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todas')
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null)

  const recetasFiltradas =
    categoriaActiva === 'Todas'
      ? recetas
      : recetas.filter(
          (receta) => receta.categoria === categoriaActiva
        )

  return (
    <div className="bg-[#FFF9F0]">

      {/* PORTADA */}
      <section className="bg-gradient-to-br from-[#542D25] to-[#8B5038] px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-5xl text-center">

          <span className="rounded-full bg-white/15 px-5 py-2 text-sm">
            🇵🇪 Gastronomía peruana
          </span>

          <h1 className="mt-8 text-4xl font-extrabold md:text-6xl">
            Recetas peruanas
            <span className="block text-[#E7B85C]">
              saludables y deliciosas
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#F4E8D4]">
            Descubre platos de nuestra gastronomía elaborados
            con ingredientes que aportan hierro, vitamina C
            y otros nutrientes importantes.
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

      {/* INTRODUCCIÓN */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">

        <Leaf size={40} className="mx-auto text-[#9C5B37]" />

        <h2 className="mt-4 text-3xl font-bold text-[#542D25]">
          Nuestra gastronomía también nos nutre
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-600">
          La cocina peruana cuenta con una gran variedad de
          ingredientes y preparaciones. En esta sección encontrarás
          recetas que puedes preparar en casa utilizando carnes,
          pescados, legumbres, verduras y otros alimentos.
        </p>

      </section>

      {/* CATÁLOGO */}
      <section id="catalogo" className="bg-[#F4E8D4] px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">

            <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
              Nuestro recetario peruano
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
              Descubre nuestras recetas
            </h2>

            <p className="mt-4 text-gray-600">
              Selecciona una categoría y encuentra tu próxima preparación.
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

                
              {/* IMAGEN REAL DE LA RECETA */}
              <div className={`relative h-52 overflow-hidden ${receta.color}`}>

                <img
                  src={receta.imagen}
                  alt={receta.nombre}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />

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
            Mostrando {recetasFiltradas.length} recetas peruanas.
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
            Algunos alimentos contienen hierro hemo, como las carnes,
            mientras que las legumbres contienen hierro no hemo.
            Acompañar los alimentos de origen vegetal con fuentes
            de vitamina C, como el limón, el tomate o la naranja,
            favorece la absorción del hierro no hemo.
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

                <img
                  src={recetaSeleccionada.imagen}
                  alt={recetaSeleccionada.nombre}
                  className="mx-auto h-56 w-full rounded-2xl object-cover"
                />

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
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl bg-white p-3"
                    >
                      <CheckCircle2 size={19} className="shrink-0 text-[#9C5B37]" />

                      <span className="text-sm text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>
              </div>

              {/* PREPARACIÓN */}
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
