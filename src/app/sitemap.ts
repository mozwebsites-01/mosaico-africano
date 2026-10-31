import type { MetadataRoute } from "next";

import { servicos } from "@/data/services";

/**
 * O domínio definitivo ainda não foi confirmado. Define-se
 * `NEXT_PUBLIC_SITE_URL` no ambiente de publicação para que o sitemap e os
 * URLs canónicos saiam correctos.
 */
const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const paginas = [
    { rota: "", prioridade: 1 },
    { rota: "/sobre-nos", prioridade: 0.9 },
    { rota: "/servicos", prioridade: 0.9 },
    { rota: "/projectos", prioridade: 0.8 },
    { rota: "/parcerias", prioridade: 0.8 },
    { rota: "/contactos", prioridade: 0.8 },
    { rota: "/privacidade", prioridade: 0.3 },
  ];

  return [
    ...paginas.map((pagina) => ({
      url: `${BASE}${pagina.rota}`,
      changeFrequency: "monthly" as const,
      priority: pagina.prioridade,
    })),
    ...servicos.map((servico) => ({
      url: `${BASE}/servicos/${servico.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
