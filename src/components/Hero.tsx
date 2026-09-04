import { ArrowRight } from "lucide-react";
import { useStaggeredReveal } from "../hooks/useStaggeredReveal";
import { WHATSAPP_LINK } from "../data/site";
import SmileMark from "./SmileMark";

export default function Hero() {
  const ref = useStaggeredReveal<HTMLDivElement>({ stepMs: 130 });

  return (
    <section id="topo" className="relative overflow-hidden bg-offwhite pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-10 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="reveal-item text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            JC Odonto • Barueri
          </p>
          <h1 className="reveal-item mt-5 max-w-xl text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Seu sorriso merece cuidado de verdade.
          </h1>
          <p className="reveal-item mt-6 max-w-md text-base leading-relaxed text-muted">
            Atendimento odontológico com cuidado, precisão e uma experiência pensada para você.
          </p>

          <div className="reveal-item mt-9 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-dark hover:-translate-y-0.5"
            >
              Agendar consulta
            </a>
            <a
              href="#servicos"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors duration-200 hover:text-brand"
            >
              Conhecer tratamentos
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="reveal-item flex justify-center lg:justify-end">
          <SmileMark />
        </div>
      </div>
    </section>
  );
}
