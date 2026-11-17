
import {
  Apple,
  Citrus,
  Info,
  FlaskConical,
  HeartPulse,
  ArrowRight,
  ShieldCheck,
  Leaf,
  Sprout,
} from 'lucide-react'

import { Link } from 'react-router'

const versiones = [
  {
    emoji: '🌱',
    imagen: '/imagenes/chocolate semilla de zapallo.PNG',
    name: 'SuperChoc con semillas de zapallo',
    description:
      'Nuestra base de cacao fortificada con hierro y vitamina C, complementada con semillas de zapallo para aportar sabor, textura y nutrientes.',
    color: 'bg-green-100',
    tag: 'Versión 01',
  },
  {
    emoji: '🥜',
    imagen: '/imagenes/chocolate frutos secos.PNG',
    name: 'SuperChoc con frutos secos',
    description:
      'La misma base de cacao fortificada, acompañada de frutos secos que aportan una textura crujiente y variedad de sabores.',
    color: 'bg-amber-100',
    tag: 'Versión 02',
  },
  {
    emoji: '🥭',
    imagen: '/imagenes/Chocolate frutas desidratadas.PNG',
    name: 'SuperChoc con frutas deshidratadas',
    description:
      'Nuestra base fortificada combinada con frutas deshidratadas para ofrecer un contraste de sabores y un toque naturalmente dulce.',
    color: 'bg-orange-100',
    tag: 'Versión 03',
  },
]

const baseIngredientes = [
  {
    emoji: '🍫',
    name: 'Cacao',
    description:
      'Ingrediente principal que proporciona el sabor y la identidad característica de nuestro chocolate.',
  },
  {
    emoji: '🩸',
    name: 'Hierro',
    description:
      'Mineral que se incorpora mediante un proceso de fortificación como parte de nuestra propuesta nutricional.',
  },
  {
    emoji: '🍊',
    name: 'Vitamina C',
    description:
      'Se contempla incorporar una fuente natural de vitamina C, como el camu camu, para favorecer la absorción del hierro no hemo.',
  },
]

const endulzantes = [
  {
    emoji: '🌿',
    name: 'Estevia',
    description:
      'Alternativa de origen vegetal considerada para endulzar la formulación.',
  },
  {
    emoji: '✨',
    name: 'Fruto del monje',
    description:
      'Otra alternativa que se puede evaluar para la elaboración del chocolate.',
  },
  {
    emoji: '🌵',
    name: 'Agave',
    description:
      'Endulzante contemplado como una opción para desarrollar la fórmula.',
  },
]

const alimentos = [
  {
    emoji: '🥩',
    name: 'Carnes',
    description:
      'Algunas carnes contienen hierro hemo, que el organismo absorbe con mayor facilidad.',
  },
  {
    emoji: '🫘',
    name: 'Legumbres',
    description:
      'Lentejas, frejoles y garbanzos son alimentos que contienen hierro no hemo.',
  },
  {
    emoji: '🥬',
    name: 'Vegetales verdes',
    description:
      'Algunos vegetales de hojas verdes aportan hierro y otros nutrientes importantes.',
  },
  {
    emoji: '🍊',
    name: 'Frutas cítricas',
    description:
      'Las frutas ricas en vitamina C ayudan a mejorar la absorción del hierro no hemo.',
  },
]

