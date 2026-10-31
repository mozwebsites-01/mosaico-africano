import type { Metadata } from "next";

import CabecalhoPagina from "@/components/CabecalhoPagina";
import { empresa, tiposDePedido } from "@/data/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a MOSAICO AFRICANO, SA recolhe e trata os dados pessoais enviados através deste website.",
};

/**
 * O texto descreve apenas o que o website faz hoje: um formulário de contacto
 * enviado por e-mail. Não há análise de tráfego, publicidade nem cookies de
 * terceiros, pelo que nada disso é mencionado.
 */
const SECCOES = [
  {
    id: "responsavel",
    titulo: "Quem trata os seus dados",
    conteudo: [
      `O responsável pelo tratamento dos dados recolhidos neste website é a ${empresa.nome}, com sede em ${empresa.morada.linha1}, ${empresa.morada.linha2}, ${empresa.morada.linha3}.`,
    ],
  },
  {
    id: "dados",
    titulo: "Que dados recolhemos",
    conteudo: [
      "Recolhemos apenas os dados que nos envia voluntariamente através do formulário de contacto: nome, endereço de e-mail e, quando os indicar, organização e telefone, bem como o tipo de pedido, o assunto e o conteúdo da mensagem.",
      "Este website não utiliza cookies de análise, de publicidade ou de redes sociais, e não recolhe dados de navegação para fins de criação de perfis.",
    ],
  },
  {
    id: "finalidade",
    titulo: "Para que usamos os dados",
    conteudo: [
      "Os dados são utilizados exclusivamente para responder ao pedido que nos dirigiu e, se aplicável, para dar seguimento ao assunto em causa.",
      `Os tipos de pedido previstos no formulário são: ${tiposDePedido.join(", ").toLowerCase()}.`,
      "Não utilizamos os seus dados para envio de comunicações comerciais não solicitadas.",
    ],
  },
  {
    id: "partilha",
    titulo: "Com quem partilhamos os dados",
    conteudo: [
      "Não vendemos nem cedemos os seus dados a terceiros. A mensagem é encaminhada para o endereço de correio electrónico institucional da empresa através do respectivo fornecedor de serviço de e-mail, que actua como subcontratante.",
    ],
  },
  {
    id: "conservacao",
    titulo: "Durante quanto tempo os conservamos",
    conteudo: [
      "Conservamos a correspondência pelo período necessário ao tratamento do pedido e ao cumprimento de eventuais obrigações legais aplicáveis. Findo esse período, os dados são eliminados.",
    ],
  },
  {
    id: "direitos",
    titulo: "Os seus direitos",
    conteudo: [
      "Pode solicitar o acesso aos seus dados pessoais, bem como a sua rectificação, eliminação ou a limitação do respectivo tratamento, e opor-se ao mesmo.",
      "Para exercer qualquer destes direitos, contacte-nos através do formulário disponível na página de contactos ou por escrito para a morada da sede indicada acima.",
    ],
  },
  {
    id: "seguranca",
    titulo: "Segurança",
    conteudo: [
      "Adoptamos medidas técnicas e organizativas adequadas para proteger os dados contra o acesso não autorizado, a perda ou a divulgação indevida. As credenciais de acesso aos serviços utilizados são guardadas em variáveis de ambiente e não figuram no código do website.",
    ],
  },
  {
    id: "alteracoes",
    titulo: "Alterações a esta política",
    conteudo: [
      "Esta política pode ser actualizada sempre que se verifiquem alterações aos serviços prestados através do website ou à legislação aplicável. A versão em vigor é a que se encontra publicada nesta página.",
    ],
  },
];

export default function PaginaPrivacidade() {
  return (
    <>
      <CabecalhoPagina
        etiqueta="Informação legal"
        titulo="Política de"
        destaque="Privacidade"
        texto="Como recolhemos e tratamos os dados pessoais enviados através deste website."
        migalhas={[{ rotulo: "Política de Privacidade" }]}
      />

      <section className="seccao">
        <div className="contentor grid gap-12 md:grid-cols-[200px_1fr] md:gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* Índice: o documento é longo e consulta-se por ponto, não de
              princípio a fim. */}
          <nav aria-label="Índice da política" className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-etiqueta uppercase text-cinza">Nesta página</h2>
            <ol className="mt-4 border-t border-linha">
              {SECCOES.map((seccao, i) => (
                <li key={seccao.id} className="border-b border-linha">
                  <a
                    href={`#${seccao.id}`}
                    className="flex gap-3 py-3 text-corpo-s text-cinza transition-colors hover:text-tinta"
                  >
                    <span className="font-display font-extrabold text-ciano">
                      {i + 1}
                    </span>
                    {seccao.titulo}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-medida">
            {SECCOES.map((seccao, i) => (
              <section
                key={seccao.id}
                id={seccao.id}
                className={`scroll-mt-32 ${i > 0 ? "mt-10 border-t border-linha pt-10" : ""}`}
              >
                <h2 className="flex gap-4 text-h4 font-extrabold text-tinta">
                  <span aria-hidden className="text-ciano">
                    {i + 1}
                  </span>
                  {seccao.titulo}
                </h2>
                <div className="mt-4 space-y-3.5 text-corpo text-cinza">
                  {seccao.conteudo.map((paragrafo) => (
                    <p key={paragrafo}>{paragrafo}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
