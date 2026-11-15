
import { useState } from 'react'
import {
  Tag,
  Gift,
  ShoppingBag,
  Copy,
  Check,
  Sparkles,
  Percent,
  Clock
} from 'lucide-react'

const promociones = [
  {
    id: 1,
    etiqueta: 'MÁS POPULAR',
    emoji: '🍫',
    titulo: 'SuperChoc clásico',
    descripcion: 'Disfruta el sabor de nuestro chocolate.',
    precioAnterior: 'S/ 15.00',
    precio: 'S/ 12.00',
    descuento: '20% OFF',
    color: 'bg-[#F4E8D4]'
  },
  {
    id: 2,
    etiqueta: 'AHORRA MÁS',
    emoji: '🍫🍫',
    titulo: 'Dúo SuperChoc',
    descripcion: 'Dos unidades para compartir.',
    precioAnterior: 'S/ 30.00',
    precio: 'S/ 22.00',
    descuento: '27% OFF',
    color: 'bg-[#F8E5D9]'
  },
  {
    id: 3,
    etiqueta: 'PROMOCIÓN ESPECIAL',
    emoji: '🎁',
    titulo: 'Pack familiar',
    descripcion: 'Una opción especial para disfrutar en familia.',
    precioAnterior: 'S/ 60.00',
    precio: 'S/ 45.00',
    descuento: '25% OFF',
    color: 'bg-[#F5EBD1]'
  }
]

const cupones = [
  {
    codigo: 'SUPER10',
    descuento: '10% de descuento',
    descripcion: 'En tu próxima compra.'
  },
  {
    codigo: 'CHOCO15',
    descuento: '15% de descuento',
    descripcion: 'En compras seleccionadas.'
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
      alert(`Tu código de descuento es: ${codigo}`)
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
            ¡Endulza tu día con
            <span className="block text-[#F5D58A]">SuperChoc!</span>
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-base text-[#FFF1D9] md:text-lg">
            Descubre nuestras promociones y disfruta de nuestros productos
            a precios especiales.
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
            Aprovecha nuestras ofertas
          </span>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            Promociones especiales
          </h2>
          <p className="mt-3 text-[#80685C]">
            Encuentra tu presentación favorita y aprovecha los precios
            especiales de SuperChoc.
          </p>
        </div>
      </section>

      {/* Tarjetas de ofertas */}
      <section id="ofertas" className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {promociones.map((promo) => (
            <article
              key={promo.id}
              className="overflow-hidden rounded-3xl border border-[#EADCCB] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`${promo.color} relative flex h-52 items-center justify-center`}>
                <span className="absolute left-4 top-4 rounded-full bg-[#542D25] px-3 py-1 text-xs font-bold text-white">
                  {promo.etiqueta}
                </span>
                <span className="text-7xl" role="img" aria-label="Chocolate">
                  {promo.emoji}
                </span>
                <span className="absolute bottom-4 right-4 rounded-full bg-[#E7B85C] px-3 py-1 text-sm font-extrabold text-[#542D25]">
                  {promo.descuento}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold">{promo.titulo}</h3>
                <p className="mt-2 min-h-12 text-sm text-[#80685C]">
                  {promo.descripcion}
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <span className="text-sm text-gray-400 line-through">
                    {promo.precioAnterior}
                  </span>
                  <span className="text-2xl font-extrabold text-[#9C5B37]">
                    {promo.precio}
                  </span>
                </div>

                <a
                  href="/producto"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#542D25] px-5 py-3 font-bold text-white transition hover:bg-[#8B5038]"
                >
                  <ShoppingBag size={18} />
                  Ver producto
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Cupones */}
      <section className="bg-[#F4E8D4] px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#A46A42]">
              Un regalo para ti
            </span>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
              Cupones de descuento
            </h2>
            <p className="mt-3 text-[#80685C]">
              Copia tu código y disfruta de una oferta especial.
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
                    <Percent size={20} />
                    <span className="text-sm font-bold">CUPÓN ESPECIAL</span>
                  </div>
                  <h3 className="text-2xl font-extrabold">{cupon.descuento}</h3>
                  <p className="mt-1 text-sm text-[#80685C]">
                    {cupon.descripcion}
                  </p>
                  <p className="mt-3 inline-block rounded-lg bg-[#F4E8D4] px-4 py-2 font-mono font-bold tracking-widest">
                    {cupon.codigo}
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
                      Copiar cupón
                    </>
                  )}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Nota informativa */}
      <section className="px-5 py-14">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 rounded-3xl bg-[#542D25] p-8 text-center text-white md:flex-row md:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#E7B85C] text-[#542D25]">
            <Gift size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold">
              ¡No te pierdas nuestras novedades!
            </h2>
            <p className="mt-2 text-sm text-[#F5E8D7]">
              Estas ofertas son ejemplos visuales. Consulta las condiciones,
              disponibilidad y vigencia de cada promoción antes de realizar
              una compra.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Promociones
