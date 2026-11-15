
import {
  Apple,
  Bean,
  Citrus,
  Leaf,
  Info,
  FlaskConical,
  HeartPulse,
  ArrowRight,
  ShieldCheck
} from 'lucide-react'
import { Link } from 'react-router'

const ingredientes = [
  {
    emoji: '🍫',
    name: 'Cacao',
    description: 'Imagen provisional del ingrediente principal que podremos utilizar si forma parte de la fórmula real.',
    color: 'bg-amber-100'
  },
  {
    emoji: '🥛',
    name: 'Ingrediente 2',
    description: 'Aquí colocaremos el nombre y descripción del segundo ingrediente real.',
    color: 'bg-orange-100'
  },
  {
    emoji: '🌰',
    name: 'Ingrediente 3',
    description: 'Espacio reservado para otro ingrediente de nuestra preparación.',
    color: 'bg-yellow-100'
  },
  {
    emoji: '✨',
    name: 'Ingrediente 4',
    description: 'Completaremos esta información cuando tengamos la fórmula definitiva.',
    color: 'bg-rose-100'
  }
]

const alimentos = [
  {
    emoji: '🥩',
    name: 'Carnes',
    description: 'Algunas carnes aportan hierro de tipo hemo.'
  },
  {
    emoji: '🫘',
    name: 'Legumbres',
    description: 'Lentejas y frijoles contienen hierro de tipo no hemo.'
  },
  {
    emoji: '🥬',
    name: 'Vegetales verdes',
    description: 'Algunos vegetales, como las espinacas, aportan hierro.'
  },
  {
    emoji: '🍊',
    name: 'Frutas cítricas',
    description: 'Aportan vitamina C, que favorece la absorción del hierro vegetal.'
  }
]

function Ingredientes() {
  return (
    <div className="bg-[#FFF9F0]">

      {/* PORTADA */}
      <section className="bg-gradient-to-br from-[#542D25] to-[#8B5038] px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-5xl text-center">

          <span className="rounded-full bg-white/15 px-5 py-2 text-sm">
            🍃 Conoce lo que nos nutre
          </span>

          <h1 className="mt-7 text-4xl font-extrabold md:text-6xl">
            Ingredientes y
            <span className="block text-[#E7B85C]">
              nutrición
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#F4E8D4]">
            Descubre la importancia de los ingredientes, los nutrientes
            y los alimentos que forman parte de una alimentación saludable.
          </p>

          <a
            href="#ingredientes"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E7B85C] px-7 py-4 font-bold text-[#542D25] hover:bg-[#F2CC7E]"
          >
            Explorar ingredientes
            <ArrowRight size={19} />
          </a>

        </div>
      </section>

      {/* INGREDIENTES DEL PRODUCTO */}
      <section id="ingredientes" className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-12 text-center">
          <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
            Nuestra composición
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
            ¿Qué contiene SuperChoc?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Conoce los ingredientes que utilizaremos en la elaboración
            de nuestro chocolate.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {ingredientes.map((item, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className={`flex h-48 items-center justify-center ${item.color}`}>
                <span className="text-8xl">{item.emoji}</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#542D25]">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>

            </article>
          ))}

        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#E8D9BF] bg-white p-5">
          <Info className="shrink-0 text-[#9C5B37]" />
          <p className="text-sm leading-relaxed text-gray-600">
            Las tarjetas son ilustrativas y provisionales. No representan
            la composición confirmada de SuperChoc. Los ingredientes
            definitivos se actualizarán cuando tengamos la fórmula real.
          </p>
        </div>

      </section>

      {/* TABLA NUTRICIONAL */}
      <section className="bg-[#F4E8D4] px-6 py-20">

        <div className="mx-auto max-w-4xl">

          <div className="mb-10 text-center">
            <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
              Información del producto
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
              Información nutricional
            </h2>

            <p className="mt-4 text-gray-600">
              Conocer los nutrientes nos permite comprender mejor
              lo que consumimos.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-md">

            <div className="bg-[#542D25] p-6 text-center text-white">
              <FlaskConical size={32} className="mx-auto text-[#E7B85C]" />

              <h3 className="mt-3 text-2xl font-bold">
                SuperChoc
              </h3>

              <p className="mt-1 text-sm text-[#F4E8D4]">
                Tabla nutricional provisional
              </p>
            </div>

            <div className="p-5 md:p-8">

              <div className="mb-5 flex items-center justify-between border-b-2 border-[#542D25] pb-3">
                <span className="font-bold text-[#542D25]">
                  Información nutricional
                </span>
                <span className="text-sm text-gray-500">
                  Por porción
                </span>
              </div>

              {[
                'Valor energético (kcal)',
                'Proteínas (g)',
                'Grasas totales (g)',
                'Carbohidratos (g)',
                'Azúcares (g)',
                'Hierro (mg)',
                'Vitamina C (mg)'
              ].map((nutriente) => (
                <div
                  key={nutriente}
                  className="flex items-center justify-between gap-3 border-b border-gray-100 py-4"
                >
                  <span className="font-medium text-gray-700">
                    {nutriente}
                  </span>

                  <span className="rounded-lg bg-[#F4E8D4] px-3 py-1 text-xs font-semibold text-[#9C5B37]">
                    Pendiente
                  </span>
                </div>
              ))}

              <p className="mt-5 text-xs leading-relaxed text-gray-500">
                Los valores se completarán utilizando el análisis
                nutricional o la información validada de la etiqueta
                del producto. No son valores estimados.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* NUTRIENTES IMPORTANTES */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-12 text-center">
          <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
            Aprende a alimentarte
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
            Alimentos y nutrientes importantes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Conoce algunos alimentos que aportan hierro y otros que
            pueden favorecer su absorción.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {alimentos.map((item, index) => (
            <article
              key={index}
              className="rounded-3xl border border-[#E8D9BF] bg-white p-7 text-center shadow-sm transition hover:shadow-lg"
            >

              <div className="text-6xl">
                {item.emoji}
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#542D25]">
                {item.name}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>

            </article>
          ))}

        </div>
      </section>

      {/* CONSEJO NUTRICIONAL */}
      <section className="px-6 pb-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 rounded-3xl bg-[#542D25] p-8 text-center text-white md:p-12">

          <HeartPulse size={42} className="text-[#E7B85C]" />

          <h2 className="text-2xl font-bold md:text-3xl">
            ¡Cuida tu alimentación!
          </h2>

          <p className="max-w-2xl leading-relaxed text-[#F4E8D4]">
            Combinar alimentos que contienen hierro con fuentes de
            vitamina C puede favorecer la absorción del hierro vegetal.
          </p>

          <Link
            to="/recetas"
            className="inline-flex items-center gap-2 rounded-full bg-[#E7B85C] px-7 py-4 font-bold text-[#542D25] transition hover:bg-[#F2CC7E]"
          >
            Descubrir recetas saludables
            <ArrowRight size={19} />
          </Link>

        </div>
      </section>

      {/* AVISO */}
      <div className="mx-auto max-w-5xl px-6 pb-12">
        <div className="flex gap-3 rounded-2xl border border-[#E8D9BF] bg-white p-5">
          <ShieldCheck className="shrink-0 text-[#9C5B37]" />
          <p className="text-sm leading-relaxed text-gray-600">
            La alimentación saludable contribuye al bienestar, pero no
            sustituye la evaluación ni el tratamiento médico de la anemia.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Ingredientes
