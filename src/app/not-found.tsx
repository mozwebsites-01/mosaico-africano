import Link from "next/link";

import Botao from "@/components/Botao";
import { navegacao } from "@/data/site";

export default function NaoEncontrado() {
  return (
    <section className="seccao">
      <div className="mx-auto max-w-[680px]">
        <p className="font-display text-meta font-extrabold uppercase tracking-[0.2em] text-ciano">
          Erro 404
        </p>

        <h1 className="mt-5 text-h1 text-tinta">
          <span className="font-bold">Não encontrámos</span>{" "}
          <span className="font-extrabold">esta página.</span>
        </h1>

        <p className="mt-5 text-corpo text-cinza">
          O endereço pode estar incorrecto ou a página pode ter sido movida.
          Experimente começar por uma das secções abaixo.
        </p>

        <div className="mt-9">
          <Botao href="/">Voltar ao início</Botao>
        </div>

        <nav aria-label="Secções principais" className="mt-12 border-t border-linha pt-8">
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {navegacao.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-corpo-s font-medium text-tinta transition-colors hover:text-ciano"
                >
                  {item.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
