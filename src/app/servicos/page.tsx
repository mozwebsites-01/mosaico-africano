import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import CabecalhoPagina from "@/components/CabecalhoPagina";
import ChamadaAccao from "@/components/ChamadaAccao";
import { servicos } from "@/data/services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "As seis áreas do objecto social: educação e ensino, formação profissional, consultoria educacional, cursos e eventos, projectos educativos e gestão de participações.",
};

export default function PaginaServicos() {
  return (
    <>
      <CabecalhoPagina
        etiqueta="Os nossos serviços"
        titulo="Seis áreas de"
        destaque="actuação."
        texto="Áreas definidas pelo objecto social da sociedade, tal como consta do perfil institucional."
        migalhas={[{ rotulo: "Serviços" }]}
      />

      {/* ---------- As seis áreas ----------
           Cada área é um cartão com fotografia própria. A grelha é irregular:
           a primeira peça de cada fila ocupa duas colunas, pelo que a leitura
           avança em mosaico em vez de uma grelha uniforme de seis cartões. */}
      <section className="seccao">
        <ul className="contentor grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico, i) => {
            const largo = i % 3 === 0;

            return (
              <li key={servico.slug} className={largo ? "lg:col-span-2" : ""}>
                <Link
                  href={`/servicos/${servico.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-cartao border border-linha transition-colors hover:border-tinta"
                >
                  <div
                    className={`relative overflow-hidden ${
                      largo ? "aspect-16/9" : "aspect-4/3"
                    }`}
                  >
                    <Image
                      src={servico.imagem}
                      alt=""
                      aria-hidden
                      fill
                      sizes={largo ? "(max-width: 1024px) 100vw, 820px" : "(max-width: 1024px) 100vw, 400px"}
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6 lg:p-7">
                    <h2 className="text-h4 font-extrabold text-tinta">
                      {servico.titulo}
                    </h2>
                    <p className="mt-3 max-w-medida flex-1 text-corpo-s text-cinza">
                      {servico.resumo}
                    </p>

                    <span className="alvo-toque mt-6 inline-flex items-center gap-2 text-botao uppercase text-ciano">
                      Ver serviço
                      <ArrowUpRight
                        size={15}
                        strokeWidth={2.5}
                        aria-hidden
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <ChamadaAccao />
    </>
  );
}
