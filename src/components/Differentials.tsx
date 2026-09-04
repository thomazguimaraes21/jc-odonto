import { useStaggeredReveal } from "../hooks/useStaggeredReveal";

const DIFFERENTIALS = [
  { titulo: "Atendimento humanizado", texto: "Comunicação direta e próxima, do agendamento ao acompanhamento." },
  { titulo: "Contato facilitado", texto: "Agendamento e dúvidas resolvidos direto pelo WhatsApp." },
  { titulo: "Localização acessível", texto: "Consultório na Vila São João, em Barueri." },
];

export default function Differentials() {
  const ref = useStaggeredReveal<HTMLDivElement>();

  return (
    <section id="diferenciais" className="bg-offwhite py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-10">
        <p className="reveal-item text-xs font-semibold uppercase tracking-[0.2em] text-brand">Diferenciais</p>
        <h2 className="reveal-item mt-4 max-w-lg text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
          Por que a JC Odonto
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {DIFFERENTIALS.map((d, i) => (
            <div key={d.titulo} className="reveal-item">
              <span className="text-3xl font-extrabold text-brand">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-4 text-lg font-bold text-ink">{d.titulo}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
