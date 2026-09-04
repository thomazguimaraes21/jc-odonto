import { useStaggeredReveal } from "../hooks/useStaggeredReveal";
import { SERVICES } from "../data/site";

export default function Services() {
  const ref = useStaggeredReveal<HTMLDivElement>();

  return (
    <section id="servicos" className="py-24 lg:py-36">
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="reveal-item grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 className="text-4xl font-black leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Tratamentos para
            <br />
            cuidar do seu sorriso.
          </h2>
          <p className="max-w-sm text-sm text-muted lg:justify-self-end lg:text-right">
            Consulte disponibilidade e valores diretamente pelo WhatsApp.
          </p>
        </div>

        <div className="mt-16 border-t border-black/10">
          {SERVICES.map((s, i) => (
            <a
              key={s.nome}
              href={`https://wa.me/5511971313428?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${s.nome.toLowerCase()}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-line-trigger reveal-item group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-black/10 py-6 transition-colors duration-300 sm:grid-cols-[4rem_1fr_auto] lg:py-8"
            >
              <span className="font-mono text-sm text-muted-2 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 group-hover:text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className="truncate text-2xl font-bold text-ink transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 group-hover:text-brand sm:text-3xl lg:text-4xl">
                  {s.nome}
                </p>
                <p className="mt-1 hidden text-sm text-muted sm:block">{s.descricao}</p>
                <div className="hover-line mt-3" />
              </div>
              <span className="hidden text-xs font-semibold uppercase tracking-widest text-muted-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:inline">
                Perguntar
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
