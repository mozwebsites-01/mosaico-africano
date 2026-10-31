import type { Metadata } from "next";
import Image from "next/image";

import CabecalhoPagina from "@/components/CabecalhoPagina";
import ChamadaAccao from "@/components/ChamadaAccao";
import Revelar from "@/components/Revelar";
import Tessera from "@/components/Tessera";

export const metadata: Metadata = {
  title: "Parcerias",
  description:
    "Colaboração com instituições públicas e privadas, empresas e organizações no desenvolvimento de iniciativas de educação, formação e capacitação.",
};

/** Perfis de parceiro e o que, em concreto, se desenvolve com cada um. */
const PERFIS = [
  {
    perfil: "Instituições públicas",
    contributo:
      "Programas de capacitação, projectos educativos e iniciativas de desenvolvimento do capital humano.",
  },
  {
    perfil: "Empresas",
    contributo:
      "Formação profissional à medida, actualização técnica e desenvolvimento de competências das equipas.",
  },
  {
    perfil: "Instituições de ensino",
    contributo:
      "Assessoria na organização e gestão, desenvolvimento de conteúdos e programas conjuntos.",
  },
  {
    perfil: "Organizações da sociedade civil",
    contributo:
      "Capacitação comunitária e projectos de educação orientados para públicos específicos.",
  },
];

export default function PaginaParcerias() {
  return (
    <>
      <CabecalhoPagina
        etiqueta="Parcerias"
        titulo="Criar parcerias. Multiplicar"
        destaque="oportunidades."
        migalhas={[{ rotulo: "Parcerias" }]}
      />

      {/* ---------- Abertura ----------
           Duas fotografias de alturas diferentes com a frase entre elas: o
           par imagem/texto convencional dá lugar a uma composição assimétrica. */}
      <section className="seccao">
        <div className="contentor">
          <Revelar>
            <div className="grid gap-4 md:grid-cols-5">
              <div className="tessera relative aspect-4/3 overflow-hidden md:col-span-3 sm:aspect-3/2">
                <Image
                  src="/images/parcerias-reuniao.webp"
                  alt="Equipa reunida a ouvir a intervenção de uma colega"
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-4/3 overflow-hidden rounded-cartao md:col-span-2 sm:aspect-auto">
                <Image
                  src="/images/parcerias-apresentacao.webp"
                  alt="Apresentação de um plano de trabalho numa sala de reuniões"
                  fill
                  sizes="(max-width: 767px) 100vw, 38vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Revelar>

          <Revelar atraso={80}>
            <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-10 lg:gap-16">
              <h2 className="text-declaracao font-bold text-tinta">
                A colaboração alarga o alcance de{" "}
                <span className="text-ciano">cada iniciativa.</span>
              </h2>

              <div className="max-w-medida space-y-4 text-corpo text-cinza">
                <p>
                  Muitos dos desafios da educação e da formação em Moçambique
                  exigem a articulação de várias partes — quem conhece o terreno,
                  quem detém a capacidade técnica e quem assegura os meios.
                </p>
                <p>
                  A MOSAICO AFRICANO, SA procura construir essas ligações, pondo
                  a sua experiência em concepção e gestão de programas ao serviço
                  de projectos conjuntos.
                </p>
              </div>
            </div>
          </Revelar>
        </div>
      </section>

      {/* ---------- Perfis ----------
           Registo de duas colunas: o perfil e o que se desenvolve com ele.
           A relação entre os dois é a informação — não cabe em cartões soltos. */}
      <section className="seccao bg-nevoa">
        <div className="contentor">
          <Revelar>
            <p className="flex items-center gap-3 text-etiqueta uppercase text-cinza">
              <Tessera indice={1} />
              Com quem trabalhamos
            </p>
          </Revelar>

          <Revelar atraso={80}>
            <dl className="mt-8 border-t border-tinta/12">
              {PERFIS.map((item) => (
                <div
                  key={item.perfil}
                  className="grid gap-x-10 gap-y-1 border-b border-tinta/12 py-5 md:grid-cols-[minmax(200px,0.75fr)_1.6fr]"
                >
                  <dt className="text-h4 font-extrabold text-tinta">
                    {item.perfil}
                  </dt>
                  <dd className="max-w-medida text-corpo-s text-cinza">
                    {item.contributo}
                  </dd>
                </div>
              ))}
            </dl>
          </Revelar>

          <Revelar atraso={120}>
            <p className="mt-8 max-w-medida text-corpo-s text-cinza">
              Cada parceria é definida caso a caso, em função dos objectivos, do
              âmbito e das autorizações aplicáveis à actividade em causa.
            </p>
          </Revelar>
        </div>
      </section>

      {/* ---------- Faixa de encerramento ---------- */}
      <section className="seccao relative isolate overflow-hidden bg-tinta">
        <Image
          src="/images/sobre-comunidade.webp"
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

        <Revelar className="relative contentor">
          <h2 className="max-w-3xl text-declaracao font-bold text-white">
            Sozinhos chegamos a um projecto.{" "}
            <span className="text-ciano">Juntos, a uma geração.</span>
          </h2>
        </Revelar>
      </section>

      <ChamadaAccao
        titulo="Tem uma iniciativa que faz sentido"
        destaque="desenvolvermos em conjunto?"
        texto="Conte-nos o âmbito e os objectivos. Respondemos com uma proposta de colaboração."
        rotuloBotao="Propor uma parceria"
      />
    </>
  );
}
