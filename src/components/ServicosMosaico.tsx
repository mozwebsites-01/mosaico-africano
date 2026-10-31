import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { servicos } from "@/data/services";

/**
 * As seis áreas dispostas como mosaico: duas peças grandes com fotografia e
 * quatro peças compactas. Os tamanhos desiguais são o ponto — é assim que um
 * mosaico se lê, e evita a grelha de três cartões iguais.
 */
const PECAS_GRANDES = new Set([0, 3]);

export default function ServicosMosaico() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {servicos.map((servico, i) => {
        const grande = PECAS_GRANDES.has(i);

        if (grande) {
          return (
            <li key={servico.slug} className="md:col-span-2 lg:row-span-2">
              <Link
                href={`/servicos/${servico.slug}`}
                className="group relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded-cartao bg-tinta p-8 lg:min-h-[330px]"
              >
                <Image
                  src={servico.imagem}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(max-width: 767px) 100vw, 52vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-tinta via-tinta/55 to-transparent"
                />

                <span className="relative">
                  <servico.icone
                    size={26}
                    strokeWidth={1.5}
                    aria-hidden
                    className="text-ciano"
                  />
                  <span className="mt-5 block text-h3 text-white">
                    {servico.titulo}
                  </span>
                  <span className="mt-3 block max-w-md text-corpo-s text-white/65">
                    {servico.resumo}
                  </span>
                  <span className="mt-6 inline-flex items-center gap-2 text-etiqueta uppercase text-ciano">
                    Ver detalhes
                    <ArrowUpRight
                      size={14}
                      strokeWidth={2.5}
                      aria-hidden
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </span>
              </Link>
            </li>
          );
        }

        return (
          <li key={servico.slug}>
            <Link
              href={`/servicos/${servico.slug}`}
              className="group flex h-full flex-col rounded-cartao border border-linha bg-white p-7 transition-colors duration-300 hover:border-tinta"
            >
              <span className="flex items-start justify-between gap-4">
                <servico.icone
                  size={26}
                  strokeWidth={1.5}
                  aria-hidden
                  className="text-ciano"
                />
                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  aria-hidden
                  className="text-linha transition-colors duration-300 group-hover:text-tinta"
                />
              </span>

              <span className="mt-6 block text-h4 font-extrabold leading-tight text-tinta">
                {servico.titulo}
              </span>
              <span className="mt-3 block text-corpo-s text-cinza">
                {servico.resumo}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