const informacionNutricional = [
  { nombre: 'Valor energético', valor: '110 kcal*' },
  { nombre: 'Proteínas', valor: '1.5 g*' },
  { nombre: 'Grasas totales', valor: '7 g*' },
  { nombre: 'Grasas saturadas', valor: '4 g*' },
  { nombre: 'Carbohidratos', valor: '10 g*' },
  { nombre: 'Azúcares', valor: '5 g*' },
  { nombre: 'Fibra', valor: '2 g*' },
  { nombre: 'Hierro', valor: 'Por determinar' },
  { nombre: 'Vitamina C', valor: 'Por determinar' },
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
            Descubre la base nutricional de SuperChoc y sus tres
            deliciosas versiones. Una propuesta que combina cacao,
            fortificación con hierro y vitamina C.
          </p>

          <a
            href="#versiones"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E7B85C] px-7 py-4 font-bold text-[#542D25] transition hover:bg-[#F2CC7E]"
          >
            Conocer las versiones
            <ArrowRight size={19} />
          </a>

        </div>
      </section>

      {/* BASE COMÚN */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-12 text-center">
          <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
            Nuestra fórmula principal
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
            Una misma base, tres experiencias
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Todas las versiones de SuperChoc comparten una misma base
            de cacao fortificada con hierro y una fuente de vitamina C.
            La diferencia está en los ingredientes complementarios.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {baseIngredientes.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-[#E8D9BF] bg-white p-8 text-center shadow-sm"
            >
              <div className="text-6xl">{item.emoji}</div>

              <h3 className="mt-5 text-xl font-bold text-[#542D25]">
                {item.name}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </article>
          ))}

        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#E8D9BF] bg-white p-5">
          <Info className="shrink-0 text-[#9C5B37]" />

          <p className="text-sm leading-relaxed text-gray-600">
            La formulación contempla el uso de una fuente de vitamina C,
            como el camu camu. La selección definitiva de ingredientes,
            sus cantidades y el proceso de fortificación deberán
            validarse durante el desarrollo del producto.
          </p>
        </div>

      </section>

      {/* TRES VERSIONES */}
      <section id="versiones" className="bg-[#F4E8D4] px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
              Descubre nuestras variedades
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
              Tres versiones de SuperChoc
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Elige tu combinación favorita. Cada versión conserva
              la misma base de cacao fortificada y ofrece una
              experiencia diferente.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {versiones.map((item) => (
              <article
                key={item.name}
                className="overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`h-64 overflow-hidden ${item.color}`}>
                  <img
                    src={item.imagen}
                    alt={item.name}
                    className="h-full w-full object-contain transition duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-7">

                  <span className="text-xs font-bold uppercase tracking-widest text-[#9C5B37]">
                    {item.tag}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-[#542D25]">
                    {item.name}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-5 rounded-xl bg-[#FFF9F0] p-4">
                    <p className="text-sm font-semibold text-[#542D25]">
                      Base compartida:
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600">
                      Cacao + hierro + fuente de vitamina C.
                    </p>
                  </div>

                </div>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* HIERRO Y VITAMINA C */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
              Nutrientes importantes
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
              Hierro y vitamina C
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              La combinación de estos nutrientes es una parte
              importante de la propuesta de SuperChoc.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
                <HeartPulse size={34} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#542D25]">
                ¿Por qué es importante el hierro?
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                El hierro es un mineral necesario para producir
                hemoglobina, una proteína de los glóbulos rojos
                que transporta oxígeno por el organismo.
              </p>

              <p className="mt-4 leading-relaxed text-gray-600">
                Su consumo adecuado contribuye al crecimiento,
                el desarrollo y el funcionamiento normal del cuerpo.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <Citrus size={34} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#542D25]">
                ¿Qué aporta la vitamina C?
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                La vitamina C favorece la absorción del hierro
                no hemo, que se encuentra en alimentos de origen
                vegetal y en algunos productos fortificados.
              </p>

              <p className="mt-4 leading-relaxed text-gray-600">
                Por eso, combinar fuentes de hierro con alimentos
                que contienen vitamina C es una estrategia
                nutricional importante.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* ENDULZANTES */}
      <section className="bg-[#F4E8D4] px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
              Alternativas de formulación
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
              Endulzantes considerados
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Se contemplan diferentes alternativas para evaluar
              cuál se adapta mejor al sabor y a las características
              de la fórmula definitiva.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {endulzantes.map((item) => (
              <article
                key={item.name}
                className="rounded-3xl border border-[#E8D9BF] bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="text-6xl">{item.emoji}</div>

                <h3 className="mt-5 text-xl font-bold text-[#542D25]">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}

          </div>

          <div className="mt-8 rounded-2xl bg-white p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              <strong>Importante:</strong> estas son alternativas
              consideradas para la formulación. No significa que
              todos estos endulzantes estén presentes simultáneamente
              en el producto.
            </p>
          </div>

        </div>
      </section>


      {/* ALIMENTOS QUE APORTAN HIERRO */}
      <section className="bg-[#F4E8D4] px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
              Aprende a alimentarte
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
              Alimentos y nutrientes importantes
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Además de conocer SuperChoc, es importante descubrir
              otros alimentos que forman parte de una alimentación variada.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {alimentos.map((item) => (
              <article
                key={item.name}
                className="rounded-3xl border border-[#E8D9BF] bg-white p-7 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
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
        </div>
      </section>

      {/* CONSEJO NUTRICIONAL */}
      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 rounded-3xl bg-[#542D25] p-8 text-center text-white md:p-12">

          <Apple size={42} className="text-[#E7B85C]" />

          <h2 className="text-2xl font-bold md:text-3xl">
            ¡Cuida tu alimentación!
          </h2>

          <p className="max-w-2xl leading-relaxed text-[#F4E8D4]">
            Combinar alimentos que contienen hierro con fuentes
            de vitamina C puede favorecer su absorción. Recuerda
            que una alimentación variada y equilibrada es importante
            para cuidar tu bienestar.
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
            La información presentada tiene fines educativos.
            La formulación, composición nutricional y cantidades
            definitivas de SuperChoc deberán verificarse antes
            de su comercialización. SuperChoc es una propuesta
            alimentaria y no sustituye la evaluación ni el
            tratamiento médico de la anemia.
          </p>

        </div>
      </div>

    </div>
  )
}

export default Ingredientes
