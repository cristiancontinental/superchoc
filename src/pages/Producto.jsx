
import {
  ArrowRight,
  Heart,
  Sparkles,
  ShieldCheck,
  Apple,
  Package,
  QrCode,
  BookOpen,
  Gamepad2,
  Utensils,
  GraduationCap,
  Box,
} from 'lucide-react'

import { Link } from 'react-router'

const variedades = [
  {
    nombre: 'Chocolate con semillas de zapallo',
    descripcion:
      'Una combinación de chocolate con semillas de zapallo que aporta una textura especial y un sabor diferente.',
    imagen: '/imagenes/semillas zapallo.jpg',
    color: 'bg-green-100',
    etiqueta: 'Versión 01',
  },
  {
    nombre: 'Chocolate con frutos secos',
    descripcion:
      'Una variedad que combina nuestra base de chocolate con frutos secos para ofrecer una experiencia crujiente.',
    imagen: '/imagenes/frutas secos.jpg',
    color: 'bg-amber-100',
    etiqueta: 'Versión 02',
  },
  {
    nombre: 'Chocolate con frutas deshidratadas',
    descripcion:
      'Una alternativa que incorpora frutas deshidratadas para combinar diferentes sabores y texturas.',
    imagen: '/imagenes/frutos desidratados.jpg',
    color: 'bg-orange-100',
    etiqueta: 'Versión 03',
  },
]

const caracteristicas = [
  {
    icon: Heart,
    titulo: 'Una propuesta nutricional',
    descripcion:
      'Un chocolate cuya propuesta contempla la fortificación con hierro y una fuente de vitamina C.',
  },
  {
    icon: Sparkles,
    titulo: 'Educación y entretenimiento',
    descripcion:
      'Una experiencia que integra información sobre anemia, juegos y contenidos educativos.',
  },
  {
    icon: Package,
    titulo: 'Empaque con identidad',
    descripcion:
      'Una cajita diseñada especialmente para SuperChoc, con su identidad visual y un código QR.',
  },
]

const experiencias = [
  {
    icon: BookOpen,
    titulo: 'Aprende sobre la anemia',
    descripcion:
      'Encuentra información educativa para conocer la anemia y la importancia de una buena alimentación.',
  },
  {
    icon: Gamepad2,
    titulo: 'Diviértete aprendiendo',
    descripcion:
      'Participa en juegos relacionados con la alimentación y el cuidado de la salud.',
  },
  {
    icon: Utensils,
    titulo: 'Descubre recetas',
    descripcion:
      'Conoce recetas peruanas y alternativas alimenticias que incluyen fuentes de hierro.',
  },
]

