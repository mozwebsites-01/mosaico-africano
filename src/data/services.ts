import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  GraduationCap,
  Handshake,
  Lightbulb,
  Presentation,
  Wrench,
} from "lucide-react";

export type Servico = {
  slug: string;
  titulo: string;
  tituloCurto: string;
  resumo: string;
  descricao: string[];
  itens: string[];
  imagem: string;
  icone: LucideIcon;
};

/** As seis áreas do objecto social, conforme o perfil institucional. */
export const servicos: Servico[] = [
  {
    slug: "educacao-e-ensino",
    titulo: "Educação e Ensino",
    tituloCurto: "Educação e Ensino",
    resumo:
      "Criação, organização, gestão e exploração de estabelecimentos de ensino, bem como desenvolvimento de serviços e soluções educativas, nos termos legalmente autorizados.",
    descricao: [
      "Desenvolvemos e acompanhamos instituições de ensino em todas as fases, da concepção à gestão corrente, com foco na qualidade pedagógica e na sustentabilidade do projecto educativo.",
      "As soluções são desenhadas a partir das necessidades concretas dos estudantes e das comunidades onde a instituição se insere.",
    ],
    itens: [
      "Criação, organização e gestão de estabelecimentos de ensino",
      "Desenvolvimento e prestação de serviços educativos",
      "Programas de educação pré-escolar, primária e secundária, nos termos legalmente autorizados",
      "Iniciativas de ensino técnico-profissional",
      "Soluções educativas adaptadas às necessidades dos estudantes e comunidades",
    ],
    imagem: "/images/educacao-e-ensino.webp",
    icone: GraduationCap,
  },
  {
    slug: "formacao-profissional",
    titulo: "Formação Profissional e Capacitação",
    tituloCurto: "Formação Profissional",
    resumo:
      "Organização de cursos de formação profissional, capacitação técnica, desenvolvimento de competências e aperfeiçoamento profissional.",
    descricao: [
      "Concebemos percursos de formação que ligam o conhecimento técnico à prática profissional, dirigidos tanto a profissionais individuais como a equipas de empresas e instituições.",
      "Os programas podem ser desenhados à medida, em função das competências que a organização precisa de desenvolver.",
    ],
    itens: [
      "Cursos de formação profissional",
      "Capacitação técnica",
      "Desenvolvimento de competências",
      "Formação e aperfeiçoamento profissional de trabalhadores",
      "Programas para empresas e instituições",
      "Formação contínua e actualização profissional",
    ],
    imagem: "/images/formacao-profissional.webp",
    icone: Wrench,
  },
  {
    slug: "consultoria-educacional",
    titulo: "Consultoria e Apoio Educacional",
    tituloCurto: "Consultoria Educacional",
    resumo:
      "Apoio à concepção de projectos educativos, organização e gestão de instituições de ensino e desenvolvimento de programas de formação.",
    descricao: [
      "Acompanhamos instituições e organizações na estruturação das suas iniciativas de educação e capacitação, desde o diagnóstico inicial até à implementação.",
      "O trabalho inclui o desenvolvimento de materiais e conteúdos próprios e a assistência técnica ao longo do processo.",
    ],
    itens: [
      "Consultoria para projectos educativos",
      "Assessoria na organização e gestão de instituições de ensino",
      "Apoio à concepção e implementação de programas de formação",
      "Desenvolvimento de materiais e conteúdos educativos",
      "Assistência técnica para iniciativas de educação e capacitação",
    ],
    imagem: "/images/consultoria-educacional.webp",
    icone: Lightbulb,
  },
  {
    slug: "cursos-seminarios-e-eventos",
    titulo: "Cursos, Seminários e Eventos",
    tituloCurto: "Cursos e Eventos",
    resumo:
      "Organização de cursos, seminários, palestras, conferências, workshops e encontros profissionais.",
    descricao: [
      "Organizamos encontros de carácter educativo, científico e profissional, pensados para criar espaços de partilha e actualização de conhecimento.",
      "O formato e a duração são definidos em função dos objectivos de aprendizagem e do público a que se destinam.",
    ],
    itens: [
      "Cursos de curta e longa duração",
      "Seminários",
      "Palestras",
      "Conferências",
      "Workshops",
      "Encontros profissionais",
      "Programas de intercâmbio de conhecimentos",
    ],
    imagem: "/images/cursos-seminarios-eventos.webp",
    icone: Presentation,
  },
  {
    slug: "projectos-educativos",
    titulo: "Desenvolvimento de Projectos Educativos",
    tituloCurto: "Projectos Educativos",
    resumo:
      "Concepção e implementação de projectos de educação, inovação pedagógica, capacitação comunitária e desenvolvimento do capital humano.",
    descricao: [
      "Desenhamos e implementamos projectos de educação e formação, frequentemente em articulação com instituições públicas e privadas.",
      "A inovação pedagógica e a capacitação das comunidades são eixos centrais deste trabalho.",
    ],
    itens: [
      "Concepção e implementação de projectos de educação e formação",
      "Parcerias com instituições públicas e privadas",
      "Iniciativas de inovação pedagógica",
      "Apoio ao desenvolvimento de programas de capacitação comunitária",
      "Participação em projectos de desenvolvimento do capital humano",
    ],
    imagem: "/images/projectos-educativos.webp",
    icone: Blocks,
  },
  {
    slug: "gestao-de-participacoes",
    titulo: "Gestão de Participações",
    tituloCurto: "Gestão de Participações",
    resumo:
      "Gestão de participações sociais, desenvolvimento de parcerias estratégicas e participação em iniciativas empresariais, de acordo com o objecto social e a legislação aplicável.",
    descricao: [
      "Enquanto sociedade gestora de participações, a MOSAICO AFRICANO, SA participa em iniciativas empresariais alinhadas com a sua vocação nos sectores da educação e da formação.",
      "Todas as operações respeitam o objecto social da sociedade e a legislação aplicável.",
    ],
    itens: [
      "Gestão de participações sociais noutras sociedades",
      "Desenvolvimento de parcerias estratégicas",
      "Participação em iniciativas empresariais e projectos de investimento, de acordo com o objecto social e a legislação aplicável",
    ],
    imagem: "/images/gestao-participacoes.webp",
    icone: Handshake,
  },
];

export function obterServico(slug: string) {
  return servicos.find((s) => s.slug === slug);
}
