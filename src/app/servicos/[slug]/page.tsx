import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import Botao from "@/components/Botao";
import CabecalhoPagina from "@/components/CabecalhoPagina";
import Revelar from "@/components/Revelar";
import { obterServico, servicos } from "@/data/services";

export function generateStaticParams() {
  return servicos.map((servico) => ({ slug: servico.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/servicos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const servico = obterServico(slug);
  if (!servico) return {};

  return { title: servico.titulo, description: servico.resumo };
}

export default async function PaginaServico({
  params,
}: PageProps<"/servicos/[slug]">) {
  const { slug } = await params;
  const servico = obterServico(slug);
  if (!servico) notFound();

  return (
    <>
      <CabecalhoPagina
        etiqueta="Área de actuação"
        titulo={servico.titulo}
        texto={servico.resumo}
        migalhas={[
          { rotulo: "Serviços", href: "/servicos" },
          { rotulo: servico.tituloCurto },
        ]}
      />

      <section className="seccao">
        <div className="contentor grid gap-12 md:grid-cols-[200px_1fr] md:gap-10 lg:grid-cols-[230px_1fr] lg:gap-16">
          {/* ---------- Índice lateral ----------
               Mantém as seis áreas à vista: a página é um capítulo de um
               conjunto, não um documento isolado. */}
          <nav aria-label="Áreas de actuação" className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-etiqueta uppercase text-cinza">Áreas</h2>

            <ul className="mt-4 border-t border-linha">
              {servicos.map((outro) => {
                const actual = outro.slug === servico.slug;
                return (
                  <li key={outro.slug} className="border-b border-linha">
                    <Link
                      href={`/servicos/${outro.slug}`}
                      aria-current={actual ? "page" : undefined}
                      className={`flex items-center gap-3 py-3 text-corpo-s transition-colors ${
                        actual
                          ? "font-semibold text-ciano"
                          : "text-cinza hover:text-tinta"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`size-1.5 shrink-0 rounded-[1px] ${
                          actual ? "bg-ciano" : "bg-linha"
                        }`}
                      />
                      {outro.tituloCurto}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div>
            <Revelar>
              <div className="tessera relative aspect-21/9 overflow-hidden">
                <Image
                  src={servico.imagem}
                  alt=""
                  aria-hidden
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 62vw, 760px"
                  className="object-cover"
                />
              </div>
            </Revelar>

            <Revelar atraso={80}>
              <div className="mt-10 max-w-medida space-y-4 text-corpo text-cinza">
                {servico.descricao.map((paragrafo) => (
                  <p key={paragrafo}>{paragrafo}</p>
                ))}
              </div>
            </Revelar>

            <Revelar atraso={120}>
              <h2 className="mt-12 text-etiqueta uppercase text-cinza">
                O que inclui
              </h2>

              <ul className="mt-5 border-t border-linha">
                {servico.itens.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-b border-linha py-4 text-corpo text-tinta"
                  >
                    <span
                      aria-hidden
                      className="mt-[11px] size-1.5 shrink-0 rounded-[1px] bg-ciano"
                    />
                    <span className="max-w-medida">{item}</span>
                  </li>
                ))}
              </ul>
            </Revelar>

            <Revelar atraso={160}>
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 rounded-cartao bg-nevoa p-8">
                <div className="min-w-[240px] flex-1">
                  <h2 className="text-h4 font-extrabold text-tinta">
                    Precisa de mais informação sobre esta área?
                  </h2>
                  <p className="mt-2 max-w-medida text-corpo-s text-cinza">
                    Indique-nos o que pretende desenvolver e respondemos com uma
                    proposta de abordagem.
                  </p>
                </div>
                <Botao href="/contactos">Falar connosco</Botao>
              </div>
            </Revelar>

            <Revelar atraso={200}>
              <Link
                href="/servicos"
                className="alvo-toque group mt-10 inline-flex items-center gap-2 text-botao uppercase text-tinta transition-colors hover:text-ciano"
              >
                Ver todos os serviços
                <ArrowUpRight
                  size={15}
                  strokeWidth={2.5}
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </Revelar>
          </div>
        </div>
      </section>
    </>
  );
}
