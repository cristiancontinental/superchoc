
import { useState } from 'react'
import {
  Tag,
  Gift,
  ShoppingBag,
  Copy,
  Check,
  Sparkles,
  Percent,
  Clock,
  Star,
  Heart,
  Ticket
} from 'lucide-react'

const promociones = [
  {
    id: 1,
    etiqueta: 'PRECIO REGULAR',
    emoji: '🍫',
    imagen: '/imagenes/promo-individual.jpg',
    titulo: 'SuperChoc individual',
    descripcion: 'Elige tu variedad favorita: semillas de zapallo, frutos secos o frutas deshidratadas.',
    precioAnterior: '',
    precio: 'S/ 5.00',
    descuento: '1 unidad',
    color: 'bg-[#F4E8D4]'
  },
  {
    id: 2,
    etiqueta: 'IDEAL PARA COMPARTIR',
    emoji: '🍫🍫',
    imagen: '/imagenes/promo-duo.jpg',
    titulo: 'Dúo SuperChoc',
    descripcion: 'Dos chocolates para compartir con alguien especial y disfrutar juntos.',
    precioAnterior: 'S/ 10.00',
    precio: 'S/ 9.50',
    descuento: 'Ahorra S/ 0.50',
    color: 'bg-[#F8E5D9]'
  },
  {
    id: 3,
    etiqueta: 'MÁS ELEGIDO',
    emoji: '🍫🍫🍫',
    imagen: '/imagenes/promo-trio.jpg',
    titulo: 'Trío SuperChoc',
    descripcion: 'Prueba las tres variedades y descubre tu combinación favorita.',
    precioAnterior: 'S/ 15.00',
    precio: 'S/ 14.00',
    descuento: 'Ahorra S/ 1.00',
    color: 'bg-[#F5EBD1]'
  },
  {
    id: 4,
    etiqueta: 'PARA COMPARTIR',
    emoji: '🎁',
    imagen: '/imagenes/promo-pack.jpg',
    titulo: 'Pack Compartir',
    descripcion: 'Cinco chocolates para disfrutar en familia o con tus amigos.',
    precioAnterior: 'S/ 25.00',
    precio: 'S/ 22.50',
    descuento: 'Ahorra S/ 2.50',
    color: 'bg-[#F4E8D4]'
  }
]

const cupones = [
  {
    codigo: 'BIENVENIDO',
    titulo: 'Promoción de lanzamiento',
    descuento: '2 chocolates por S/ 9.00',
    descripcion: 'Una oferta especial para conocer SuperChoc.',
    condicion: 'Promoción propuesta para el lanzamiento.'
  },
  {
    codigo: 'SUPERCHOC',
    titulo: 'Beneficio especial',
    descuento: 'Consulta nuestras ofertas',
    descripcion: 'Un código de ejemplo para futuras campañas.',
    condicion: 'Beneficio pendiente de definir.'
  }
]

