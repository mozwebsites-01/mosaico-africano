import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Variante = "primario" | "secundario" | "claro";

const BASE =
  "group inline-flex h-[50px] items-center gap-2.5 rounded-lg px-6 text-botao uppercase transition-colors duration-200";

const VARIANTES: Record<Variante, string> = {
  primario: "bg-ciano text-white hover:bg-ciano-fundo",
  secundario:
    "border border-linha bg-white text-tinta hover:border-tinta hover:bg-tinta hover:text-white",
  claro:
    "border border-white/30 text-white hover:border-white hover:bg-white hover:text-tinta",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variante?: Variante;
  /** Oculta a seta — útil em botões dentro de texto corrido. */
  semSeta?: boolean;
  className?: string;
};

export default function Botao({
  href,
  children,
  variante = "primario",
  semSeta = false,
  className,
}: Props) {
  return (
    <Link href={href} className={`${BASE} ${VARIANTES[variante]} ${className ?? ""}`}>
      {children}
      {!semSeta && (
        <ArrowUpRight
          size={16}
          strokeWidth={2.5}
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}
