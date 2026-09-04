import { useStaggeredReveal } from "../hooks/useStaggeredReveal";

export default function BigWord() {
  const ref = useStaggeredReveal<HTMLDivElement>();

  return (
    <section className="overflow-hidden bg-brand py-20 lg:py-28">
      <div ref={ref} className="relative">
        <p className="reveal-item select-none whitespace-nowrap px-5 text-center text-[22vw] font-black leading-none tracking-tight text-white/10 lg:text-[16vw]">
          CUIDADO
        </p>
        <div className="reveal-item mx-auto -mt-8 max-w-2xl px-5 text-center sm:-mt-12 lg:-mt-16">
          <p className="text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl">
            Um cuidado que começa antes mesmo da consulta.
          </p>
        </div>
      </div>
    </section>
  );
}
