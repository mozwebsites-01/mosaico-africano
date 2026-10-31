import { missaoResumo, valores, visaoResumo } from "@/data/site";

/**
 * Princípios, versão da página inicial.
 *
 * Missão e visão reduzidas à frase essencial — o texto integral vive em
 * Sobre Nós. Os sete valores aparecem como friso tipográfico: são nomes
 * fortes e é isso que fica na memória, não a descrição de cada um.
 */
export default function PrincipiosResumo() {
  return (
    <div>
      <dl className="grid gap-10 sm:grid-cols-2 lg:gap-16">
        {[
          { termo: "Missão", texto: missaoResumo },
          { termo: "Visão", texto: visaoResumo },
        ].map((bloco) => (
          <div key={bloco.termo}>
            <dt className="text-etiqueta uppercase text-ciano">
              {bloco.termo}
            </dt>
            <dd className="mt-4 font-display text-declaracao font-light text-white">
              {bloco.texto}
            </dd>
          </div>
        ))}
      </dl>

      <h3 className="mt-14 text-etiqueta uppercase text-white/45">
        Valores
      </h3>

      <ul className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-2">
        {valores.map((valor, i) => (
          <li key={valor.titulo} className="flex items-baseline gap-5">
            {i > 0 && (
              <span aria-hidden className="size-1.5 shrink-0 rounded-[1px] bg-ciano" />
            )}
            <span className="font-display text-friso font-extrabold text-white">
              {valor.titulo}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
