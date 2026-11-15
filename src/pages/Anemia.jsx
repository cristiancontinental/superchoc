
import {
  HeartPulse,
  Droplets,
  AlertCircle,
  Apple,
  Activity,
  ShieldCheck,
  ArrowRight,
  Stethoscope,
  BookOpen
} from 'lucide-react'

import { Link } from 'react-router'

const causas = [
  {
    emoji: '🥩',
    title: 'Deficiencia de hierro',
    description: 'Puede ocurrir cuando el organismo no recibe o no absorbe suficiente hierro.'
  },
  {
    emoji: '🥬',
    title: 'Falta de vitaminas',
    description: 'La deficiencia de vitamina B12, folato y otros nutrientes puede causar anemia.'
  },
  {
    emoji: '🩸',
    title: 'Pérdida de sangre',
    description: 'Las hemorragias y las menstruaciones abundantes pueden provocar anemia.'
  },
  {
    emoji: '🧬',
    title: 'Enfermedades hereditarias',
    description: 'Algunos trastornos genéticos afectan la producción o estructura de los glóbulos rojos.'
  }
]

const sintomas = [
  { emoji: '😴', title: 'Cansancio', description: 'Sensación de fatiga o falta de energía.' },
  { emoji: '😵', title: 'Mareos', description: 'Sensación de inestabilidad o aturdimiento.' },
  { emoji: '🥶', title: 'Frío', description: 'Sensación de frío en manos y pies.' },
  { emoji: '🤕', title: 'Dolor de cabeza', description: 'Molestias o dolores frecuentes de cabeza.' },
  { emoji: '😮‍💨', title: 'Falta de aire', description: 'Dificultad para respirar, especialmente al hacer esfuerzos.' },
  { emoji: '🫥', title: 'Palidez', description: 'Puede presentarse palidez en la piel o mucosas.' }
]

const alimentos = [
  { emoji: '🥩', name: 'Carnes', description: 'Aportan hierro de tipo hemo.' },
  { emoji: '🐟', name: 'Pescados', description: 'Algunos pescados contienen hierro.' },
  { emoji: '🫘', name: 'Lentejas y frijoles', description: 'Son fuentes de hierro no hemo.' },
  { emoji: '🥬', name: 'Verduras verdes', description: 'Algunas verduras de hoja verde aportan hierro.' },
  { emoji: '🍊', name: 'Naranja', description: 'Su vitamina C favorece la absorción del hierro vegetal.' },
  { emoji: '🍓', name: 'Fresas', description: 'Contienen vitamina C.' }
]

