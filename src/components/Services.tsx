import { useStaggeredReveal } from "../hooks/useStaggeredReveal";
import { SERVICES } from "../data/site";

export default function Services() {
  const ref = useStaggeredReveal<HTMLDivElement>();

  return (
    <section id="servicos" className="py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="reveal-item max-w-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Serviços</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Tratamentos oferecidos
          </h2>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-0 border-t border-border sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <div key={s.nome} className="reveal-item flex items-start gap-5 border-b border-border py-7">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-brand text-sm font-bold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-lg font-bold text-ink">{s.nome}</p>
                <p className="mt-1 text-sm text-muted">{s.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
