import type { Metadata } from "next";
import Image from "next/image";

import CabecalhoPagina from "@/components/CabecalhoPagina";
import ChamadaAccao from "@/components/ChamadaAccao";
import MosaicoPrincipios from "@/components/MosaicoPrincipios";
import Revelar from "@/components/Revelar";
import Tessera from "@/components/Tessera";
import { servicos } from "@/data/services";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "A MOSAICO AFRICANO, SA é uma sociedade anónima moçambicana vocacionada para a educação, o ensino e a formação profissional.",
};

/** Primitivas partilhadas por todo o site — ver `globals.css`. */
const CONTENTOR = "contentor";
const GRELHA = "grelha";

export default function PaginaSobreNos() {
  return (
    <>
      <CabecalhoPagina
        etiqueta="Quem somos"
        titulo="Conheça a"
        destaque="MOSAICO AFRICANO, SA"
        migalhas={[{ rotulo: "Sobre Nós" }]}
      />

      {/* ---------- Abertura ---------- */}
      <section className={`seccao-t ${CONTENTOR}`}>
        <Revelar>
          <div className="relative aspect-16/9 overflow-hidden rounded-cartao lg:aspect-21/9">
            <Image
              src="/images/sobre-formatura.webp"
              alt="Grupo de jovens licenciadas em traje académico no campus"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Revelar>
      </section>

      {/* ---------- Declaração e enquadramento ----------
           A declaração abre a secção em oito colunas; o corpo segue em seis,
           limitado pela medida de leitura, com o retrato centrado ao lado. */}
      <section className={`seccao ${CONTENTOR}`}>
        <Revelar>
          <div className={GRELHA}>
            <p className="text-declaracao font-bold text-tinta md:col-span-8">
              Acreditamos que a educação é um instrumento fundamental para o{" "}
              <span className="text-ciano">
                desenvolvimento sustentável, a inovação e a transformação
                socioeconómica
              </span>{" "}
              de Moçambique e de África.
            </p>
          </div>
        </Revelar>

        <Revelar atraso={80}>
          <div
            className={`${GRELHA} mt-12 items-center gap-y-10 border-t border-linha pt-12`}
          >
            <div className="max-w-medida space-y-4 text-corpo text-cinza md:col-span-6">
              <p>
                A MOSAICO AFRICANO, SA é uma sociedade anónima constituída em
                Moçambique, vocacionada para a gestão de participações e o
                desenvolvimento de actividades nos sectores da educação, ensino e
                formação profissional.
              </p>
              <p>
                A empresa tem como propósito contribuir para o desenvolvimento do
                capital humano, promovendo o acesso à educação, a aquisição de
                conhecimentos e o desenvolvimento de competências técnicas e
                profissionais.
              </p>
              <p>
                Através da criação, organização, gestão e exploração de
                estabelecimentos de ensino, bem como da implementação de programas
                de formação e capacitação, pretende responder às necessidades de
                estudantes, profissionais, instituições e organizações.
              </p>
            </div>

            <figure className="m-0 md:col-span-5 md:col-start-8">
              <div className="relative aspect-square overflow-hidden rounded-cartao">
                <Image
                  src="/images/sobre-retrato.webp"
                  alt="Profissional da educação em ambiente de trabalho"
                  fill
                  sizes="(max-width: 767px) 100vw, 38vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-meta text-cinza">
                Desenvolver competências é desenvolver pessoas
              </figcaption>
            </figure>
          </div>
        </Revelar>
      </section>

      {/* ---------- Par de fotografias ---------- */}
      <section className={`seccao-b ${CONTENTOR}`}>
        <Revelar>
          <div className={`${GRELHA} gap-y-6`}>
            {[
              {
                src: "/images/sobre-estudo.webp",
                alt: "Grupo de estudantes a trabalhar em conjunto",
                legenda: "Aprender em conjunto",
              },
              {
                src: "/images/sobre-comunidade.webp",
                alt: "Grupo de voluntários reunidos num projecto comunitário",
                legenda: "Capacitar comunidades",
              },
            ].map((foto) => (
              <figure key={foto.src} className="m-0 md:col-span-6">
                <div className="relative aspect-3/2 overflow-hidden rounded-cartao">
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 46vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-meta text-cinza">
                  {foto.legenda}
                </figcaption>
              </figure>
            ))}
          </div>
        </Revelar>
      </section>

      {/* ---------- Princípios ---------- */}
      <section className="seccao bg-nevoa">
        <div className={CONTENTOR}>
          <Revelar>
            <p className="flex items-center gap-3 text-etiqueta uppercase text-cinza">
              <Tessera indice={1} />O que nos orienta
            </p>
          </Revelar>

          <Revelar atraso={80} className="mt-10">
            <MosaicoPrincipios />
          </Revelar>
        </div>
      </section>

      {/* ---------- Onde actuamos ---------- */}
      <section className={`seccao ${CONTENTOR}`}>
        <Revelar>
          <p className="flex items-center gap-3 text-etiqueta uppercase text-cinza">
            <Tessera indice={2} />
            Onde actuamos
          </p>
        </Revelar>

        <Revelar atraso={80}>
          <ul className={`${GRELHA} mt-8 border-t border-linha`}>
            {servicos.map((servico) => (
              <li
                key={servico.slug}
                className="flex items-center gap-4 border-b border-linha py-4 md:col-span-6"
              >
                <span
                  aria-hidden
                  className="size-1.5 shrink-0 rounded-[1px] bg-ciano"
                />
                <span className="text-corpo text-tinta">{servico.titulo}</span>
              </li>
            ))}
          </ul>
        </Revelar>
      </section>

      {/* ---------- Compromisso ---------- */}
      <section className="seccao relative isolate overflow-hidden bg-tinta">
        <Image
          src="/images/compromisso.webp"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-tinta via-tinta/85 to-tinta/40"
        />

        <Revelar className={`relative ${CONTENTOR}`}>
          <div className={GRELHA}>
            <div className="md:col-span-9">
              <h2 className="text-declaracao font-bold text-white">
                Construindo oportunidades, desenvolvendo competências e{" "}
                <span className="text-ciano">transformando o futuro.</span>
              </h2>

              <p className="mt-7 max-w-medida text-corpo text-white/70">
                Investir na educação e no desenvolvimento de competências é
                investir no futuro. A MOSAICO AFRICANO, SA procura promover
                oportunidades de aprendizagem e fortalecer capacidades
                profissionais através de iniciativas orientadas para o
                desenvolvimento humano e social.
              </p>
            </div>
          </div>
        </Revelar>
      </section>

      <ChamadaAccao />
    </>
  );
}
