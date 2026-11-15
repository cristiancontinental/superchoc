
import {
  ArrowRight,
  Heart,
  Leaf,
  Sparkles,
  ShieldCheck,
  Apple
} from 'lucide-react'
import { Link } from 'react-router'

function Producto() {
  const caracteristicas = [
    {
      icon: Heart,
      title: 'Pensado para el bienestar',
      description: 'Una propuesta que busca promover la educación alimentaria.'
    },
    {
      icon: Leaf,
      title: 'Conoce sus ingredientes',
      description: 'Descubre qué contiene nuestro chocolate y su composición.'
    },
    {
      icon: Sparkles,
      title: 'Una experiencia diferente',
      description: 'Conoce nuestra propuesta de chocolate SuperChoc.'
    }
  ]

  return (
    <div className="bg-[#FFF9F0]">

      {/* PORTADA DEL PRODUCTO */}
      <section className="overflow-hidden bg-gradient-to-br from-[#542D25] to-[#8B5038] px-6 py-16 text-white md:py-24">

        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          <div>
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
              🍫 Conoce nuestro producto
            </span>

            <h1 className="mt-7 text-5xl font-extrabold md:text-6xl">
              Super<span className="text-[#E7B85C]">Choc</span>
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-[#F4E8D4]">
              Mucho más que un chocolate.
            </h2>

            <p className="mt-5 max-w-lg leading-relaxed text-[#F4E8D4]">
              Descubre nuestra propuesta y conoce más sobre sus
              ingredientes, características y composición nutricional.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/ingredientes"
                className="inline-flex items-center gap-2 rounded-full bg-[#E7B85C] px-7 py-4 font-bold text-[#542D25] transition hover:bg-[#F2CC7E]"
              >
                Ver ingredientes
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>

          {/* IMAGEN PROVISIONAL DEL PRODUCTO */}
          <div className="flex justify-center">
            <div className="flex aspect-square w-full max-w-sm items-center justify-center rounded-[3rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm">
              <div className="text-center">
                <div className="text-9xl">🍫</div>
                <h3 className="mt-5 text-3xl font-extrabold tracking-wider">
                  SuperChoc
                </h3>
                <p className="mt-2 text-sm text-[#F4E8D4]">
                  Nuestra propuesta de chocolate
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PRESENTACIÓN */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mx-auto max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
            Nuestra propuesta
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#542D25] md:text-4xl">
            ¿Qué es SuperChoc?
          </h2>

          <p className="mt-6 leading-relaxed text-gray-600">
            SuperChoc es una propuesta de chocolate que busca unir
            una experiencia agradable con la educación sobre la
            alimentación y la importancia de conocer los nutrientes
            que nuestro cuerpo necesita.
          </p>

        </div>
      </section>

      {/* CARACTERÍSTICAS */}
      <section className="bg-[#F4E8D4] px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
              Descubre SuperChoc
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#542D25]">
              ¿Qué hace especial nuestra propuesta?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {caracteristicas.map((item, index) => {
              const Icon = item.icon

              return (
                <article
                  key={index}
                  className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4E8D4] text-[#9C5B37]">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#542D25]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </article>
              )
            })}

          </div>
        </div>
      </section>

      {/* INFORMACIÓN NUTRICIONAL */}
      <section className="mx-auto max-w-5xl px-6 py-20">

        <div className="rounded-3xl bg-[#542D25] p-8 text-center text-white md:p-12">

          <Apple size={42} className="mx-auto text-[#E7B85C]" />

          <h2 className="mt-5 text-3xl font-bold">
            ¿Quieres conocer sus ingredientes?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[#F4E8D4]">
            Explora la composición del producto, sus ingredientes
            y la información nutricional.
          </p>

          <Link
            to="/ingredientes"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E7B85C] px-8 py-4 font-bold text-[#542D25] transition hover:bg-[#F2CC7E]"
          >
            Conocer información nutricional
            <ArrowRight size={19} />
          </Link>

        </div>
      </section>

      {/* AVISO */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="flex items-start gap-3 rounded-2xl border border-[#E8D9BF] bg-white p-5">
          <ShieldCheck className="shrink-0 text-[#9C5B37]" />
          <p className="text-sm leading-relaxed text-gray-600">
            La información sobre la composición y los aportes nutricionales
            se completará con los datos reales de SuperChoc.
            Este producto no sustituye un tratamiento médico para la anemia.
          </p>
        </div>
      </section>

    </div>
  )
}

export default Producto
