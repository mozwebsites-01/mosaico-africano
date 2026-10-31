import Tessera from "./Tessera";

type Props = {
  etiqueta: string;
  /** Primeira parte do título, em peso leve. */
  titulo: string;
  /** Segunda parte, em peso forte. O contraste faz a hierarquia. */
  destaque?: string;
  texto?: string;
  indice?: number;
  alinhamento?: "esquerda" | "centro";
  tom?: "escuro" | "claro";
  className?: string;
};

export default function TituloSeccao({
  etiqueta,
  titulo,
  destaque,
  texto,
  indice = 0,
  alinhamento = "esquerda",
  tom = "escuro",
  className,
}: Props) {
  const centrado = alinhamento === "centro";
  const claro = tom === "claro";

  return (
    <div
      className={`${centrado ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className ?? ""}`}
    >
      <p
        className={`flex items-center gap-3 text-etiqueta uppercase ${
          claro ? "text-white/55" : "text-cinza"
        } ${centrado ? "justify-center" : ""}`}
      >
        <Tessera indice={indice} tom={tom} />
        {etiqueta}
      </p>

      <h2
        className={`mt-4 text-h2 ${
          claro ? "text-white" : "text-tinta"
        }`}
      >
        <span className="font-bold">{titulo}</span>
        {destaque && (
          <>
            {" "}
            <span className="font-extrabold">{destaque}</span>
          </>
        )}
      </h2>

      {texto && (
        <p
          className={`mt-6 text-corpo ${claro ? "text-white/65" : "text-cinza"}`}
        >
          {texto}
        </p>
      )}
    </div>
  );
}
