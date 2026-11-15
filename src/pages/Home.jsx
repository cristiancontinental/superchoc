import { Link } from 'react-router'
import {
  ArrowRight,
  HeartPulse,
  Package,
  Apple,
  ChefHat,
  Gamepad2,
  Tags,
  BookOpen
} from 'lucide-react'

const sections = [
  {
    title: 'Nuestro producto',
    description: 'Conoce SuperChoc y descubre sus características.',
    path: '/producto',
    icon: Package,
  },
  {
    title: 'Ingredientes y nutrición',
    description: 'Descubre sus ingredientes y composición nutricional.',
    path: '/ingredientes',
    icon: Apple,
  },
  {
    title: 'Conoce la anemia',
    description: 'Aprende sobre sus causas, síntomas y prevención.',
    path: '/anemia',
    icon: HeartPulse,
  },
  {
    title: 'Recetas saludables',
    description: 'Descubre recetas con alimentos ricos en hierro.',
    path: '/recetas',
    icon: ChefHat,
  },
  {
    title: 'Zona de juegos',
    description: 'Pon a prueba tus conocimientos sobre nutrición.',
    path: '/juegos',
    icon: Gamepad2,
  },
  {
    title: 'Promociones',
    description: 'Descubre las novedades y promociones de SuperChoc.',
    path: '/promociones',
    icon: Tags,
  },
]

function Home() {
  return (
    <div className="bg-[#FFF9F0]">

      {/* PORTADA */}
      <section className="bg-gradient-to-br from-[#542D25] to-[#8B5038] px-6 py-20 text-white md:py-28">

        <div className="mx-auto max-w-6xl text-center">

          <span className="rounded-full bg-white/15 px-5 py-2 text-sm">
            🍫 Bienvenido a SuperChoc
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight md:text-6xl">
            Una alimentación saludable
            <span className="block text-[#E7B85C]">
              comienza con información.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#F4E8D4] md:text-lg">
            Aprende sobre la anemia, descubre alimentos que aportan hierro
            y conoce nuestro producto SuperChoc.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/producto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E7B85C] px-8 py-4 font-bold text-[#542D25] transition hover:bg-[#F2CC7E]"
            >
              Conocer SuperChoc
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/anemia"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              <BookOpen size={20} />
              Aprender sobre la anemia
            </Link>

          </div>
        </div>
      </section>

      {/* INTRODUCCION A LA ANEMIA */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="mx-auto max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
            Educación y bienestar
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
            ¿Qué es la anemia?
          </h2>

          <p className="mt-5 leading-relaxed text-gray-600">
            La anemia es una afección en la que la cantidad de hemoglobina
            en la sangre está por debajo de lo normal. Puede tener distintas
            causas, entre ellas la deficiencia de hierro.
          </p>

          <Link
            to="/anemia"
            className="mt-6 inline-flex items-center gap-2 font-bold text-[#9C5B37] hover:underline"
          >
            Descubre más información
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* SECCIONES */}
      <section className="bg-[#F4E8D4] px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">
            <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
              Explora SuperChoc
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
              Descubre todo lo que tenemos para ti
            </h2>

            <p className="mt-4 text-gray-600">
              Selecciona una sección y comienza a explorar.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {sections.map((section) => {
              const Icon = section.icon

              return (
                <Link
                  key={section.path}
                  to={section.path}
                  className="group rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4E8D4] text-[#9C5B37] transition group-hover:bg-[#542D25] group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#542D25]">
                    {section.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {section.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 font-semibold text-[#9C5B37]">
                    Explorar
                    <ArrowRight size={18} />
                  </div>

                </Link>
              )
            })}

          </div>
        </div>
      </section>

    </div>
  )
}

export default Home