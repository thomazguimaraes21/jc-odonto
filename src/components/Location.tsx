import { MapPin, MessageCircle } from "lucide-react";
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

  return (
    <section id="localizacao" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div ref={ref} className="grid gap-14 lg:grid-cols-2">
          <div className="reveal-item">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Localização</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">Onde estamos</h2>

            <address className="mt-6 not-italic text-base leading-relaxed text-muted">
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>

            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-ink hover:text-brand">
                <MessageCircle className="h-4 w-4 text-brand" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-ink hover:text-brand">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 text-brand" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                {INSTAGRAM_HANDLE}
              </a>
            </div>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-dark hover:-translate-y-0.5"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Como chegar
            </a>
          </div>

          <div className="reveal-item">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Horários</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">Atendimento</h2>

            <dl className="mt-8 divide-y divide-border border-t border-b border-border">
              {HOURS.map((h) => (
                <div key={h.dia} className="flex items-center justify-between py-3.5">
                  <dt className="text-sm font-medium text-ink">{h.dia}</dt>
                  <dd className={`text-sm ${h.horario === "Fechado" ? "text-muted-2" : "font-semibold text-brand"}`}>
                    {h.horario}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