function Anemia() {
  return (
    <div className="bg-[#FFF9F0]">

      {/* PORTADA */}
      <section className="bg-gradient-to-br from-[#542D25] to-[#8B5038] px-6 py-20 text-white md:py-28">

        <div className="mx-auto max-w-5xl text-center">

          <span className="rounded-full bg-white/15 px-5 py-2 text-sm">
            ❤️ Educación y salud
          </span>

          <h1 className="mt-8 text-4xl font-extrabold md:text-6xl">
            Conoce más sobre
            <span className="block text-[#E7B85C]">
              la anemia
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#F4E8D4] md:text-lg">
            Aprende qué es la anemia, cuáles son sus causas,
            cómo reconocer sus síntomas y por qué es importante
            mantener una alimentación saludable.
          </p>

          <a
            href="#que-es"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#E7B85C] px-8 py-4 font-bold text-[#542D25] transition hover:bg-[#F2CC7E]"
          >
            Comenzar a aprender
            <ArrowRight size={19} />
          </a>

        </div>
      </section>

      {/* QUE ES LA ANEMIA */}
      <section id="que-es" className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid items-center gap-12 md:grid-cols-2">

          <div>
            <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
              Información importante
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#542D25] md:text-4xl">
              ¿Qué es la anemia?
            </h2>

            <p className="mt-6 leading-relaxed text-gray-600">
              La anemia es una afección en la que la cantidad de
              glóbulos rojos o la concentración de hemoglobina
              en la sangre es inferior a lo normal.
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              La hemoglobina es una proteína presente en los
              glóbulos rojos que permite transportar oxígeno
              desde los pulmones hacia los órganos y tejidos
              del cuerpo.
            </p>

            <div className="mt-7 flex items-start gap-3 rounded-2xl bg-[#F4E8D4] p-5">
              <HeartPulse className="shrink-0 text-[#9C5B37]" />

              <p className="text-sm leading-relaxed text-[#542D25]">
                La anemia puede tener diferentes causas.
                La deficiencia de hierro es una de las causas
                nutricionales más frecuentes, pero no es la única.
              </p>
            </div>
          </div>

          {/* ILUSTRACION PROVISIONAL */}
          <div className="flex min-h-80 flex-col items-center justify-center rounded-[2.5rem] bg-[#F4E8D4] p-8 text-center">

            <div className="text-8xl">🩸</div>

            <h3 className="mt-6 text-2xl font-bold text-[#542D25]">
              La hemoglobina
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-600">
              Es fundamental para transportar oxígeno
              por todo nuestro organismo.
            </p>

          </div>

        </div>
      </section>

      {/* FUNCION DE LA HEMOGLOBINA */}
      <section className="bg-[#F4E8D4] px-6 py-20">

        <div className="mx-auto max-w-5xl text-center">

          <Droplets size={42} className="mx-auto text-[#9C5B37]" />

          <h2 className="mt-4 text-3xl font-bold text-[#542D25]">
            ¿Por qué es importante la hemoglobina?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-600">
            Su función principal es transportar oxígeno a las
            diferentes partes del cuerpo. Cuando existe anemia,
            la capacidad de transportar oxígeno puede disminuir.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              { emoji: '🫁', title: 'Pulmones', description: 'El oxígeno ingresa al organismo mediante la respiración.' },
              { emoji: '🩸', title: 'Sangre', description: 'La hemoglobina transporta el oxígeno.' },
              { emoji: '💪', title: 'Tejidos', description: 'El oxígeno llega a los órganos y tejidos.' }
            ].map((item) => (
              <article key={item.title} className="rounded-3xl bg-white p-7 shadow-sm">
                <div className="text-6xl">{item.emoji}</div>
                <h3 className="mt-5 text-xl font-bold text-[#542D25]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* CAUSAS */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-12 text-center">

          <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
            Conoce sus orígenes
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
            ¿Cuáles son sus causas?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            La anemia puede desarrollarse por diferentes
            condiciones que afectan la sangre y la producción
            de glóbulos rojos.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2">

          {causas.map((item) => (
            <article
              key={item.title}
              className="flex gap-5 rounded-3xl border border-[#E8D9BF] bg-white p-7 shadow-sm transition hover:shadow-lg"
            >

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F4E8D4] text-4xl">
                {item.emoji}
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#542D25]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>

            </article>
          ))}

        </div>
      </section>

      {/* SINTOMAS */}
      <section className="bg-[#F4E8D4] px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
              Aprende a reconocerlos
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
              Síntomas frecuentes
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Algunas personas pueden presentar estos síntomas,
              aunque también pueden deberse a otras condiciones.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">

            {sintomas.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl bg-white p-6 text-center shadow-sm"
              >

                <div className="text-5xl">{item.emoji}</div>

                <h3 className="mt-4 font-bold text-[#542D25]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-gray-600 md:text-sm">
                  {item.description}
                </p>

              </article>
            ))}

          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#D8B9A5] bg-white p-5">
            <AlertCircle className="shrink-0 text-[#9C5B37]" />
            <p className="text-sm leading-relaxed text-gray-600">
              Presentar uno o varios síntomas no significa necesariamente
              que una persona tenga anemia. Es necesario realizar una
              evaluación médica para determinarlo.
            </p>
          </div>

        </div>
      </section>

      {/* ALIMENTOS */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-12 text-center">

          <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
            Alimentación consciente
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
            Alimentos que aportan hierro
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Una alimentación variada puede incluir alimentos
            que aportan hierro y nutrientes importantes.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">

          {alimentos.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-[#E8D9BF] bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-6xl">{item.emoji}</div>

              <h3 className="mt-4 font-bold text-[#542D25]">
                {item.name}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </article>
          ))}

        </div>

        <div className="mt-8 rounded-3xl bg-[#F4E8D4] p-7">
          <h3 className="text-xl font-bold text-[#542D25]">
            🍊 Un consejo importante
          </h3>

          <p className="mt-3 leading-relaxed text-gray-600">
            La vitamina C ayuda a mejorar la absorción del hierro
            no hemo presente en alimentos vegetales. Por eso,
            combinar legumbres con frutas o verduras ricas en
            vitamina C puede ser una buena estrategia alimentaria.
          </p>
        </div>

      </section>

      {/* PREVENCION */}
      <section className="bg-[#F4E8D4] px-6 py-20">

        <div className="mx-auto max-w-5xl">

          <div className="mb-10 text-center">
            <ShieldCheck size={42} className="mx-auto text-[#9C5B37]" />

            <h2 className="mt-4 text-3xl font-bold text-[#542D25]">
              ¿Cómo cuidar nuestra salud?
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {[
              'Mantener una alimentación variada y equilibrada.',
              'Incluir alimentos que aporten hierro y otros nutrientes.',
              'Combinar fuentes de hierro vegetal con alimentos ricos en vitamina C.',
              'Consultar a un profesional de salud si aparecen síntomas.',
              'Realizar controles médicos cuando sean recomendados.',
              'Tomar suplementos únicamente cuando sean indicados por un profesional.'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 rounded-2xl bg-white p-5">
                <ShieldCheck className="shrink-0 text-[#9C5B37]" />
                <p className="text-sm leading-relaxed text-gray-700">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ATENCION MEDICA */}
      <section className="mx-auto max-w-5xl px-6 py-20">

        <div className="rounded-3xl bg-[#542D25] p-8 text-white md:p-12">

          <Stethoscope size={42} className="text-[#E7B85C]" />

          <h2 className="mt-5 text-3xl font-bold">
            ¿Cuándo acudir al médico?
          </h2>

          <p className="mt-5 leading-relaxed text-[#F4E8D4]">
            Si presentas cansancio persistente, mareos, falta de aire
            u otros síntomas, consulta con un profesional de salud.
            Un análisis de sangre puede ayudar a evaluar los niveles
            de hemoglobina y determinar si existe anemia.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#F4E8D4]">
            Si tienes dificultad intensa para respirar, dolor en el
            pecho o desmayo, busca atención médica urgente.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              to="/recetas"
              className="inline-flex items-center gap-2 rounded-full bg-[#E7B85C] px-7 py-4 font-bold text-[#542D25] transition hover:bg-[#F2CC7E]"
            >
              Ver recetas saludables
              <ArrowRight size={19} />
            </Link>

            <Link
              to="/ingredientes"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              <BookOpen size={19} />
              Ver nutrición
            </Link>

          </div>

        </div>

      </section>

      {/* FUENTE INFORMATIVA */}
      <section className="mx-auto max-w-5xl px-6 pb-12">

        <div className="flex items-start gap-3 rounded-2xl border border-[#E8D9BF] bg-white p-5">
          <Activity className="shrink-0 text-[#9C5B37]" />

          <div>
            <h3 className="font-bold text-[#542D25]">
              Información educativa
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Contenido basado en información de la Organización
              Mundial de la Salud. Esta página no reemplaza
              la evaluación, el diagnóstico ni el tratamiento médico.
            </p>

            <a
              href="https://www.who.int/es/news-room/fact-sheets/detail/anaemia"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-[#9C5B37] hover:underline"
            >
              Consultar información de la OMS →
            </a>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Anemia
