import { useStaggeredReveal } from "../hooks/useStaggeredReveal";
import {
  ADDRESS_LINES,
  HOURS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_LINK,
  PHONE_DISPLAY,
  WHATSAPP_LINK,
} from "../data/site";

export default function Location() {
  const ref = useStaggeredReveal<HTMLDivElement>();
  const refHours = useStaggeredReveal<HTMLDivElement>();

  return (
    <section id="localizacao" className="border-t border-black/10 py-24 lg:py-36">
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="reveal-item">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              <span className="h-px w-8 bg-brand" />
              Localização
            </p>

            <address className="mt-6 not-italic text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl">
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>

            <div className="mt-8 flex flex-col gap-2.5 text-sm">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-medium text-ink hover:text-brand">
                WhatsApp — {PHONE_DISPLAY}
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-ink hover:text-brand">
                Instagram — {INSTAGRAM_HANDLE}
              </a>
            </div>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-md bg-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-black"
            >
              Como chegar
            </a>
          </div>

          <div className="reveal-item">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-black/10 bg-offwhite">
              <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <path d="M0 90 H400" stroke="#17171710" strokeWidth="1" />
                <path d="M0 180 H400" stroke="#17171710" strokeWidth="1" />
                <path d="M110 0 V300" stroke="#17171710" strokeWidth="1" />
                <path d="M280 0 V300" stroke="#17171710" strokeWidth="1" />
                <path d="M40 260 C 120 200, 160 120, 200 150 S 320 60, 370 40" stroke="#0077B6" strokeWidth="2" fill="none" strokeLinecap="round" />
                <circle cx="200" cy="150" r="7" fill="#0077B6" />
                <circle cx="200" cy="150" r="14" stroke="#0077B6" strokeWidth="1.5" fill="none" opacity="0.5" />
              </svg>
              <span className="absolute bottom-4 left-4 text-[11px] font-semibold uppercase tracking-widest text-muted-2">
                Barueri — SP
              </span>
            </div>
          </div>
        </div>

        <div ref={refHours} className="mt-20 border-t border-black/10 pt-14 lg:mt-28">
          <p className="reveal-item text-xs font-semibold uppercase tracking-[0.25em] text-brand">Horários</p>
          <h3 className="reveal-item mt-4 text-2xl font-black text-ink sm:text-3xl">Atendimento semanal</h3>

          <dl className="mt-8 grid gap-x-10 border-t border-black/10 sm:grid-cols-2">
            {HOURS.map((h) => (
              <div key={h.dia} className="reveal-item flex items-center justify-between border-b border-black/10 py-4">
                <dt className="text-sm font-medium text-ink">{h.dia}</dt>
                <dd className={`text-sm ${h.horario === "Fechado" ? "text-muted-2" : "font-semibold text-brand"}`}>
                  {h.horario}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
