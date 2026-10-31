import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import AnoActual from "./AnoActual";
import Logo from "./Logo";
import { empresa, navegacao } from "@/data/site";
import { servicos } from "@/data/services";

export default function Rodape() {
  return (
    <footer className="bg-tinta text-white/70">
      <div className="contentor seccao">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr_1.2fr] lg:gap-12">
          <div>
            {/* O logótipo mantém-se na versão original, sobre uma superfície clara. */}
            <span className="inline-flex rounded-xl bg-white px-4 py-3">
              <Logo altura={44} />
            </span>

            <p className="mt-6 max-w-sm text-corpo-s leading-[1.75]">
              Sociedade moçambicana vocacionada para a educação, o ensino, a
              formação profissional e o desenvolvimento de competências.
            </p>

            <p className="mt-5 text-corpo-s text-ciano">{empresa.assinatura}</p>
          </div>

          <div>
            <h2 className="text-etiqueta uppercase text-white">
              Navegação
            </h2>
            <ul className="mt-5 space-y-3 text-corpo-s">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="alvo-toque transition-colors hover:text-ciano">
                    {item.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-etiqueta uppercase text-white">
              Serviços
            </h2>
            <ul className="mt-5 space-y-3 text-corpo-s">
              {servicos.map((servico) => (
                <li key={servico.slug}>
                  <Link
                    href={`/servicos/${servico.slug}`}
                    className="alvo-toque transition-colors hover:text-ciano"
                  >
                    {servico.tituloCurto}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-etiqueta uppercase text-white">
              Contactos
            </h2>

            <address className="mt-5 space-y-4 text-corpo-s not-italic">
              <p className="flex gap-3">
                <MapPin size={17} className="mt-1 shrink-0 text-ciano" aria-hidden />
                <span>
                  {empresa.morada.linha1}
                  <br />
                  {empresa.morada.linha2}
                  <br />
                  {empresa.morada.linha3}
                </span>
              </p>

              {empresa.email && (
                <p className="flex gap-3">
                  <Mail size={17} className="mt-1 shrink-0 text-ciano" aria-hidden />
                  <a href={`mailto:${empresa.email}`} className="hover:text-ciano">
                    {empresa.email}
                  </a>
                </p>
              )}

              {empresa.telefone && (
                <p className="flex gap-3">
                  <Phone size={17} className="mt-1 shrink-0 text-ciano" aria-hidden />
                  <a
                    href={`tel:${empresa.telefone.replace(/\s/g, "")}`}
                    className="hover:text-ciano"
                  >
                    {empresa.telefone}
                  </a>
                </p>
              )}
            </address>

            <Link
              href="/contactos"
              className="alvo-toque mt-6 inline-flex items-center gap-2 text-botao uppercase text-ciano hover:text-white"
            >
              Fale connosco
              <ArrowUpRight size={15} strokeWidth={2.5} aria-hidden />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-meta sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <AnoActual /> {empresa.nome}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="alvo-toque transition-colors hover:text-ciano">
              Política de Privacidade
            </Link>
            <span className="text-white/35">NUEL {empresa.registo}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
