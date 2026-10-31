import type { Metadata } from "next";
import Image from "next/image";

import Botao from "@/components/Botao";
import CabecalhoPagina from "@/components/CabecalhoPagina";
import ChamadaAccao from "@/components/ChamadaAccao";
import Revelar from "@/components/Revelar";
import Tessera from "@/components/Tessera";
import { obterServico } from "@/data/services";

export const metadata: Metadata = {
  title: "Projectos Educativos",
  description:
    "Como concebemos e implementamos projectos de educação: diagnóstico, concepção, implementação e acompanhamento.",
};

/**
 * Etapas do método. A numeração é legítima aqui — ao contrário das outras
 * páginas, estas quatro fases acontecem mesmo por esta ordem.
 */
const ETAPAS = [
  {
    titulo: "Diagnóstico",
    texto:
      "Identificação das necessidades de aprendizagem e do contexto em que o projecto vai actuar.",
    saida: "Levantamento de necessidades",
  },
  {
    titulo: "Concepção",
    texto:
      "Desenho do programa, dos conteúdos e do modelo pedagógico adequado aos objectivos definidos.",
    saida: "Programa e materiais",
  },
  {
    titulo: "Implementação",
    texto:
      "Execução no terreno, em articulação com as instituições e comunidades envolvidas.",
    saida: "Projecto em curso",
  },
  {
    titulo: "Acompanhamento",
    texto:
      "Monitorização dos resultados e ajuste do programa ao longo da sua execução.",
    saida: "Relatório e ajustes",
  },
];

export default function PaginaProjectos() {
  const servico = obterServico("projectos-educativos")!;

  return (
    <>
      <CabecalhoPagina
        etiqueta="Projectos"
        titulo="Projectos que chegam às pessoas e às"
        destaque="comunidades."
        texto="Concebemos e implementamos projectos de educação e formação, frequentemente em articulação com instituições públicas e privadas."
        migalhas={[{ rotulo: "Projectos" }]}
      />

      {/* ---------- Método ----------
           A sequência é o conteúdo principal desta página, por isso abre com
           ela em vez do habitual par imagem/texto. */}
      <section className="seccao">
        <div className="contentor">
          <Revelar>
            <p className="flex items-center gap-3 text-etiqueta uppercase text-cinza">
              <Tessera indice={0} />
              Como trabalhamos
            </p>
            <h2 className="mt-5 max-w-3xl text-h2 text-tinta">
              Do diagnóstico ao{" "}
              <span className="text-ciano">acompanhamento.</span>
            </h2>
          </Revelar>

          <Revelar atraso={80}>
            <ol className="mt-12 border-t border-linha">
              {ETAPAS.map((etapa, i) => (
                <li
                  key={etapa.titulo}
                  className="grid gap-x-8 gap-y-2 border-b border-linha py-6 sm:grid-cols-[48px_1fr] md:grid-cols-[48px_minmax(150px,0.65fr)_1.5fr_auto] md:gap-y-3 md:py-7"
                >
                  <span
                    aria-hidden
                    className="font-display text-h4 font-extrabold text-ciano"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-h4 font-extrabold text-tinta">
                    {etapa.titulo}
                  </h3>

                  <p className="max-w-medida text-corpo-s text-cinza">
                    {etapa.texto}
                  </p>

                  <p className="text-meta text-cinza md:text-right">
                    <span className="sr-only">Resultado desta etapa: </span>
                    {etapa.saida}
                  </p>
                </li>
              ))}
            </ol>
          </Revelar>
        </div>
      </section>

      <section>
        <Revelar className="contentor">
          <div className="tessera relative aspect-21/9 overflow-hidden">
            <Image
              src={servico.imagem}
              alt="Técnico a utilizar um tablet durante um projecto de capacitação"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Revelar>
      </section>

      {/* ---------- Âmbito ---------- */}
      <section className="seccao bg-tinta">
        <div className="contentor">
          <Revelar>
            <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-10 lg:gap-16">
              <div>
                <p className="flex items-center gap-3 text-etiqueta uppercase text-white/55">
                  <Tessera indice={1} tom="claro" />
                  Âmbito
                </p>
                <h2 className="mt-5 text-h3 text-white">
                  Cinco linhas de trabalho.
                </h2>
              </div>

              <div className="max-w-medida space-y-4 text-corpo text-white/65">
                {servico.descricao.map((paragrafo) => (
                  <p key={paragrafo}>{paragrafo}</p>
                ))}
              </div>
            </div>
          </Revelar>

          <Revelar atraso={80}>
            <ol className="mt-12 grid gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-3">
              {servico.itens.map((item) => (
                <li key={item} className="bg-tinta p-7">
                  <span
                    aria-hidden
                    className="block size-1.5 rounded-[1px] bg-ciano"
                  />
                  <p className="mt-4 text-corpo-s text-white/85">{item}</p>
                </li>
              ))}
            </ol>
          </Revelar>
        </div>
      </section>

      {/* ---------- Portefólio ----------
           O portefólio ainda não existe publicamente. Em vez de um aviso
           vazio, a secção diz o que fazer agora e o que incluir no pedido. */}
      <section className="seccao">
        <Revelar className="contentor">
          <div className="grid gap-10 rounded-cartao bg-nevoa p-7 md:grid-cols-2 md:gap-10 md:p-10 lg:gap-16 lg:p-12">
            <div>
              <p className="flex items-center gap-3 text-etiqueta uppercase text-cinza">
                <Tessera indice={2} />
                Portefólio
              </p>
              <h2 className="mt-5 text-h3 text-tinta">
                Tem um projecto para desenvolver?
              </h2>
              <p className="mt-4 max-w-medida text-corpo text-cinza">
                O portefólio de projectos concluídos será publicado assim que a
                MOSAICO AFRICANO, SA o disponibilizar. Entretanto, analisamos
                propostas de novos projectos.
              </p>
              <div className="mt-8">
                <Botao href="/contactos">Propor um projecto</Botao>
              </div>
            </div>

            <div>
              <h3 className="text-etiqueta uppercase text-cinza">
                O que incluir no pedido
              </h3>
              <ul className="mt-5 border-t border-tinta/12">
                {[
                  "O problema de aprendizagem ou de capacitação a resolver",
                  "O público a abranger e a sua dimensão aproximada",
                  "O prazo previsto e as instituições já envolvidas",
                ].map((ponto) => (
                  <li
                    key={ponto}
                    className="border-b border-tinta/12 py-3.5 text-corpo-s text-tinta"
                  >
                    {ponto}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Revelar>
      </section>

      <ChamadaAccao />
    </>
  );
}
