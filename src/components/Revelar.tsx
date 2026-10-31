"use client";

import { useEffect, useRef, useState } from "react";

type Estado = "pendente" | "oculto" | "visivel";

type Props = {
  children: React.ReactNode;
  /** Atraso da animação, em milissegundos. */
  atraso?: number;
  className?: string;
};

/**
 * Revela o conteúdo quando entra no ecrã.
 *
 * O estado inicial é `pendente`, que não esconde nada: se o JavaScript falhar,
 * se o observador não disparar ou se a hidratação demorar, o conteúdo continua
 * legível. Só depois de montar é que um elemento abaixo da dobra passa a
 * `oculto` e espera a sua vez. A animação está em `globals.css` e é desligada
 * por `prefers-reduced-motion`.
 */
export default function Revelar({ children, atraso = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [estado, setEstado] = useState<Estado>("pendente");

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    const acimaDaDobra =
      elemento.getBoundingClientRect().top < window.innerHeight * 0.9;

    if (acimaDaDobra || typeof IntersectionObserver === "undefined") {
      setEstado("visivel");
      return;
    }

    setEstado("oculto");

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setEstado("visivel");
          observador.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -80px 0px" },
    );

    observador.observe(elemento);

    // Rede de segurança: nada fica invisível por mais do que uns segundos.
    const salvaguarda = setTimeout(() => setEstado("visivel"), 4000);

    return () => {
      observador.disconnect();
      clearTimeout(salvaguarda);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`revelar ${className ?? ""}`}
      data-estado={estado}
      style={atraso ? { animationDelay: `${atraso}ms` } : undefined}
    >
      {children}
    </div>
  );
}
