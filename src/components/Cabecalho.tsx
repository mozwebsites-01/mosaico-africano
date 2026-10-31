"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MapPin, Mail, Menu, Phone, X } from "lucide-react";

import Logo from "./Logo";
import { empresa, navegacao } from "@/data/site";

export default function Cabecalho() {
  const [aberto, setAberto] = useState(false);
  const [comScroll, setComScroll] = useState(false);
  const caminho = usePathname();

  useEffect(() => {
    const aoRolar = () => setComScroll(window.scrollY > 12);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // Impede o deslocamento do fundo enquanto o menu móvel está aberto.
  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  const activo = (href: string) =>
    href === "/" ? caminho === "/" : caminho.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Barra institucional */}
      <div className="hidden bg-tinta text-white/70 lg:block">
        <div className="contentor flex h-11 items-center justify-between text-meta">
          <div className="flex items-center gap-7">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-ciano" aria-hidden />
              {empresa.morada.resumida}
            </span>
            {empresa.email && (
              <a
                href={`mailto:${empresa.email}`}
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail size={14} className="text-ciano" aria-hidden />
                {empresa.email}
              </a>
            )}
            {empresa.telefone && (
              <a
                href={`tel:${empresa.telefone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone size={14} className="text-ciano" aria-hidden />
                {empresa.telefone}
              </a>
            )}
          </div>

          <p className="text-white/50">NUEL {empresa.registo}</p>
        </div>
      </div>

      {/* Cabeçalho principal */}
      <div
        className={`bg-white transition-shadow duration-300 ${
          comScroll ? "shadow-[var(--sombra-cabecalho)]" : "border-b border-linha"
        }`}
      >
        <div className="contentor flex h-[92px] items-center gap-6">
          <Link href="/" aria-label="Mosaico Africano, SA — página inicial">
            <Logo altura={60} prioridade />
          </Link>

          <nav aria-label="Navegação principal" className="ml-auto hidden lg:block">
            <ul className="flex items-center gap-1">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={activo(item.href) ? "page" : undefined}
                    className={`relative block px-4 py-2 text-corpo-s font-medium transition-colors ${
                      activo(item.href)
                        ? "text-ciano"
                        : "text-tinta hover:text-ciano"
                    }`}
                  >
                    {item.rotulo}
                    {activo(item.href) && (
                      <span
                        aria-hidden
                        className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-ciano"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/contactos"
            className="hidden h-[46px] items-center gap-2 rounded-lg bg-ciano px-5 text-botao uppercase text-white transition-colors hover:bg-ciano-fundo lg:inline-flex"
          >
            Fale connosco
            <ArrowUpRight size={15} strokeWidth={2.5} aria-hidden />
          </Link>

          <button
            type="button"
            onClick={() => setAberto(true)}
            aria-expanded={aberto}
            aria-controls="menu-movel"
            className="ml-auto inline-flex size-11 items-center justify-center rounded-lg border border-linha text-tinta lg:hidden"
          >
            <span className="sr-only">Abrir menu</span>
            <Menu size={20} aria-hidden />
          </button>
        </div>
      </div>

      {/* Menu móvel */}
      {aberto && (
        <div
          id="menu-movel"
          className="fixed inset-0 top-0 z-50 flex flex-col bg-white lg:hidden"
        >
          <div className="flex h-[92px] shrink-0 items-center justify-between border-b border-linha px-6">
            <Logo altura={54} />
            <button
              type="button"
              onClick={() => setAberto(false)}
              className="inline-flex size-11 items-center justify-center rounded-lg border border-linha"
            >
              <span className="sr-only">Fechar menu</span>
              <X size={20} aria-hidden />
            </button>
          </div>

          <nav aria-label="Navegação principal" className="flex-1 overflow-y-auto px-6 py-6">
            <ul className="flex flex-col">
              {navegacao.map((item) => (
                <li key={item.href} className="border-b border-linha/70">
                  <Link
                    href={item.href}
                    onClick={() => setAberto(false)}
                    aria-current={activo(item.href) ? "page" : undefined}
                    className={`block py-4 text-h4 font-extrabold ${
                      activo(item.href) ? "text-ciano" : "text-tinta"
                    }`}
                  >
                    {item.rotulo}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contactos"
              onClick={() => setAberto(false)}
              className="mt-8 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-ciano text-botao uppercase text-white"
            >
              Fale connosco
              <ArrowUpRight size={16} strokeWidth={2.5} aria-hidden />
            </Link>

            <div className="mt-8 space-y-2 text-corpo-s text-cinza">
              <p className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-ciano" aria-hidden />
                {empresa.morada.resumida}
              </p>
              {empresa.email && (
                <p className="flex items-center gap-2">
                  <Mail size={15} className="text-ciano" aria-hidden />
                  {empresa.email}
                </p>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
