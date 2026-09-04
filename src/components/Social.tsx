import { useStaggeredReveal } from "../hooks/useStaggeredReveal";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../data/site";

export default function Social() {
  const ref = useStaggeredReveal<HTMLDivElement>();

  return (
    <section className="border-t border-black/10 py-16 lg:py-20">
      <div ref={ref} className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 text-center lg:px-10">
        <p className="reveal-item text-xl font-bold text-ink sm:text-2xl">Veja mais do nosso trabalho.</p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal-item group inline-flex items-center gap-2.5 rounded-md border border-black/15 px-6 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:border-brand hover:text-brand"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          Visitar Instagram — {INSTAGRAM_HANDLE}
        </a>
      </div>
    </section>
  );
}
