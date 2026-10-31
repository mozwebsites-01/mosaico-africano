import Image from "next/image";

import { missao, valores, visao } from "@/data/site";

/**
 * Missão, visão e valores — versão completa, para a página Sobre Nós.
 *
 * As duas declarações são longas: cada uma leva uma fotografia que lhe dá
 * entrada e quebra o bloco de texto. Os valores seguem numa grelha de três
 * colunas, para caberem numa leitura curta em vez de uma lista alta.
 *
 * As colunas acompanham a grelha de 12 da página: 6 + 6 nas declarações,
 * 4 + 4 + 4 nos valores. Os limites alinham com as restantes secções.
 */
const DECLARACOES = [
  {
    termo: "Missão",
    texto: missao,
    imagem: "/images/mosaico-1.webp",
    alt: "Professora a acompanhar o trabalho de duas alunas numa sala de aula",
  },
  {
    termo: "Visão",
    texto: visao,
    imagem: "/images/projectos-educativos.webp",
    alt: "Técnico a utilizar um tablet durante um projecto de capacitação",
  },
];

export default function MosaicoPrincipios() {
  return (
    <div>
      <dl className="grelha gap-y-10">
        {DECLARACOES.map((bloco) => (
          <div key={bloco.termo} className="md:col-span-6">
            <div className="relative aspect-16/9 overflow-hidden rounded-cartao">
              <Image
                src={bloco.imagem}
                alt={bloco.alt}
                fill
                sizes="(max-width: 767px) 100vw, 46vw"
                className="object-cover"
              />
            </div>

            <dt className="mt-6 flex items-center gap-3 text-etiqueta uppercase text-ciano">
              <span aria-hidden className="h-px w-6 bg-ciano" />
              {bloco.termo}
            </dt>

            <dd className="mt-3 text-corpo text-tinta">{bloco.texto}</dd>
          </div>
        ))}
      </dl>

      <h3 className="mt-14 text-etiqueta uppercase text-cinza">Valores</h3>

      <dl className="grelha mt-6">
        {valores.map((valor) => (
          <div
            key={valor.titulo}
            className="border-t border-tinta/15 py-5 md:col-span-6 lg:col-span-4"
          >
            <dt className="text-h4 font-extrabold text-tinta">{valor.titulo}</dt>
            <dd className="mt-2 text-corpo-s text-cinza">{valor.texto}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
