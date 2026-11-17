
import { Link } from 'react-router'
import {
  ArrowRight,
  HeartPulse,
  Package,
  Apple,
  ChefHat,
  Gamepad2,
  Tags,
  BookOpen,
  Recycle,
  GraduationCap,
  QrCode,
  Sparkles,
} from 'lucide-react'

const sections = [
  {
    title: 'Nuestro producto',
    description: 'Conoce SuperChoc, sus características, presentaciones y propuesta innovadora.',
    path: '/producto',
    icon: Package,
  },
  {
    title: 'Ingredientes y nutrición',
    description: 'Descubre los ingredientes propuestos y su aporte a una alimentación equilibrada.',
    path: '/ingredientes',
    icon: Apple,
  },
  {
    title: 'Conoce la anemia',
    description: 'Aprende sobre sus causas, síntomas y la importancia de prevenir la deficiencia de hierro.',
    path: '/anemia',
    icon: HeartPulse,
  },
  {
    title: 'Recetas saludables',
    description: 'Explora ideas de recetas con alimentos que aportan hierro y otros nutrientes.',
    path: '/recetas',
    icon: ChefHat,
  },
  {
    title: 'Zona de juegos',
    description: 'Diviértete mientras aprendes sobre nutrición y hábitos saludables.',
    path: '/juegos',
    icon: Gamepad2,
  },
  {
    title: 'Promociones',
    description: 'Conoce las promociones y dinámicas propuestas para SuperChoc.',
    path: '/promociones',
    icon: Tags,
  },
]

function Home() {
  return (
    <div className="bg-[#FFF9F0]">

      {/* PORTADA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#542D25] via-[#70402F] to-[#8B5038] px-6 py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#E7B85C]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm">
            <Sparkles size={16} />
            Bienvenido a SuperChoc
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight md:text-6xl">
            Mucho más que chocolate,
            <span className="block text-[#E7B85C]">
              una experiencia saludable.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#F4E8D4] md:text-lg">
            Descubre una propuesta que une alimentación, educación y entretenimiento.
            Aprende sobre el hierro, conoce la importancia de una buena nutrición
            y disfruta de todo lo que SuperChoc tiene preparado para ti.
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

      {/* PRESENTACIÓN DE LA PROPUESTA */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
            Nuestra propuesta
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
            Alimentación, aprendizaje y diversión en un solo lugar
          </h2>

          <p className="mt-5 leading-relaxed text-gray-600">
            SuperChoc propone una nueva forma de disfrutar el chocolate,
            integrando una propuesta de producto fortificado con hierro,
            ingredientes seleccionados y una experiencia digital educativa.
            Queremos promover el interés por una alimentación equilibrada
            mediante actividades interactivas y contenido informativo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4E8D4] text-[#9C5B37]">
              <HeartPulse size={28} />
            </div>
            <h3 className="mt-4 font-bold text-[#542D25]">Nutrición</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Una propuesta que destaca el hierro y otros ingredientes de interés nutricional.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4E8D4] text-[#9C5B37]">
              <GraduationCap size={28} />
            </div>
            <h3 className="mt-4 font-bold text-[#542D25]">Educación</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Información y recursos para aprender sobre anemia y alimentación saludable.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4E8D4] text-[#9C5B37]">
              <Gamepad2 size={28} />
            </div>
            <h3 className="mt-4 font-bold text-[#542D25]">Entretenimiento</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Juegos, actividades y experiencias para aprender de manera divertida.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCCIÓN A LA ANEMIA */}
      <section className="bg-[#F4E8D4] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
              Educación y bienestar
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
              ¿Qué es la anemia?
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600">
              La anemia es una afección en la que la cantidad de hemoglobina
              en la sangre está por debajo de lo normal. Una de sus causas
              frecuentes es la deficiencia de hierro. Conocer sus causas,
              síntomas y formas de prevención es importante para cuidar nuestra salud.
            </p>

            <Link
              to="/anemia"
              className="mt-6 inline-flex items-center gap-2 font-bold text-[#9C5B37] hover:underline"
            >
              Descubre más información
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA DIGITAL */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 rounded-3xl bg-[#542D25] p-8 text-white md:grid-cols-2 md:p-12">
          <div>
            <span className="font-semibold uppercase tracking-widest text-[#E7B85C]">
              Una experiencia interactiva
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              ¡SuperChoc también se disfruta aprendiendo!
            </h2>

            <p className="mt-5 leading-relaxed text-[#F4E8D4]">
              Nuestra propuesta integra un código QR en el empaque para
              conectar con contenido digital, juegos educativos, recetas
              saludables y recursos informativos sobre nutrición.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#E7D3C1]">
              Explora los recursos disponibles en nuestra página y descubre
              las posibilidades de esta experiencia.
            </p>

            <Link
              to="/juegos"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#E7B85C] px-6 py-3 font-bold text-[#542D25] transition hover:bg-[#F2CC7E]"
            >
              Explorar juegos
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="flex h-64 w-64 flex-col items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-4">

              <img
                src="/imagenes/qr.jpg"
                alt="Código QR de SuperChoc"
                className="h-44 w-44 rounded-xl bg-white p-2 object-contain"
              />

              <span className="mt-3 text-center font-semibold">
                Conecta con SuperChoc
              </span>

              <span className="mt-1 text-sm text-white/70">
                Escanea y descubre nuestra experiencia
              </span>

            </div>
          </div>
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
