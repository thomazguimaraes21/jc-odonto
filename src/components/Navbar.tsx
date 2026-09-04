import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { NAV_LINKS, WHATSAPP_LINK } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(23,23,23,0.08)]" : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-10 h-20 flex items-center justify-between">
          <a href="#topo" className="flex items-center gap-2.5" aria-label="JC Odonto, página inicial">
            <img src={logo} alt="JC Odonto" className="h-11 w-11" />
            <span className="font-bold text-lg tracking-tight text-ink">JC Odonto</span>
          </a>

          <nav className="hidden lg:flex items-center gap-9" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-colors duration-200 hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-brand px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-brand-dark hover:-translate-y-0.5"
            >
              Agendar consulta
            </a>
            <button
              type="button"
              aria-label="Abrir menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-black/15 text-ink"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] bg-white flex flex-col px-6 pt-6 pb-10 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between">
          <img src={logo} alt="JC Odonto" className="h-10 w-10" />
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-black/15 text-ink"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-6" aria-label="Navegação mobile">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-3xl font-bold text-ink transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transitionDelay: open ? `${i * 60}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(12px)",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="mt-auto inline-flex items-center justify-center rounded-md bg-brand px-6 py-4 text-sm font-semibold text-white"
        >
          Agendar consulta
        </a>
      </div>
    </>
  );
}
