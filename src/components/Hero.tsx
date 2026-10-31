import Image from "next/image";

import Botao from "./Botao";

/**
 * As peças do mosaico do topo. São três fotografias distintas que, juntas,
 * formam uma única imagem da empresa — a leitura literal do nome da marca.
 * Entram em sequência, como um mosaico que é assente peça a peça.
 */
const PECAS = [
  {
    src: "/images/mosaico-1.webp",
    alt: "Professora a acompanhar o trabalho de duas alunas numa sala de aula",
    classe: "row-span-2 aspect-3/4",
    atraso: 100,
  },
  {
    src: "/images/mosaico-2.webp",
    alt: "Equipa técnica em formação num ambiente industrial",
    classe: "aspect-4/3",
    atraso: 200,
  },
  {
    src: "/images/mosaico-3.webp",
    alt: "Formador a conduzir uma sessão de trabalho com um grupo de participantes",
    classe: "aspect-4/3",
    atraso: 300,
  },
];

export default function Hero() {
  return (
    <section className="bg-tinta">
      <div className="contentor grid items-center gap-12 py-20 md:grid-cols-[1fr_0.95fr] md:gap-10 lg:gap-16 lg:py-28">
        <div>
          <h1 className="assentar font-display text-h1 text-white">
            <span className="block font-bold text-white/55">
              Construímos conhecimento.
            </span>
            <span className="block font-extrabold">
              Desenvolvemos competências.
            </span>
            <span className="block font-bold">
              Transformamos <span className="font-extrabold text-ciano">o futuro</span>.
            </span>
          </h1>

          <p
            className="assentar mt-7 max-w-lg text-corpo text-white/60"
            style={{ animationDelay: "80ms" }}
          >
            A MOSAICO AFRICANO, SA dedica-se ao desenvolvimento de iniciativas de
            educação, formação profissional e capacitação, contribuindo para o
            desenvolvimento do capital humano em Moçambique e em África.
          </p>

          <div
            className="assentar mt-9 flex flex-wrap gap-3"
            style={{ animationDelay: "160ms" }}
          >
            <Botao href="/sobre-nos">Conheça a nossa empresa</Botao>
            <Botao href="/servicos" variante="claro">
              Explore os nossos serviços
            </Botao>
          </div>
        </div>

        {/* O mosaico */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {PECAS.map((peca) => (
            <div
              key={peca.src}
              className={`assentar tessera relative overflow-hidden ${peca.classe}`}
              style={{ animationDelay: `${peca.atraso}ms` }}
            >
              <Image
                src={peca.src}
                alt={peca.alt}
                fill
                priority
                sizes="(max-width: 767px) 46vw, 24vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