function Producto() {
  return (
    <div className="bg-[#FFF9F0]">

      {/* PORTADA */}
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
              Una propuesta que combina chocolate, nutrición,
              educación y entretenimiento. Descubre nuestras
              variedades y conoce la experiencia SuperChoc.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#variedades"
                className="inline-flex items-center gap-2 rounded-full bg-[#E7B85C] px-7 py-4 font-bold text-[#542D25] transition hover:bg-[#F2CC7E]"
              >
                Ver variedades
                <ArrowRight size={19} />
              </a>

              <Link
                to="/ingredientes"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Conocer ingredientes
              </Link>
            </div>
          </div>

          {/* FOTO PRINCIPAL */}
          <div className="flex justify-center">
            <div className="flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-[3rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-sm">
              <img
                src="/imagenes/empaques producto.jpg"
                alt="Producto SuperChoc"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ¿QUÉ ES SUPERCHOC? */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
            Nuestra propuesta
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#542D25] md:text-4xl">
            ¿Qué es SuperChoc?
          </h2>

          <p className="mt-6 leading-relaxed text-gray-600">
            SuperChoc es una propuesta de chocolate fortificado con
            hierro que busca ofrecer una experiencia diferente al
            consumo de chocolates convencionales. Su concepto reúne
            alimentación, entretenimiento y educación en un solo producto.
          </p>

          <p className="mt-4 leading-relaxed text-gray-600">
            Está dirigido principalmente a adolescentes y jóvenes,
            promoviendo el interés por los hábitos alimenticios
            equilibrados mediante un producto atractivo y una
            experiencia interactiva.
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

            <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
              ¿Qué hace especial nuestra propuesta?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {caracteristicas.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.titulo}
                  className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4E8D4] text-[#9C5B37]">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#542D25]">
                    {item.titulo}
                  </h3>

                  <p className="mt-4 leading-relaxed text-gray-600">
                    {item.descripcion}
                  </p>
                </article>
              )
            })}
          </div>

        </div>
      </section>

      {/* VARIEDADES */}
      <section id="variedades" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
              Nuestros chocolates
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
              Tres variedades de SuperChoc
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Descubre nuestras tres combinaciones. Todas comparten
              la misma base de chocolate y se diferencian por sus
              ingredientes complementarios.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {variedades.map((item) => (
              <article
                key={item.nombre}
                className="overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className={`flex h-64 items-center justify-center overflow-hidden ${item.color} p-4`}>
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="h-full w-full object-contain transition duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-7">

                  <span className="text-xs font-bold uppercase tracking-widest text-[#9C5B37]">
                    {item.etiqueta}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-[#542D25]">
                    {item.nombre}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {item.descripcion}
                  </p>

                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/ingredientes"
              className="inline-flex items-center gap-2 font-bold text-[#9C5B37] transition hover:underline"
            >
              Conocer más sobre los ingredientes
              <ArrowRight size={19} />
            </Link>
          </div>

        </div>
      </section>


      {/* NUESTRO EMPAQUE */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
              Nuestra identidad
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
              Conoce nuestro empaque
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600">
              Nuestra cajita cuenta con un diseño propio que
              representa la identidad de SuperChoc. En la parte
              posterior incorpora un código QR para acceder
              a nuestra página web.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {/* FRENTE DE LA CAJITA */}
            <article className="overflow-hidden rounded-3xl bg-white shadow-md">
              <div className="flex h-80 items-center justify-center overflow-hidden bg-[#F4E8D4] p-5">
                <img
                  src="/imagenes/empaque delantero.jpg"
                  alt="Parte frontal de la cajita SuperChoc con su logo"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>

              <div className="p-7">
                <span className="text-xs font-bold uppercase tracking-widest text-[#9C5B37]">
                  Vista frontal
                </span>

                <h3 className="mt-2 text-xl font-bold text-[#542D25]">
                  La identidad de SuperChoc
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  La parte delantera presenta el diseño visual,
                  el nombre y el logo que identifican nuestro producto.
                </p>
              </div>
            </article>

            {/* REVERSO DE LA CAJITA */}
            <article className="overflow-hidden rounded-3xl bg-white shadow-md">
              <div className="flex h-80 items-center justify-center overflow-hidden bg-[#F4E8D4] p-5">
                <img
                  src="/imagenes/Empaque trasero.jpg"
                  alt="Parte posterior de la cajita SuperChoc con código QR"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>

              <div className="p-7">
                <span className="text-xs font-bold uppercase tracking-widest text-[#9C5B37]">
                  Vista posterior
                </span>

                <h3 className="mt-2 text-xl font-bold text-[#542D25]">
                  Un código QR para descubrir más
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  En la parte posterior se encuentra el código QR
                  que permite ingresar directamente a la página
                  web de SuperChoc.
                </p>
              </div>
            </article>

          </div>

        </div>
      </section>

      {/* EXPERIENCIA DIGITAL */}
      <section className="bg-[#542D25] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">

          <div>
            <span className="font-semibold uppercase tracking-widest text-[#E7B85C]">
              Nuestra experiencia digital
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Escanea y descubre el mundo SuperChoc
            </h2>

            <p className="mt-5 leading-relaxed text-[#F4E8D4]">
              El código QR de nuestro empaque conecta el producto
              físico con nuestra página web, donde los visitantes
              pueden encontrar información educativa y diferentes
              actividades relacionadas con la alimentación.
            </p>

            <div className="mt-8 space-y-5">

              {experiencias.map((item) => {
                const Icon = item.icon

                return (
                  <div key={item.titulo} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#E7B85C]">
                      <Icon size={25} />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">
                        {item.titulo}
                      </h3>

                      <p className="mt-1 text-sm leading-relaxed text-[#F4E8D4]">
                        {item.descripcion}
                      </p>
                    </div>
                  </div>
                )
              })}

            </div>

            <Link
              to="/juegos"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E7B85C] px-7 py-4 font-bold text-[#542D25] transition hover:bg-[#F2CC7E]"
            >
              Explorar la experiencia
              <ArrowRight size={19} />
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

      {/* CONOCE MÁS */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl bg-[#F4E8D4] p-8 text-center md:p-12">

          <Apple size={42} className="mx-auto text-[#9C5B37]" />

          <h2 className="mt-5 text-3xl font-bold text-[#542D25]">
            Conoce lo que hay detrás de SuperChoc
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-600">
            Descubre los ingredientes considerados en nuestra
            propuesta y aprende sobre su relación con una
            alimentación equilibrada.
          </p>

          <Link
            to="/ingredientes"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#542D25] px-8 py-4 font-bold text-white transition hover:bg-[#70402F]"
          >
            Explorar ingredientes
            <ArrowRight size={19} />
          </Link>

        </div>
      </section>

      {/* AVISO */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="flex items-start gap-3 rounded-2xl border border-[#E8D9BF] bg-white p-5">
          <ShieldCheck className="shrink-0 text-[#9C5B37]" />

          <p className="text-sm leading-relaxed text-gray-600">
            SuperChoc es una propuesta alimentaria con fines
            educativos. Su composición nutricional y formulación
            definitiva deberán verificarse antes de su comercialización.
            No es un medicamento ni sustituye la evaluación
            o el tratamiento médico de la anemia.
          </p>
        </div>
      </section>

    </div>
  )
}

export default Producto
