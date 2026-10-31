import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { tiposDePedido } from "@/data/site";

type Resposta = { ok: true } | { ok: false; erro: string; campos?: string[] };

const LIMITE = { nome: 120, organizacao: 160, email: 160, telefone: 40, assunto: 160, mensagem: 4000 };

/** Validação no servidor — o cliente valida também, mas não é de confiança. */
function validar(dados: Record<string, unknown>) {
  const campos: string[] = [];
  const texto = (chave: string) =>
    typeof dados[chave] === "string" ? (dados[chave] as string).trim() : "";

  const nome = texto("nome");
  const email = texto("email");
  const assunto = texto("assunto");
  const mensagem = texto("mensagem");
  const tipo = texto("tipo");

  if (nome.length < 2 || nome.length > LIMITE.nome) campos.push("nome");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > LIMITE.email)
    campos.push("email");
  if (assunto.length < 3 || assunto.length > LIMITE.assunto) campos.push("assunto");
  if (mensagem.length < 10 || mensagem.length > LIMITE.mensagem) campos.push("mensagem");
  if (!tiposDePedido.includes(tipo)) campos.push("tipo");
  if (dados.consentimento !== true) campos.push("consentimento");

  return {
    campos,
    valores: {
      nome,
      email,
      assunto,
      mensagem,
      tipo,
      organizacao: texto("organizacao").slice(0, LIMITE.organizacao),
      telefone: texto("telefone").slice(0, LIMITE.telefone),
    },
  };
}

export async function POST(request: Request): Promise<NextResponse<Resposta>> {
  let dados: Record<string, unknown>;

  try {
    dados = await request.json();
  } catch {
    return NextResponse.json({ ok: false, erro: "Pedido inválido." }, { status: 400 });
  }

  // Campo-armadilha: preenchido só por robôs. Responde ok sem enviar nada.
  if (typeof dados.website === "string" && dados.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const { campos, valores } = validar(dados);
  if (campos.length > 0) {
    return NextResponse.json(
      { ok: false, erro: "Verifique os campos assinalados.", campos },
      { status: 422 },
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACTO_DESTINO, CONTACTO_REMETENTE } =
    process.env;

  // Sem configuração não se finge um envio bem-sucedido (secção 8.3 do manual).
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !CONTACTO_DESTINO) {
    console.error(
      "[contacto] Envio não configurado: faltam variáveis SMTP_* ou CONTACTO_DESTINO.",
    );
    return NextResponse.json(
      {
        ok: false,
        erro:
          "O envio de mensagens ainda não está configurado. Contacte-nos directamente enquanto resolvemos.",
      },
      { status: 503 },
    );
  }

  const transporte = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT ?? 587) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  const linhas = [
    `Nome: ${valores.nome}`,
    valores.organizacao && `Organização: ${valores.organizacao}`,
    `E-mail: ${valores.email}`,
    valores.telefone && `Telefone: ${valores.telefone}`,
    `Tipo de pedido: ${valores.tipo}`,
    `Assunto: ${valores.assunto}`,
    "",
    valores.mensagem,
  ].filter(Boolean);

  try {
    await transporte.sendMail({
      from: CONTACTO_REMETENTE ?? SMTP_USER,
      to: CONTACTO_DESTINO,
      replyTo: `${valores.nome} <${valores.email}>`,
      subject: `[Website] ${valores.tipo} — ${valores.assunto}`,
      text: linhas.join("\n"),
    });
  } catch (erro) {
    console.error("[contacto] Falha no envio:", erro);
    return NextResponse.json(
      { ok: false, erro: "Não foi possível enviar a mensagem. Tente novamente." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
