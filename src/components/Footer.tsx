import logo from "../assets/logo.png";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, WHATSAPP_LINK } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <img src={logo} alt="JC Odonto" className="h-10 w-10" />
          <div>
            <p className="font-bold text-ink">JC Odonto</p>
            <p className="text-xs text-muted-2">Barueri, SP</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 text-xs text-muted sm:items-end">
          <div className="flex items-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
              {PHONE_DISPLAY}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
              {INSTAGRAM_HANDLE}
            </a>
            <a href="/privacidade.html" className="hover:text-brand">
              Política de Privacidade
            </a>
          </div>
          <span>&copy; {year} JC Odonto</span>
        </div>
      </div>
    </footer>
  );
}
