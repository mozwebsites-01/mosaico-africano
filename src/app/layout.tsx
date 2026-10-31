import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "800"],
  display: "swap",
  // Fontes de sistema como alternativa caso o Google Fonts não esteja acessível.
  fallback: ["Segoe UI", "system-ui", "sans-serif"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  fallback: ["Segoe UI", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Mosaico Africano, SA | Educação e Formação Profissional",
    template: "%s | Mosaico Africano, SA",
  },
  description:
    "Conheça a Mosaico Africano, SA, sociedade moçambicana dedicada à educação, formação profissional, desenvolvimento de competências e projectos educativos.",
  applicationName: "Mosaico Africano, SA",
  openGraph: {
    type: "website",
    locale: "pt_MZ",
    siteName: "Mosaico Africano, SA",
    title: "Mosaico Africano, SA | Educação e Formação Profissional",
    description:
      "Sociedade moçambicana dedicada à educação, formação profissional, desenvolvimento de competências e projectos educativos.",
  },
  icons: { icon: "/brand/logo-mosaico.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-MZ" className={`${manrope.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ciano focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Saltar para o conteúdo principal
        </a>

        <Cabecalho />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Rodape />
      </body>
    </html>
  );
}
