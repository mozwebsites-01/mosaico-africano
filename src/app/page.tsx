import Image from "next/image";

import Botao from "@/components/Botao";
import ChamadaAccao from "@/components/ChamadaAccao";
import Hero from "@/components/Hero";
import PrincipiosResumo from "@/components/PrincipiosResumo";
import Revelar from "@/components/Revelar";
import ServicosMosaico from "@/components/ServicosMosaico";
import Tessera from "@/components/Tessera";
import TituloSeccao from "@/components/TituloSeccao";

export default function PaginaInicial() {
  return (
    <>
      <Hero />

      {/* ---------- Apresentação institucional ---------- */}
      <section className="seccao">
        <div className="contentor grid items-center gap-10 md:grid-cols-[0.9fr_1fr] md:gap-10 lg:gap-16">
          <Revelar>
            <div className="tessera relative aspect-4/3 overflow-hidden lg:aspect-square">
              <Image
                src="/images/sobre-nos.webp"
                alt="Formador a conduzir uma sessão de trabalho com um grupo de participantes"
                fill
                sizes="(max-width: 767px) 100vw, 44vw"
                className="object-cover"
              />
            </div>
          </Revelar>

          <Revelar atraso={100}>
            <TituloSeccao
              etiqueta="Sobre nós"
              titulo="Educação que cria"
              destaque="oportunidades."
              indice={0}
            />

            <div className="mt-8 max-w-medida space-y-4 text-corpo text-cinza">
              <p>
                A MOSAICO AFRICANO, SA é uma sociedade anónima constituída em
                Moçambique, vocacionada para a gestão de participações e o
                desenvolvimento de actividades nos sectores da educação, ensino e
                formação profissional.
              </p>
              <p>
                O seu propósito é contribuir para o desenvolvimento do capital
                humano, promovendo o acesso à educação, a aquisição de
                conhecimentos e o desenvolvimento de competências técnicas e
                profissionais.
              </p>
              <p>
                Através da criação, organização, gestão e exploração de
                estabelecimentos de ensino, bem como da implementação de programas
                de formação e capacitação, pretende responder às necessidades de
                estudantes, profissionais, instituições e organizações.
              </p>
            </div>

            <div className="mt-10">
              <Botao href="/sobre-nos">Saiba mais sobre nós</Botao>
            </div>
          </Revelar>
        </div>
      </section>

      {/* ---------- Missão, visão e valores ---------- */}
      <section className="seccao bg-tinta">
        <div className="contentor">
          <Revelar>
            <p className="flex items-center gap-3 text-etiqueta uppercase text-white/55">
              <Tessera indice={1} tom="claro" />O que nos orienta
            </p>
          </Revelar>

          <Revelar atraso={80} className="mt-10">
            <PrincipiosResumo />
          </Revelar>
        </div>
      </section>

      {/* ---------- Serviços ---------- */}
      <section className="seccao">
        <div className="contentor">
          <Revelar className="grid items-start gap-8 md:grid-cols-[1.1fr_1fr] md:gap-10 lg:gap-16">
            <TituloSeccao
              etiqueta="Os nossos serviços"
              titulo="Seis áreas para desenvolver"
              destaque="competências."
              indice={2}
            />

            <div className="lg:pt-9">
              <p className="max-w-medida text-corpo text-cinza">
                Actuamos em diferentes áreas da educação, formação e
                desenvolvimento de projectos, procurando responder às necessidades
                de pessoas, empresas e instituições.
              </p>
              <div className="mt-6">
                <Botao href="/servicos" variante="secundario">
                  Ver todos os serviços
                </Botao>
              </div>
            </div>
          </Revelar>

          <Revelar atraso={100} className="mt-12">
            <ServicosMosaico />
          </Revelar>
        </div>
      </section>

      {/* ---------- Abordagem e compromisso ---------- */}
      <section className="seccao bg-nevoa">
        <Revelar className="contentor">
          <p className="flex items-center gap-3 text-etiqueta uppercase text-cinza">
            <Tessera indice={3} />A nossa abordagem
          </p>

          <div className="mt-8 grid gap-10 md:grid-cols-[1.25fr_1fr] md:gap-10 lg:gap-16">
            <p className="text-declaracao text-tinta">
              A educação é o instrumento de{" "}
              <span className="font-extrabold text-ciano">
                transformação socioeconómica
              </span>{" "}
              de Moçambique e de África.
            </p>

            <div className="max-w-medida space-y-4 text-corpo-s text-cinza lg:pt-2">
              <p>
                Acreditamos que a educação constitui um instrumento fundamental
                para o desenvolvimento sustentável e para a inovação.
              </p>
              <p>
                Trabalhamos para promover oportunidades de aprendizagem,
                fortalecer capacidades profissionais e desenvolver iniciativas que
                contribuam para uma sociedade mais qualificada e preparada para os
                desafios do futuro.
              </p>
            </div>
          </div>
        </Revelar>
      </section>

      {/* ---------- Parcerias ---------- */}
      <section className="seccao">
        <div className="contentor grid items-center gap-10 md:grid-cols-2 md:gap-10 lg:gap-16">
          <Revelar>
            <TituloSeccao
              etiqueta="Parcerias"
              titulo="Criar parcerias."
              destaque="Multiplicar oportunidades."
              texto="Promovemos a colaboração com instituições públicas e privadas, empresas e organizações interessadas no desenvolvimento de iniciativas de educação, formação e capacitação."
              indice={0}
            />
            <div className="mt-10">
              <Botao href="/parcerias">Entre em contacto</Botao>
            </div>
          </Revelar>

          <Revelar atraso={100}>
            <div className="tessera-inv relative aspect-4/3 overflow-hidden">
              <Image
                src="/images/parcerias.webp"
                alt="Profissionais a cumprimentar-se no início de uma reunião de trabalho"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Revelar>
        </div>
      </section>

      <ChamadaAccao />
    </>
  );
}
