/**
 * Marcador de secção.
 *
 * Quatro quadrados — uma peça de mosaico. A peça preenchida avança de posição
 * a cada secção da página, pelo que o glifo indica onde se está na leitura em
 * vez de servir de adorno. A geometria vem do símbolo da marca.
 */
const POSICOES = [
  [0, 0],
  [1, 0],
  [1, 1],
  [0, 1],
] as const;

type Props = {
  /** Índice da secção. Determina a peça preenchida. */
  indice?: number;
  tom?: "escuro" | "claro";
};

export default function Tessera({ indice = 0, tom = "escuro" }: Props) {
  const [colunaActiva, linhaActiva] = POSICOES[indice % POSICOES.length];
  const inactiva = tom === "claro" ? "fill-white/25" : "fill-linha";

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden
      className="shrink-0"
    >
      {[0, 1].map((linha) =>
        [0, 1].map((coluna) => {
          const activa = coluna === colunaActiva && linha === linhaActiva;
          return (
            <rect
              key={`${linha}-${coluna}`}
              x={coluna * 9}
              y={linha * 9}
              width="7"
              height="7"
              rx="1.5"
              className={activa ? "fill-ciano" : inactiva}
            />
          );
        }),
      )}
    </svg>
  );
}
