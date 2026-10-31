import Botao from "./Botao";
import Revelar from "./Revelar";
import Tessera from "./Tessera";

type Props = {
  titulo?: string;
  destaque?: string;
  texto?: string;
  rotuloBotao?: string;
  href?: string;
};

export default function ChamadaAccao({
  titulo = "Vamos desenvolver novas",
  destaque = "oportunidades de aprendizagem?",
  texto = "Estamos disponíveis para dialogar sobre projectos educativos, formação profissional e possíveis parcerias.",
  rotuloBotao = "Fale connosco",
  href = "/contactos",
}: Props) {
  return (
    <section className="seccao border-t border-linha">
      <Revelar className="contentor grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-end">
        <div>
          <p className="flex items-center gap-3 text-etiqueta uppercase text-cinza">
            <Tessera indice={2} />
            Próximo passo
          </p>

          <h2 className="mt-4 text-h2 text-tinta">
            <span className="font-bold">{titulo}</span>{" "}
            <span className="font-extrabold text-ciano">{destaque}</span>
          </h2>
        </div>

        <div className="lg:pb-2">
          <p className="max-w-medida text-corpo text-cinza">{texto}</p>
          <div className="mt-8">
            <Botao href={href}>{rotuloBotao}</Botao>
          </div>
        </div>
      </Revelar>
    </section>
  );
}