function Promociones() {
  const [cuponCopiado, setCuponCopiado] = useState('')

  const copiarCupon = async (codigo) => {
    try {
      await navigator.clipboard.writeText(codigo)
      setCuponCopiado(codigo)
      setTimeout(() => setCuponCopiado(''), 2000)
    } catch {
      alert(`Tu código es: ${codigo}`)
    }
  }

  return (
    <main className="min-h-screen bg-[#FFF9F0] text-[#542D25]">

      {/* Banner principal */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#542D25] via-[#70402F] to-[#8B5038] px-5 py-16 text-center text-white md:py-24">
        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#E7B85C]/10" />
        <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-[#E7B85C]/10" />

        <div className="relative mx-auto max-w-3xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#E7B85C] px-4 py-2 text-sm font-bold text-[#542D25]">
            <Sparkles size={16} />
            OFERTAS ESPECIALES
          </span>

          <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-6xl">
            ¡Comparte algo bueno con
            <span className="block text-[#F5D58A]">SuperChoc!</span>
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-base text-[#FFF1D9] md:text-lg">
            Descubre nuestras promociones, disfruta de tus variedades
            favoritas y comparte una experiencia diferente.
          </p>

          <a
            href="#ofertas"
            className="inline-flex items-center gap-2 rounded-full bg-[#E7B85C] px-7 py-3 font-bold text-[#542D25] transition hover:bg-[#F5D58A]"
          >
            <ShoppingBag size={19} />
            Ver promociones
          </a>
        </div>
      </section>

      {/* Introducción */}
      <section className="px-5 py-12 text-center">
        <div className="mx-auto max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-widest text-[#A46A42]">
            ¡Elige tu favorita!
          </span>

          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            Promociones SuperChoc
          </h2>

          <p className="mt-3 text-[#80685C]">
            Nuestro chocolate tiene un precio base de S/ 5.00.
            Aprovecha nuestras opciones para compartir y disfrutar
            de las tres variedades.
          </p>
        </div>
      </section>

      {/* Tarjetas de ofertas */}
      <section id="ofertas" className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {promociones.map((promo) => (
            <article
              key={promo.id}
              className="overflow-hidden rounded-3xl border border-[#EADCCB] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`${promo.color} relative flex h-48 items-center justify-center overflow-hidden`}>

                <img
                  src={promo.imagen}
                  alt={promo.titulo}
                  className="h-full w-full object-contain p-3"
                  loading="lazy"
                />

                <span className="absolute left-3 top-3 rounded-full bg-[#542D25] px-3 py-1 text-[10px] font-bold text-white">
                  {promo.etiqueta}
                </span>

                <span className="absolute bottom-3 right-3 rounded-full bg-[#E7B85C] px-3 py-1 text-xs font-extrabold text-[#542D25]">
                  {promo.descuento}
                </span>

              </div>

              <div className="p-5">
                <h3 className="text-xl font-extrabold">
                  {promo.titulo}
                </h3>

                <p className="mt-2 min-h-20 text-sm leading-relaxed text-[#80685C]">
                  {promo.descripcion}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {promo.precioAnterior && (
                    <span className="text-sm text-gray-400 line-through">
                      {promo.precioAnterior}
                    </span>
                  )}

                  <span className="text-2xl font-extrabold text-[#9C5B37]">
                    {promo.precio}
                  </span>
                </div>

                <a
                  href="/producto"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#542D25] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#8B5038]"
                >
                  <ShoppingBag size={17} />
                  Ver producto
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Promoción de lanzamiento */}
      <section className="bg-[#F4E8D4] px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm md:flex">
            <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
              <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-[#F5EBD1] px-4 py-2 text-sm font-bold text-[#8B5038]">
                <Sparkles size={16} />
                PROMOCIÓN DE LANZAMIENTO
              </span>

              <h2 className="text-3xl font-extrabold">
                ¡Conoce SuperChoc!
              </h2>

              <p className="mt-3 leading-relaxed text-[#80685C]">
                Queremos que conozcas nuestras variedades.
                Por eso proponemos una promoción especial:
              </p>

              <div className="mt-5 rounded-2xl bg-[#FFF9F0] p-5">
                <p className="text-sm font-bold text-[#A46A42]">
                  LLEVA 2 CHOCOLATES
                </p>
                <p className="mt-1 text-4xl font-extrabold text-[#542D25]">
                  S/ 9.00
                </p>
                <p className="mt-1 text-sm text-[#80685C]">
                  En lugar de S/ 10.00
                </p>
              </div>
            </div>

            <div className="flex min-h-64 flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-[#70402F] to-[#542D25] p-5">
              <img
                src="/imagenes/promo-duo.jpg"
                alt="Promoción de lanzamiento SuperChoc: dos chocolates por S/ 9.00"
                className="max-h-80 w-full rounded-2xl object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cupones */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#A46A42]">
              Beneficios especiales
            </span>

            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
              Cupones SuperChoc
            </h2>

            <p className="mt-3 text-[#80685C]">
              Descubre nuestros códigos promocionales y futuras campañas.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {cupones.map((cupon) => (
              <article
                key={cupon.codigo}
                className="flex flex-col justify-between gap-5 rounded-2xl border-2 border-dashed border-[#B98A60] bg-white p-6 sm:flex-row sm:items-center"
              >
                <div>
                  <div className="mb-2 flex items-center gap-2 text-[#A46A42]">
                    <Ticket size={20} />
                    <span className="text-sm font-bold">
                      {cupon.titulo}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold">
                    {cupon.descuento}
                  </h3>

                  <p className="mt-1 text-sm text-[#80685C]">
                    {cupon.descripcion}
                  </p>

                  <p className="mt-3 inline-block rounded-lg bg-[#F4E8D4] px-4 py-2 font-mono font-bold tracking-widest">
                    {cupon.codigo}
                  </p>

                  <p className="mt-2 text-xs text-[#A46A42]">
                    {cupon.condicion}
                  </p>
                </div>

                <button
                  onClick={() => copiarCupon(cupon.codigo)}
                  className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#542D25] px-5 py-3 font-bold text-white transition hover:bg-[#8B5038]"
                >
                  {cuponCopiado === cupon.codigo ? (
                    <>
                      <Check size={18} />
                      ¡Copiado!
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      Copiar código
                    </>
                  )}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Raspa y gana */}
      <section className="bg-[#F4E8D4] px-5 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E7B85C] text-[#542D25]">
              <Gift size={32} />
            </div>
          </div>

          <span className="text-sm font-bold uppercase tracking-widest text-[#A46A42]">
            ¡La diversión también viene en el empaque!
          </span>

          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            ¡Raspa y gana!
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#80685C]">
            Como parte de la propuesta interactiva de SuperChoc,
            algunos empaques podrán incluir tarjetas sorpresa con
            descuentos, chocolates gratis y otros premios.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-5">
              <span className="text-4xl">🎟️</span>
              <h3 className="mt-3 font-extrabold">Descuentos</h3>
              <p className="mt-1 text-sm text-[#80685C]">
                Beneficios en futuras compras.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <span className="text-4xl">🍫</span>
              <h3 className="mt-3 font-extrabold">Chocolate gratis</h3>
              <p className="mt-1 text-sm text-[#80685C]">
                Posibilidad de ganar otra unidad.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <span className="text-4xl">⭐</span>
              <h3 className="mt-3 font-extrabold">Sorpresas</h3>
              <p className="mt-1 text-sm text-[#80685C]">
                Premios y experiencias especiales.
              </p>
            </div>
          </div>

          <p className="mt-6 text-xs text-[#80685C]">
            Dinámica propuesta, pendiente de implementación y definición
            de sus condiciones.
          </p>
        </div>
      </section>

      {/* Nota informativa */}
      <section className="px-5 py-14">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 rounded-3xl bg-[#542D25] p-8 text-center text-white md:flex-row md:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#E7B85C] text-[#542D25]">
            <Heart size={32} />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold">
              ¡Gracias por elegir SuperChoc!
            </h2>

            <p className="mt-2 text-sm text-[#F5E8D7]">
              Los precios y descuentos mostrados son propuestas
              promocionales. La disponibilidad, vigencia y condiciones
              finales deberán ser confirmadas por el equipo SuperChoc.
              Los cupones y premios están sujetos a implementación.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Promociones
