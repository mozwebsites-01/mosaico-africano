/**
 * Dados institucionais da MOSAICO AFRICANO, SA.
 *
 * Os campos a `null` ainda não foram confirmados pela empresa. Os componentes
 * que os consomem omitem-se quando o valor é `null` — nunca se preenche com
 * dados inventados (secção 13.2 do manual).
 */

export const empresa = {
  nome: "MOSAICO AFRICANO, SA",
  nomeCurto: "Mosaico Africano",
  assinatura:
    "Construindo oportunidades, desenvolvendo competências e transformando o futuro.",
  registo: "105084828",
  morada: {
    linha1: "Rua Almeida Ribeiro, n.º 195, 1.º Andar",
    linha2: "Bairro de Sommerschield, Distrito Municipal de KaMpfumo",
    linha3: "Cidade de Maputo, Moçambique",
    resumida: "Rua Almeida Ribeiro 195, Maputo",
  },
  telefone: null as string | null,
  email: null as string | null,
  redes: [] as { nome: string; url: string }[],
} as const;

export const navegacao = [
  { rotulo: "Início", href: "/" },
  { rotulo: "Sobre Nós", href: "/sobre-nos" },
  { rotulo: "Serviços", href: "/servicos" },
  { rotulo: "Projectos", href: "/projectos" },
  { rotulo: "Parcerias", href: "/parcerias" },
  { rotulo: "Contactos", href: "/contactos" },
];

export const valores = [
  {
    titulo: "Excelência",
    texto:
      "Compromisso com a qualidade e a melhoria contínua dos nossos serviços.",
  },
  {
    titulo: "Integridade",
    texto:
      "Actuação baseada na ética, honestidade, transparência e responsabilidade.",
  },
  {
    titulo: "Inovação",
    texto:
      "Promoção de novas ideias, metodologias e soluções para os desafios da educação e da formação.",
  },
  {
    titulo: "Inclusão",
    texto:
      "Valorização da diversidade e promoção de oportunidades de aprendizagem para diferentes grupos sociais.",
  },
  {
    titulo: "Responsabilidade social",
    texto:
      "Contribuição activa para o desenvolvimento das comunidades e para a melhoria das condições de vida.",
  },
  {
    titulo: "Profissionalismo",
    texto:
      "Valorização da competência, disciplina, dedicação e rigor na execução das nossas actividades.",
  },
  {
    titulo: "Desenvolvimento sustentável",
    texto:
      "Promoção de iniciativas que conciliem o desenvolvimento económico, social e humano.",
  },
];

export const missao =
  "Promover uma educação inclusiva, de qualidade e orientada para resultados, através da criação e gestão de instituições de ensino, da prestação de serviços educativos e da realização de programas de formação profissional que desenvolvam competências, estimulem a inovação e contribuam para o progresso da sociedade.";

export const visao =
  "Ser uma referência nacional e regional nos sectores da educação, ensino e formação profissional, reconhecida pela qualidade dos seus serviços, pela inovação das suas soluções e pelo contributo para o desenvolvimento do capital humano.";

/**
 * Versões curtas para a página inicial. São a primeira oração de cada
 * declaração, sem alterar o sentido — o texto integral fica em Sobre Nós.
 */
export const missaoResumo =
  "Promover uma educação inclusiva, de qualidade e orientada para resultados.";

export const visaoResumo =
  "Ser uma referência nacional e regional na educação e na formação profissional.";

export const tiposDePedido = [
  "Informação institucional",
  "Educação e ensino",
  "Formação profissional",
  "Consultoria educacional",
  "Projectos educativos",
  "Parcerias",
  "Outros assuntos",
];
