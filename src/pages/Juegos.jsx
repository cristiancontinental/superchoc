
import { useState } from 'react'
import {
  Gamepad2,
  Trophy,
  Brain,
  Apple,
  CircleHelp,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Home,
  Sparkles
} from 'lucide-react'

const juegos = [
  {
    id: 'quiz',
    titulo: 'Quiz de la anemia',
    descripcion: 'Demuestra cuánto sabes sobre la anemia.',
    emoji: '🧠',
    icon: Brain,
    color: 'bg-amber-100',
  },
  {
    id: 'hierro',
    titulo: 'Encuentra el hierro',
    descripcion: 'Identifica los alimentos que aportan hierro.',
    emoji: '🥩',
    icon: Apple,
    color: 'bg-green-100',
  },
  {
    id: 'verdadero',
    titulo: 'Verdadero o falso',
    descripcion: 'Pon a prueba tus conocimientos.',
    emoji: '❓',
    icon: CircleHelp,
    color: 'bg-rose-100',
  }
]

const preguntasQuiz = [
  {
    pregunta: '¿Qué es la anemia?',
    opciones: [
      'Una enfermedad de los huesos',
      'Una condición relacionada con la hemoglobina o los glóbulos rojos',
      'Una enfermedad de la piel',
      'Una infección estomacal'
    ],
    correcta: 1,
    explicacion: 'La anemia se caracteriza por una concentración de hemoglobina o una cantidad de glóbulos rojos inferior a lo normal.'
  },
  {
    pregunta: '¿Qué mineral es importante para producir hemoglobina?',
    opciones: ['Calcio', 'Potasio', 'Hierro', 'Sodio'],
    correcta: 2,
    explicacion: 'El hierro es necesario para producir hemoglobina, la proteína que transporta oxígeno.'
  },
  {
    pregunta: '¿Cuál de estos alimentos aporta hierro?',
    opciones: ['Lentejas', 'Caramelos', 'Gaseosa', 'Gelatina'],
    correcta: 0,
    explicacion: 'Las lentejas contienen hierro de tipo no hemo, que es hierro de origen vegetal.'
  },
  {
    pregunta: '¿Qué vitamina favorece la absorción del hierro vegetal?',
    opciones: ['Vitamina D', 'Vitamina C', 'Vitamina K', 'Vitamina B1'],
    correcta: 1,
    explicacion: 'La vitamina C favorece la absorción del hierro no hemo presente en los vegetales.'
  },
  {
    pregunta: '¿Cuál puede ser un síntoma de anemia?',
    opciones: ['Cansancio', 'Crecimiento del cabello', 'Mayor energía', 'Mejor visión'],
    correcta: 0,
    explicacion: 'El cansancio y la debilidad pueden presentarse en personas con anemia.'
  }
]

const alimentos = [
  { nombre: 'Lentejas', emoji: '🫘', hierro: true },
  { nombre: 'Carne de res', emoji: '🥩', hierro: true },
  { nombre: 'Espinacas', emoji: '🥬', hierro: true },
  { nombre: 'Garbanzos', emoji: '🫘', hierro: true },
  { nombre: 'Naranja', emoji: '🍊', hierro: false },
  { nombre: 'Manzana', emoji: '🍎', hierro: false },
  { nombre: 'Gaseosa', emoji: '🥤', hierro: false },
  { nombre: 'Caramelos', emoji: '🍬', hierro: false }
]

const afirmaciones = [
  {
    texto: 'La vitamina C ayuda a absorber el hierro vegetal.',
    correcta: true,
    explicacion: '¡Correcto! La vitamina C mejora la absorción del hierro no hemo.'
  },
  {
    texto: 'Todas las anemias son causadas por falta de hierro.',
    correcta: false,
    explicacion: 'Existen diferentes causas, como deficiencias de vitaminas, pérdidas de sangre y enfermedades hereditarias.'
  },
  {
    texto: 'Las lentejas contienen hierro.',
    correcta: true,
    explicacion: '¡Así es! Las lentejas aportan hierro vegetal.'
  },
  {
    texto: 'El cansancio puede ser un síntoma de anemia.',
    correcta: true,
    explicacion: 'El cansancio y la debilidad son síntomas frecuentes.'
  },
  {
    texto: 'Los suplementos de hierro deben tomarse sin consultar a un profesional.',
    correcta: false,
    explicacion: 'Los suplementos deben utilizarse cuando un profesional de salud los indique.'
  }
]

