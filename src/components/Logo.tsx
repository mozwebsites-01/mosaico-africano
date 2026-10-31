import Image from "next/image";

/**
 * O ficheiro original do logótipo tem uma tela quadrada de 2000×2000 com o
 * desenho centrado numa área menor. Nada no ficheiro é alterado — nem cores,
 * nem proporções, nem posições relativas: a moldura abaixo apenas recorta
 * visualmente a margem vazia da tela.
 *
 * Área ocupada pelo desenho dentro da tela: x 471→1528, y 393→1541.
 */
const CAIXA = { x: 471, y: 393, largura: 1057, altura: 1148, tela: 2000 };

export const LOGO_RACIO = CAIXA.largura / CAIXA.altura;

type Props = {
  /** Altura do logótipo em pixéis. */
  altura?: number;
  prioridade?: boolean;
  className?: string;
};

export default function Logo({ altura = 48, prioridade = false, className }: Props) {
  const largura = altura * LOGO_RACIO;

  return (
    <span
      className={`relative block shrink-0 overflow-hidden ${className ?? ""}`}
      style={{ width: largura, height: altura }}
    >
      <Image
        src="/brand/logo-mosaico.svg"
        alt="Mosaico Africano, SA"
        width={CAIXA.tela}
        height={CAIXA.tela}
        priority={prioridade}
        className="max-w-none"
        style={{
          width: (largura * CAIXA.tela) / CAIXA.largura,
          height: (altura * CAIXA.tela) / CAIXA.altura,
          marginLeft: -(CAIXA.x / CAIXA.largura) * largura,
          marginTop: -(CAIXA.y / CAIXA.altura) * altura,
        }}
      />
    </span>
  );
}
