"use client";

import { useSyncExternalStore } from "react";

/**
 * Ano do aviso de direitos reservados.
 *
 * A data corrente é lida no cliente: com `cacheComponents` activo, lê-la
 * durante a pré-renderização tornaria a página não-cacheável. `useSyncExternalStore`
 * devolve o ano de constituição no servidor e o ano real após a hidratação.
 */
const ANO_BASE = 2026;

const subscrever = () => () => {};
const anoDoCliente = () => new Date().getFullYear();
const anoDoServidor = () => ANO_BASE;

export default function AnoActual() {
  const ano = useSyncExternalStore(subscrever, anoDoCliente, anoDoServidor);

  return <>{ano}</>;
}
