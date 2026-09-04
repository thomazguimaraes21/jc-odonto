import logo from "../assets/logo.png";
import {
  ADDRESS_LINES,
  HOURS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV_LINKS,
  PHONE_DISPLAY,
  WHATSAPP_LINK,
} from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="flex flex-col gap-3">
            <img src={logo} alt="JC Odonto" className="h-11 w-11" />
            <p className="font-bold text-ink">JC Odonto</p>
            <p className="text-sm text-muted">Barueri, SP</p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Navegação</p>
            <div className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-muted hover:text-brand">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Horários</p>
            {/* HOURS segue a ordem fixa Segunda→Domingo definida em data/site.ts */}
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <div className="flex justify-between gap-4 text-muted">
                <span>Segunda – Sexta</span>
                <span className="font-medium text-ink">{HOURS[0].horario}</span>
              </div>
              <div className="flex justify-between gap-4 text-muted">
                <span>Sábado</span>
                <span className="font-medium text-ink">{HOURS[5].horario}</span>
              </div>
              <div className="flex justify-between gap-4 text-muted">
                <span>Domingo</span>
                <span className="text-muted-2">{HOURS[6].horario}</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Contato</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-muted">
              <address className="not-italic">
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                {PHONE_DISPLAY}
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-border pt-8 text-xs text-muted-2 sm:flex-row sm:justify-between">
          <span>&copy; {year} JC Odonto</span>
          <a href="/privacidade.html" className="hover:text-brand">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
