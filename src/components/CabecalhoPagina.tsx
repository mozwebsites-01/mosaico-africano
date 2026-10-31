import Link from "next/link";
import { ChevronRight } from "lucide-react";

import Tessera from "./Tessera";

type Migalha = { rotulo: string; href?: string };

type Props = {
  etiqueta: string;
  titulo: string;
  destaque?: string;
  texto?: string;
  migalhas?: Migalha[];
};

/** Topo comum a todas as páginas internas. */
export default function CabecalhoPagina({
  etiqueta,
  titulo,
  destaque,
  texto,
  migalhas = [],
}: Props) {
  return (
    <section className="seccao-curta bg-tinta">
      <div className="contentor">
        <nav aria-label="Caminho de navegação">
          <ol className="flex flex-wrap items-center gap-1.5 text-meta text-white/45">
            <li>
              <Link href="/" className="alvo-toque transition-colors hover:text-ciano">
                Início
              </Link>
            </li>
            {migalhas.map((migalha, i) => (
              <li key={migalha.rotulo} className="flex items-center gap-1.5">
                <ChevronRight size={13} aria-hidden className="text-white/25" />
                {migalha.href && i < migalhas.length - 1 ? (
                  <Link
                    href={migalha.href}
                    className="alvo-toque transition-colors hover:text-ciano"
                  >
                    {migalha.rotulo}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white/75">
                    {migalha.rotulo}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-etiqueta uppercase text-white/55">
              <Tessera indice={1} tom="claro" />
              {etiqueta}
            </p>

            <h1 className="mt-4 text-h1 text-white">
              <span className="font-bold">{titulo}</span>
              {destaque && (
                <>
                  {" "}
                  <span className="font-extrabold">{destaque}</span>
                </>
              )}
            </h1>
          </div>

          {texto && (
            <p className="max-w-medida text-corpo text-white/60">{texto}</p>
          )}
        </div>
      </div>
    </section>
  );
}
