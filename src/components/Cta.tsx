import { MessageCircle } from "lucide-react";
import { useStaggeredReveal } from "../hooks/useStaggeredReveal";
import { WHATSAPP_LINK } from "../data/site";

export default function Cta() {
  const ref = useStaggeredReveal<HTMLDivElement>();

  return (
    <section id="contato" className="bg-ink py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-3xl px-5 text-center lg:px-10">
        <h2 className="reveal-item text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Seu sorriso merece atenção aos detalhes.
        </h2>
        <p className="reveal-item mt-5 text-base text-white/70">
          Fale agora pelo WhatsApp e agende sua consulta na JC Odonto.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal-item mt-9 inline-flex items-center gap-2 rounded-md bg-brand px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-dark hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Falar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
