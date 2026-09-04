import { useStaggeredReveal } from "../hooks/useStaggeredReveal";
import { WHATSAPP_LINK } from "../data/site";
import SmileMark from "./SmileMark";

export default function Hero() {
  const ref = useStaggeredReveal<HTMLDivElement>({ stepMs: 140 });

  return (
    <section id="topo" className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-44 lg:pb-24">
      {/* Linhas-guia editoriais, discretas */}
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-full lg:block" aria-hidden="true">
        <div className="mx-auto h-full max-w-7xl px-10">
          <div className="h-full border-x border-black/[0.06]" />
        </div>
      </div>

      <div ref={ref} className="relative">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-10">
          <div>
            <p className="reveal-item flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              <span className="h-px w-8 bg-brand" />
              JC Odonto — Barueri, SP
            </p>

            <h1 className="reveal-item mt-7 text-[2.75rem] font-black leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Seu sorriso
              <br />
              merece cuidado
              <br />
              <span className="text-brand">de verdade.</span>
            </h1>

            <p className="reveal-item mt-8 max-w-sm text-base leading-relaxed text-muted">
              Atendimento odontológico com cuidado, precisão e uma experiência pensada para você.
            </p>

            <div className="reveal-item mt-10 flex flex-wrap items-center gap-5">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-brand px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-brand-dark hover:-translate-y-0.5"
              >
                Agendar consulta
              </a>
              <a
                href="#servicos"
                className="text-sm font-semibold text-ink underline decoration-black/20 decoration-1 underline-offset-4 transition-colors duration-200 hover:text-brand hover:decoration-brand"
              >
                Conhecer tratamentos
              </a>
            </div>
          </div>

          <div className="reveal-item flex justify-center lg:justify-end">
            <SmileMark />
          </div>
        </div>

        <div className="reveal-item relative mt-16 hidden justify-center lg:mt-20 lg:flex">
          <div className="scroll-cue flex flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-2">
            <span>Explore</span>
            <span className="block h-8 w-px bg-black/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
