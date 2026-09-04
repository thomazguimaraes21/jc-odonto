import { useEffect, useRef } from "react";

interface Options {
  selector?: string;
  stepMs?: number;
  threshold?: number;
}

/**
 * Observa uma seção e, quando ela entra na viewport, revela seus elementos
 * filhos (`.reveal-item`) em sequência, uma vez só. Sem IntersectionObserver
 * disponível, tudo já está visível por padrão (ver .reveal-item em index.css).
 */
export function useStaggeredReveal<T extends HTMLElement>({
  selector = ".reveal-item",
  stepMs = 110,
  threshold = 0.15,
}: Options = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!("IntersectionObserver" in window)) return;

    const items = Array.from(node.querySelectorAll<HTMLElement>(selector));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          items.forEach((el, i) => {
            el.style.transitionDelay = `${i * stepMs}ms`;
            el.classList.add("is-visible");
          });
          observer.disconnect();
        });
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [selector, stepMs, threshold]);

  return ref;
}
