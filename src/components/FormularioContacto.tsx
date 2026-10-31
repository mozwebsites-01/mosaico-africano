"use client";

import { useId, useState } from "react";
import { ArrowUpRight, CircleAlert, CircleCheck, LoaderCircle } from "lucide-react";

import { tiposDePedido } from "@/data/site";

type Estado =
  | { tipo: "inactivo" }
  | { tipo: "a-enviar" }
  | { tipo: "enviado" }
  | { tipo: "erro"; mensagem: string; campos: string[] };

const CAMPO =
  "mt-2 block w-full rounded-lg border border-linha bg-white px-4 py-3 text-corpo-s text-tinta transition-colors placeholder:text-cinza/60 focus:border-ciano focus:outline-none";
const ROTULO = "text-meta font-medium text-tinta";

export default function FormularioContacto() {
  const id = useId();
  const [estado, setEstado] = useState<Estado>({ tipo: "inactivo" });

  const comErro = (campo: string) =>
    estado.tipo === "erro" && estado.campos.includes(campo);

  async function submeter(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (estado.tipo === "a-enviar") return; // evita envios repetidos

    const formulario = evento.currentTarget;
    const dados = Object.fromEntries(new FormData(formulario)) as Record<string, string>;

    setEstado({ tipo: "a-enviar" });

    try {
      const resposta = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...dados, consentimento: dados.consentimento === "on" }),
      });

      const corpo = await resposta.json();

      if (resposta.ok && corpo.ok) {
        setEstado({ tipo: "enviado" });
        formulario.reset();
        return;
      }

      setEstado({
        tipo: "erro",
        mensagem: corpo.erro ?? "Não foi possível enviar a mensagem.",
        campos: corpo.campos ?? [],
      });
    } catch {
      setEstado({
        tipo: "erro",
        mensagem: "Sem ligação ao servidor. Verifique a sua Internet e tente novamente.",
        campos: [],
      });
    }
  }

  if (estado.tipo === "enviado") {
    return (
      <div
        role="status"
        className="rounded-cartao border border-linha bg-white p-9 text-center"
      >
        <CircleCheck size={34} strokeWidth={1.5} aria-hidden className="mx-auto text-ciano" />
        <h2 className="mt-5 text-h4 font-extrabold text-tinta">
          Mensagem enviada
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-corpo-s text-cinza">
          Recebemos o seu pedido e respondemos logo que possível.
        </p>
        <button
          type="button"
          onClick={() => setEstado({ tipo: "inactivo" })}
          className="mt-7 text-etiqueta uppercase text-ciano hover:text-tinta"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submeter} noValidate className="grid gap-5 sm:grid-cols-2">
      {/* Campo-armadilha contra robôs: invisível e fora da ordem de tabulação. */}
      <div aria-hidden className="hidden">
        <label htmlFor={`${id}-website`}>Não preencher</label>
        <input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor={`${id}-nome`} className={ROTULO}>
          Nome completo <span className="text-ciano">*</span>
        </label>
        <input
          id={`${id}-nome`}
          name="nome"
          required
          autoComplete="name"
          aria-invalid={comErro("nome")}
          className={`${CAMPO} ${comErro("nome") ? "border-red-500" : ""}`}
        />
      </div>

      <div>
        <label htmlFor={`${id}-organizacao`} className={ROTULO}>
          Organização
        </label>
        <input
          id={`${id}-organizacao`}
          name="organizacao"
          autoComplete="organization"
          className={CAMPO}
        />
      </div>

      <div>
        <label htmlFor={`${id}-email`} className={ROTULO}>
          E-mail <span className="text-ciano">*</span>
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={comErro("email")}
          className={`${CAMPO} ${comErro("email") ? "border-red-500" : ""}`}
        />
      </div>

      <div>
        <label htmlFor={`${id}-telefone`} className={ROTULO}>
          Telefone
        </label>
        <input
          id={`${id}-telefone`}
          name="telefone"
          type="tel"
          autoComplete="tel"
          className={CAMPO}
        />
      </div>

      <div>
        <label htmlFor={`${id}-tipo`} className={ROTULO}>
          Tipo de pedido <span className="text-ciano">*</span>
        </label>
        <select
          id={`${id}-tipo`}
          name="tipo"
          required
          defaultValue={tiposDePedido[0]}
          aria-invalid={comErro("tipo")}
          className={`${CAMPO} ${comErro("tipo") ? "border-red-500" : ""}`}
        >
          {tiposDePedido.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${id}-assunto`} className={ROTULO}>
          Assunto <span className="text-ciano">*</span>
        </label>
        <input
          id={`${id}-assunto`}
          name="assunto"
          required
          aria-invalid={comErro("assunto")}
          className={`${CAMPO} ${comErro("assunto") ? "border-red-500" : ""}`}
        />
      </div>

      <div className="md:col-span-2">
        <label htmlFor={`${id}-mensagem`} className={ROTULO}>
          Mensagem <span className="text-ciano">*</span>
        </label>
        <textarea
          id={`${id}-mensagem`}
          name="mensagem"
          required
          rows={6}
          aria-invalid={comErro("mensagem")}
          className={`${CAMPO} resize-y ${comErro("mensagem") ? "border-red-500" : ""}`}
        />
      </div>

      <div className="md:col-span-2">
        <label className="flex items-start gap-3 text-corpo-s text-cinza">
          <input
            type="checkbox"
            name="consentimento"
            required
            aria-invalid={comErro("consentimento")}
            className="mt-0.5 size-4 shrink-0 accent-ciano"
          />
          <span>
            Autorizo o tratamento dos meus dados para efeitos de resposta a este
            pedido, nos termos da{" "}
            <a href="/privacidade" className="text-ciano underline underline-offset-2">
              Política de Privacidade
            </a>
            . <span className="text-ciano">*</span>
          </span>
        </label>
      </div>

      {estado.tipo === "erro" && (
        <p
          role="alert"
          className="flex items-start gap-2.5 rounded-lg bg-red-50 p-4 text-corpo-s text-red-800 md:col-span-2"
        >
          <CircleAlert size={17} aria-hidden className="mt-0.5 shrink-0" />
          {estado.mensagem}
        </p>
      )}

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={estado.tipo === "a-enviar"}
          className="inline-flex h-[50px] items-center gap-2.5 rounded-lg bg-ciano px-7 text-botao uppercase text-white transition-colors hover:bg-ciano-fundo disabled:cursor-not-allowed disabled:opacity-60"
        >
          {estado.tipo === "a-enviar" ? (
            <>
              <LoaderCircle size={16} aria-hidden className="animate-spin" />A enviar…
            </>
          ) : (
            <>
              Enviar mensagem
              <ArrowUpRight size={16} strokeWidth={2.5} aria-hidden />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
