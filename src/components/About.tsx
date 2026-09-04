import { useStaggeredReveal } from "../hooks/useStaggeredReveal";
import dentista from "../assets/dentista.jpg";

export default function About() {
  const ref = useStaggeredReveal<HTMLDivElement>();

  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-10 grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="reveal-item">
          <img
            src={dentista}
            alt="Atendimento na JC Odonto"
            className="w-full rounded-md object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div>
          <p className="reveal-item text-xs font-semibold uppercase tracking-[0.2em] text-brand">A Clínica</p>
          <h2 className="reveal-item mt-4 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            JC Odonto
          </h2>
          <div className="reveal-item mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              A JC Odonto atende na Vila São João, em Barueri, com foco em oferecer um
              atendimento odontológico próximo e organizado, do primeiro contato ao
              acompanhamento do tratamento.
            </p>
            <p>O contato é feito diretamente pelo WhatsApp, sem burocracia.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
