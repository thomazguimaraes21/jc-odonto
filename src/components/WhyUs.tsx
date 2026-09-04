import { useStaggeredReveal } from "../hooks/useStaggeredReveal";
import { PHONE_DISPLAY } from "../data/site";

const INFO_POINTS = [
  { label: "Atendimento", lines: ["Segunda a sexta", "08:30 — 18:00"] },
  { label: "Sábado", lines: ["09:00 — 14:00"] },
  { label: "Localização", lines: ["Vila São João", "Barueri — SP"] },
  { label: "Contato", lines: [PHONE_DISPLAY] },
];

export default function WhyUs() {
  const ref = useStaggeredReveal<HTMLDivElement>();

  return (
    <section id="clinica" className="border-t border-black/10 py-24 lg:py-36">
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <h2 className="reveal-item text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Odontologia com
            <br />
            atenção em cada
            <br />
            <span className="text-brand">detalhe.</span>
          </h2>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 self-start sm:grid-cols-4 lg:grid-cols-2">
            {INFO_POINTS.map((point) => (
              <div key={point.label} className="reveal-item">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">{point.label}</p>
                <div className="mt-3 space-y-0.5">
                  {point.lines.map((line) => (
                    <p key={line} className="text-base font-medium text-ink">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
