import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import CabecalhoPagina from "@/components/CabecalhoPagina";
import FormularioContacto from "@/components/FormularioContacto";
import Revelar from "@/components/Revelar";
import Tessera from "@/components/Tessera";
import { empresa, tiposDePedido } from "@/data/site";

export const metadata: Metadata = {
  title: "Contactos",
  description:
    "Fale com a MOSAICO AFRICANO, SA sobre projectos educativos, formação profissional e parcerias. Sede em Maputo, Moçambique.",
};

export default function PaginaContactos() {
  const semContactoDirecto = !empresa.email && !empresa.telefone;

  return (
    <>
      <CabecalhoPagina
        etiqueta="Contactos"
        titulo="Vamos falar sobre o que pretende"
        destaque="desenvolver."
        texto="Indique-nos o âmbito do seu pedido e respondemos com uma proposta de abordagem."
        migalhas={[{ rotulo: "Contactos" }]}
      />

      <section className="seccao">
        <div className="contentor grid items-start gap-12 md:grid-cols-[1.4fr_1fr] md:gap-10 lg:gap-16">
          {/* O formulário é a acção principal da página, por isso vem primeiro
              na leitura e ocupa a coluna maior. */}
          <Revelar>
            <p className="flex items-center gap-3 text-etiqueta uppercase text-cinza">
              <Tessera indice={0} />
              Enviar mensagem
            </p>
            <p className="mt-4 mb-8 max-w-medida text-corpo text-cinza">
              Os campos assinalados com <span className="text-ciano">*</span> são
              obrigatórios. Respondemos para o endereço que indicar.
            </p>
            <FormularioContacto />
          </Revelar>

          <Revelar atraso={100}>
            <div className="rounded-cartao bg-tinta p-8 text-white lg:sticky lg:top-32">
              <p className="flex items-center gap-3 text-etiqueta uppercase text-white/55">
                <Tessera indice={1} tom="claro" />
                Onde estamos
              </p>

              <address className="mt-7 space-y-6 not-italic">
                <div className="flex gap-3.5">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-ciano" aria-hidden />
                  <div>
                    <p className="text-meta text-white/45">Sede</p>
                    <p className="mt-1 text-corpo-s text-white">
                      {empresa.morada.linha1}
                      <br />
                      {empresa.morada.linha2}
                      <br />
                      {empresa.morada.linha3}
                    </p>
                  </div>
                </div>

                {empresa.email && (
                  <div className="flex gap-3.5">
                    <Mail size={18} className="mt-0.5 shrink-0 text-ciano" aria-hidden />
                    <div>
                      <p className="text-meta text-white/45">E-mail</p>
                      <a
                        href={`mailto:${empresa.email}`}
                        className="mt-1 block text-corpo-s text-white hover:text-ciano"
                      >
                        {empresa.email}
                      </a>
                    </div>
                  </div>
                )}

                {empresa.telefone && (
                  <div className="flex gap-3.5">
                    <Phone size={18} className="mt-0.5 shrink-0 text-ciano" aria-hidden />
                    <div>
                      <p className="text-meta text-white/45">Telefone</p>
                      <a
                        href={`tel:${empresa.telefone.replace(/\s/g, "")}`}
                        className="mt-1 block text-corpo-s text-white hover:text-ciano"
                      >
                        {empresa.telefone}
                      </a>
                    </div>
                  </div>
                )}
              </address>

              {/* Enquanto a empresa não confirmar telefone e e-mail, diz-se
                  isso em vez de mostrar contactos inventados. */}
              {semContactoDirecto && (
                <p className="mt-8 border-t border-white/12 pt-6 text-corpo-s text-white/55">
                  O telefone e o endereço de e-mail institucionais serão
                  publicados assim que forem confirmados. Até lá, o formulário é
                  a via de contacto.
                </p>
              )}

              <div className="mt-8 border-t border-white/12 pt-6">
                <h2 className="text-meta text-white/45">
                  Assuntos que tratamos
                </h2>
                <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
                  {tiposDePedido.slice(0, -1).map((tipo) => (
                    <li
                      key={tipo}
                      className="rounded-md bg-white/8 px-2.5 py-1 text-meta text-white/75"
                    >
                      {tipo}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Revelar>
        </div>
      </section>
    </>
  );
}