function Juegos() {
  const [juegoActivo, setJuegoActivo] = useState(null)

  // QUIZ
  const [preguntaActual, setPreguntaActual] = useState(0)
  const [puntosQuiz, setPuntosQuiz] = useState(0)
  const [respuestaQuiz, setRespuestaQuiz] = useState(null)
  const [terminoQuiz, setTerminoQuiz] = useState(false)

  // ENCUENTRA EL HIERRO
  const [seleccionados, setSeleccionados] = useState([])
  const [terminoHierro, setTerminoHierro] = useState(false)

  // VERDADERO O FALSO
  const [preguntaVF, setPreguntaVF] = useState(0)
  const [puntosVF, setPuntosVF] = useState(0)
  const [respuestaVF, setRespuestaVF] = useState(null)
  const [terminoVF, setTerminoVF] = useState(false)

  const responderQuiz = (indice) => {
    if (respuestaQuiz !== null) return

    setRespuestaQuiz(indice)

    if (indice === preguntasQuiz[preguntaActual].correcta) {
      setPuntosQuiz(p => p + 1)
    }
  }

  const siguienteQuiz = () => {
    if (preguntaActual < preguntasQuiz.length - 1) {
      setPreguntaActual(p => p + 1)
      setRespuestaQuiz(null)
    } else {
      setTerminoQuiz(true)
    }
  }

  const seleccionarAlimento = (indice) => {
    if (terminoHierro || seleccionados.includes(indice)) return
    setSeleccionados(prev => [...prev, indice])
  }

  const finalizarHierro = () => {
    setTerminoHierro(true)
  }

  const puntosHierro = seleccionados.filter(
    indice => alimentos[indice].hierro
  ).length

  const responderVF = (respuesta) => {
    if (respuestaVF !== null) return

    setRespuestaVF(respuesta)

    if (respuesta === afirmaciones[preguntaVF].correcta) {
      setPuntosVF(p => p + 1)
    }
  }

  const siguienteVF = () => {
    if (preguntaVF < afirmaciones.length - 1) {
      setPreguntaVF(p => p + 1)
      setRespuestaVF(null)
    } else {
      setTerminoVF(true)
    }
  }

  const reiniciar = () => {
    setJuegoActivo(null)

    setPreguntaActual(0)
    setPuntosQuiz(0)
    setRespuestaQuiz(null)
    setTerminoQuiz(false)

    setSeleccionados([])
    setTerminoHierro(false)

    setPreguntaVF(0)
    setPuntosVF(0)
    setRespuestaVF(null)
    setTerminoVF(false)
  }

  const volverMenu = () => {
    setJuegoActivo(null)
  }

  const resultado = (puntos, total) => {
    const porcentaje = (puntos / total) * 100

    if (porcentaje === 100) return '¡Excelente! Eres un experto.'
    if (porcentaje >= 60) return '¡Muy bien! Sigue aprendiendo.'
    return '¡Buen intento! Puedes volver a jugar.'
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0]">

      {/* PORTADA */}
      <section className="bg-gradient-to-br from-[#542D25] to-[#8B5038] px-6 py-20 text-white md:py-24">

        <div className="mx-auto max-w-5xl text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#E7B85C] text-[#542D25]">
            <Gamepad2 size={42} />
          </div>

          <span className="mt-7 inline-block rounded-full bg-white/15 px-5 py-2 text-sm">
            🎮 Aprende jugando
          </span>

          <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">
            ¡Bienvenido a
            <span className="block text-[#E7B85C]">
              SuperChoc Games!
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#F4E8D4]">
            Diviértete, responde preguntas y descubre cuánto
            sabes sobre la anemia y la alimentación saludable.
          </p>

          {!juegoActivo && (
            <a
              href="#juegos"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E7B85C] px-8 py-4 font-bold text-[#542D25] transition hover:bg-[#F2CC7E]"
            >
              Elegir un juego
              <ArrowRight size={19} />
            </a>
          )}

        </div>
      </section>

      {/* MENU DE JUEGOS */}
      {!juegoActivo && (
        <section id="juegos" className="mx-auto max-w-6xl px-6 py-20">

          <div className="mb-12 text-center">
            <span className="font-semibold uppercase tracking-widest text-[#9C5B37]">
              Zona de diversión
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#542D25] md:text-4xl">
              Elige tu desafío
            </h2>

            <p className="mt-4 text-gray-600">
              Selecciona uno de nuestros tres juegos para comenzar.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">

            {juegos.map((juego) => {
              const Icon = juego.icon

              return (
                <article
                  key={juego.id}
                  className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className={`flex h-48 items-center justify-center ${juego.color}`}>
                    <span className="text-8xl">{juego.emoji}</span>
                  </div>

                  <div className="p-7">

                    <div className="flex items-center gap-2 text-[#9C5B37]">
                      <Icon size={19} />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Juego interactivo
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-[#542D25]">
                      {juego.titulo}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {juego.descripcion}
                    </p>

                    <button
                      onClick={() => setJuegoActivo(juego.id)}
                      className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#542D25] px-6 py-4 font-bold text-white transition hover:bg-[#8B5038]"
                    >
                      ¡Jugar ahora!
                      <ArrowRight size={18} />
                    </button>

                  </div>
                </article>
              )
            })}

          </div>

          <div className="mt-12 flex items-center justify-center gap-3 rounded-2xl bg-[#F4E8D4] p-6 text-center">
            <Sparkles className="shrink-0 text-[#9C5B37]" />
            <p className="text-sm text-[#542D25]">
              ¡Aprender sobre nuestra salud también puede ser divertido!
            </p>
          </div>

        </section>
      )}

      {/* AREA DE JUEGOS */}
      {juegoActivo && (
        <section className="mx-auto max-w-3xl px-5 py-12 md:py-20">

          <button
            onClick={volverMenu}
            className="mb-8 inline-flex items-center gap-2 font-semibold text-[#9C5B37] hover:underline"
          >
            <Home size={18} />
            Volver a los juegos
          </button>

          {/* JUEGO 1: QUIZ */}
          {juegoActivo === 'quiz' && (
            <div className="rounded-3xl bg-white p-6 shadow-lg md:p-10">

              <div className="flex items-center justify-between gap-3">
                <span className="font-bold text-[#542D25]">
                  🧠 Quiz de la anemia
                </span>

                <span className="rounded-full bg-[#F4E8D4] px-4 py-2 text-sm font-bold text-[#542D25]">
                  {preguntaActual + 1}/{preguntasQuiz.length}
                </span>
              </div>

              {!terminoQuiz ? (
                <>
                  <div className="mt-6 h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-[#C58A3B] transition-all"
                      style={{ width: `${((preguntaActual + 1) / preguntasQuiz.length) * 100}%` }}
                    />
                  </div>

                  <h2 className="mt-9 text-2xl font-bold leading-snug text-[#542D25]">
                    {preguntasQuiz[preguntaActual].pregunta}
                  </h2>

                  <div className="mt-7 space-y-3">
                    {preguntasQuiz[preguntaActual].opciones.map((opcion, index) => {
                      const correcta = preguntasQuiz[preguntaActual].correcta === index
                      const elegida = respuestaQuiz === index

                      let estilo = 'border-[#E8D9BF] bg-white hover:bg-[#FFF9F0]'

                      if (respuestaQuiz !== null && correcta) {
                        estilo = 'border-green-500 bg-green-50 text-green-800'
                      } else if (elegida && !correcta) {
                        estilo = 'border-red-500 bg-red-50 text-red-800'
                      }

                      return (
                        <button
                          key={index}
                          disabled={respuestaQuiz !== null}
                          onClick={() => responderQuiz(index)}
                          className={`flex w-full items-center justify-between gap-3 rounded-2xl border-2 p-4 text-left text-sm font-medium transition ${estilo}`}
                        >
                          <span>{opcion}</span>

                          {respuestaQuiz !== null && correcta && (
                            <CheckCircle2 size={20} className="shrink-0 text-green-600" />
                          )}

                          {elegida && !correcta && (
                            <XCircle size={20} className="shrink-0 text-red-600" />
                          )}
                        </button>
                      )
                    })}
                  </div>

                  {respuestaQuiz !== null && (
                    <div className="mt-6 rounded-2xl bg-[#F4E8D4] p-5">
                      <p className="font-bold text-[#542D25]">
                        {respuestaQuiz === preguntasQuiz[preguntaActual].correcta
                          ? '¡Respuesta correcta! 🎉'
                          : '¡No te preocupes! Sigue aprendiendo.'}
                      </p>

                      <p className="mt-2 text-sm leading-relaxed text-gray-700">
                        {preguntasQuiz[preguntaActual].explicacion}
                      </p>

                      <button
                        onClick={siguienteQuiz}
                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#542D25] px-6 py-3 font-bold text-white"
                      >
                        {preguntaActual === preguntasQuiz.length - 1
                          ? 'Ver resultado'
                          : 'Siguiente pregunta'}
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="py-10 text-center">
                  <Trophy size={65} className="mx-auto text-[#C58A3B]" />

                  <h2 className="mt-5 text-3xl font-bold text-[#542D25]">
                    ¡Juego terminado!
                  </h2>

                  <p className="mt-5 text-5xl font-extrabold text-[#9C5B37]">
                    {puntosQuiz}/{preguntasQuiz.length}
                  </p>

                  <p className="mt-4 text-gray-600">
                    {resultado(puntosQuiz, preguntasQuiz.length)}
                  </p>

                  <button
                    onClick={reiniciar}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#542D25] px-8 py-4 font-bold text-white"
                  >
                    <RotateCcw size={18} />
                    Volver a jugar
                  </button>
                </div>
              )}

            </div>
          )}

          {/* JUEGO 2: ENCUENTRA EL HIERRO */}
          {juegoActivo === 'hierro' && (
            <div className="rounded-3xl bg-white p-6 shadow-lg md:p-10">

              <div className="text-center">
                <span className="text-6xl">🥗</span>

                <h2 className="mt-4 text-2xl font-bold text-[#542D25]">
                  Encuentra el hierro
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Selecciona los alimentos que aportan hierro.
                  Puedes elegir varios.
                </p>
              </div>

              {!terminoHierro ? (
                <>
                  <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

                    {alimentos.map((alimento, index) => (
                      <button
                        key={index}
                        onClick={() => seleccionarAlimento(index)}
                        disabled={seleccionados.includes(index)}
                        className={`rounded-2xl border-2 p-4 text-center transition ${
                          seleccionados.includes(index)
                            ? 'border-[#C58A3B] bg-[#F4E8D4]'
                            : 'border-[#E8D9BF] hover:bg-[#FFF9F0]'
                        }`}
                      >
                        <span className="block text-4xl">
                          {alimento.emoji}
                        </span>

                        <span className="mt-3 block text-xs font-bold text-[#542D25]">
                          {alimento.nombre}
                        </span>

                        {seleccionados.includes(index) && (
                          <CheckCircle2 size={17} className="mx-auto mt-2 text-[#9C5B37]" />
                        )}
                      </button>
                    ))}

                  </div>

                  <p className="mt-6 text-center text-sm text-gray-500">
                    Alimentos seleccionados: {seleccionados.length}
                  </p>

                  <button
                    onClick={finalizarHierro}
                    disabled={seleccionados.length === 0}
                    className="mt-6 w-full rounded-full bg-[#542D25] px-6 py-4 font-bold text-white transition hover:bg-[#8B5038] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Comprobar respuestas
                  </button>
                </>
              ) : (
                <div className="py-10 text-center">

                  <Trophy size={65} className="mx-auto text-[#C58A3B]" />

                  <h3 className="mt-5 text-3xl font-bold text-[#542D25]">
                    ¡Buen trabajo!
                  </h3>

                  <p className="mt-5 text-5xl font-extrabold text-[#9C5B37]">
                    {puntosHierro}/4
                  </p>

                  <p className="mt-4 text-gray-600">
                    Identificaste correctamente {puntosHierro} de los 4 alimentos que aportan hierro.
                  </p>

                  <div className="mt-6 rounded-2xl bg-[#F4E8D4] p-5 text-left">
                    <p className="font-bold text-[#542D25]">
                      Respuestas correctas:
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-gray-700">
                      Lentejas, carne de res, espinacas y garbanzos.
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-gray-700">
                      La naranja aporta vitamina C, pero no es una fuente importante de hierro. Puede ayudar a absorber el hierro vegetal.
                    </p>
                  </div>

                  <button
                    onClick={reiniciar}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#542D25] px-8 py-4 font-bold text-white"
                  >
                    <RotateCcw size={18} />
                    Volver a jugar
                  </button>

                </div>
              )}

            </div>
          )}

          {/* JUEGO 3: VERDADERO O FALSO */}
          {juegoActivo === 'verdadero' && (
            <div className="rounded-3xl bg-white p-6 shadow-lg md:p-10">

              <div className="flex items-center justify-between gap-3">
                <span className="font-bold text-[#542D25]">
                  ❓ Verdadero o falso
                </span>

                <span className="rounded-full bg-[#F4E8D4] px-4 py-2 text-sm font-bold text-[#542D25]">
                  {preguntaVF + 1}/{afirmaciones.length}
                </span>
              </div>

              {!terminoVF ? (
                <>
                  <div className="mt-6 h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-[#C58A3B] transition-all"
                      style={{ width: `${((preguntaVF + 1) / afirmaciones.length) * 100}%` }}
                    />
                  </div>

                  <div className="py-10 text-center">
                    <span className="text-6xl">🤔</span>

                    <h2 className="mt-6 text-2xl font-bold leading-relaxed text-[#542D25]">
                      {afirmaciones[preguntaVF].texto}
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    <button
                      disabled={respuestaVF !== null}
                      onClick={() => responderVF(true)}
                      className="rounded-2xl border-2 border-green-200 bg-green-50 p-5 font-bold text-green-800 transition hover:bg-green-100 disabled:opacity-60"
                    >
                      ✓ Verdadero
                    </button>

                    <button
                      disabled={respuestaVF !== null}
                      onClick={() => responderVF(false)}
                      className="rounded-2xl border-2 border-red-200 bg-red-50 p-5 font-bold text-red-800 transition hover:bg-red-100 disabled:opacity-60"
                    >
                      ✕ Falso
                    </button>

                  </div>

                  {respuestaVF !== null && (
                    <div className="mt-6 rounded-2xl bg-[#F4E8D4] p-5">

                      <p className="font-bold text-[#542D25]">
                        {respuestaVF === afirmaciones[preguntaVF].correcta
                          ? '¡Correcto! 🎉'
                          : '¡Respuesta incorrecta!'}
                      </p>

                      <p className="mt-2 text-sm leading-relaxed text-gray-700">
                        {afirmaciones[preguntaVF].explicacion}
                      </p>

                      <button
                        onClick={siguienteVF}
                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#542D25] px-6 py-3 font-bold text-white"
                      >
                        {preguntaVF === afirmaciones.length - 1
                          ? 'Ver resultado'
                          : 'Siguiente afirmación'}
                        <ArrowRight size={18} />
                      </button>

                    </div>
                  )}
                </>
              ) : (
                <div className="py-10 text-center">

                  <Trophy size={65} className="mx-auto text-[#C58A3B]" />

                  <h2 className="mt-5 text-3xl font-bold text-[#542D25]">
                    ¡Desafío completado!
                  </h2>

                  <p className="mt-5 text-5xl font-extrabold text-[#9C5B37]">
                    {puntosVF}/{afirmaciones.length}
                  </p>

                  <p className="mt-4 text-gray-600">
                    {resultado(puntosVF, afirmaciones.length)}
                  </p>

                  <button
                    onClick={reiniciar}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#542D25] px-8 py-4 font-bold text-white"
                  >
                    <RotateCcw size={18} />
                    Volver a jugar
                  </button>

                </div>
              )}

            </div>
          )}

        </section>
      )}

      {/* MENSAJE FINAL */}
      {!juegoActivo && (
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-5xl rounded-3xl bg-[#542D25] p-9 text-center text-white md:p-12">

            <Trophy size={45} className="mx-auto text-[#E7B85C]" />

            <h2 className="mt-5 text-3xl font-bold">
              ¡Aprende, juega y comparte!
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#F4E8D4]">
              Cada respuesta es una oportunidad para aprender
              algo nuevo sobre el cuidado de nuestra salud.
            </p>

          </div>
        </section>
      )}

    </div>
  )
}

export default Juegos
