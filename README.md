# Website institucional — MOSAICO AFRICANO, SA

Website institucional da MOSAICO AFRICANO, SA, sociedade moçambicana dedicada à
educação, ensino, formação profissional e desenvolvimento de competências.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Lucide React

---

## Executar localmente

```bash
npm install
npm run dev
```

O site fica em <http://localhost:3000>.

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # servir o build
npm run lint    # ESLint
```

---

## Configuração

Copie `.env.example` para `.env.local` e preencha:

| Variável | Para que serve |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL público. Alimenta o sitemap e o robots.txt. |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD` | Servidor de e-mail do formulário de contacto. |
| `CONTACTO_DESTINO` | Endereço que recebe as mensagens do formulário. |
| `CONTACTO_REMETENTE` | Remetente apresentado. Se vazio, usa `SMTP_USER`. |

Sem estas variáveis o formulário devolve um erro explícito (HTTP 503) em vez de
fingir que a mensagem foi enviada.

---

## Estrutura

```
src/
├── app/
│   ├── page.tsx                 # Início
│   ├── sobre-nos/
│   ├── servicos/                # visão geral + [slug] para as 6 áreas
│   ├── projectos/
│   ├── parcerias/
│   ├── contactos/
│   ├── privacidade/
│   ├── not-found.tsx            # 404
│   ├── api/contacto/route.ts    # recepção do formulário
│   ├── sitemap.ts · robots.ts
│   └── globals.css              # tokens de cor, tipografia e movimento
├── components/
└── data/
    ├── site.ts                  # dados institucionais e navegação
    └── services.ts              # as seis áreas de actuação
public/
├── brand/                       # logótipo original (ver nota abaixo)
└── images/                      # fotografias em .webp
scripts/process-images.mjs       # gera as .webp a partir dos originais
```

---

## Identidade visual

**O logótipo é usado exactamente como foi fornecido.** `public/brand/` contém
cópias literais dos ficheiros SVG originais — sem redesenho, recoloração ou
alteração de proporções. O componente `Logo.tsx` apenas recorta visualmente a
margem vazia da tela 2000×2000, sem tocar no desenho.

Cores, confirmadas no ficheiro do logótipo:

| Token | Valor | Uso |
|---|---|---|
| `ciano` | `#00A2CE` | Cor da marca: botões, ligações, destaques |
| `tinta` | `#14181B` | Títulos e fundos escuros |
| `cinza` | `#5E686E` | Texto secundário |
| `nevoa` | `#EDF1F3` | Fundos alternados |
| `linha` | `#DDE4E8` | Linhas e contornos |

Tipografia: **Manrope** (títulos) e **Inter** (texto corrido), ambas com fontes
de sistema como alternativa.

### Sistema tipográfico

A escala vive em `@theme`, dentro de `globals.css`, e gera utilidades do
Tailwind. **Não se usam tamanhos arbitrários nos componentes** — há exactamente
dez tamanhos em todo o site. Os títulos crescem com `clamp()` entre 360 px e
1440 px, pelo que não há saltos nos pontos de quebra.

| Utilidade | Papel | 360 px → 1440 px |
|---|---|---|
| `text-h1` | Título de página | 32 → 52 px |
| `text-h2` | Título de secção | 28 → 42 px |
| `text-h3` | Título de bloco grande | 22 → 28 px |
| `text-h4` | Título de cartão | 18 → 21 px |
| `text-declaracao` | Frases institucionais | 20 → 27 px |
| `text-friso` | Friso de valores | 20 → 32 px |
| `text-corpo` · `text-corpo-s` · `text-meta` | Texto | 16 · 14,5 · 13 px |
| `text-botao` · `text-etiqueta` | Interface | 13 · 11 px |

As regras de elemento (`h1`–`h4`) estão em `@layer base`, para que as
utilidades `text-*` se possam sobrepor a elas.

### Primitivas de layout

Três classes, também em `globals.css`, usadas por todas as páginas:

| Classe | O que faz |
|---|---|
| `.contentor` | 1280 px máximos, centrado, 24 px de margem interior |
| `.seccao` | Espaçamento vertical: 64 px até ao tablet, 80 px a partir de 1024 px |
| `.grelha` | 12 colunas a partir de 768 px, coluna única abaixo |

Existem ainda `.seccao-t`, `.seccao-b` e `.seccao-curta` para variações, e
`.max-w-medida` (68 caracteres) para limitar o comprimento de linha do texto
corrido.

O sistema visual assenta na ideia de mosaico: peças de tamanhos diferentes que
formam uma imagem única. Aparece no grupo de fotografias do topo, na grelha de
serviços, no marcador de secção (`Tessera.tsx`) e no corte diagonal aplicado às
imagens, herdado do símbolo da marca.

---

## Conteúdo

Os textos vêm do perfil institucional fornecido pela empresa. Em conformidade
com o manual de desenvolvimento, **não existem dados inventados**: nenhum número
de estudantes, percentagem de satisfação, anos de experiência, prémio,
certificação, testemunho, cliente ou parceiro.

Os campos ainda por confirmar estão a `null` em `src/data/site.ts` e os
componentes omitem-se automaticamente quando o valor não existe:

```ts
telefone: null,   // a confirmar pela empresa
email: null,      // a confirmar pela empresa
redes: [],        // a confirmar pela empresa
```

Basta preencher estes valores para que apareçam na barra superior, no rodapé e
na página de contactos.

---

## Imagens

As fotografias foram descarregadas da conta Freepik/Magnific do cliente e
convertidas para `.webp` com `scripts/process-images.mjs`. Para substituir por
fotografias próprias da empresa, coloque os ficheiros originais na pasta
indicada no topo do script e execute:

```bash
node scripts/process-images.mjs
```

Confirme a licença de utilização de cada imagem antes da publicação.

---

## Acessibilidade e desempenho

- HTML semântico e hierarquia de títulos correcta
- Navegação completa por teclado, com foco visível e link "saltar para o conteúdo"
- Textos alternativos nas imagens informativas; as decorativas são marcadas como tal
- `prefers-reduced-motion` respeitado em todas as animações
- Áreas de toque alargadas nas ligações pequenas (`.alvo-toque`), sem deslocar o layout
- Imagens em `.webp` através de `next/image`, com `sizes` ajustado aos pontos de
  quebra reais e carregamento diferido fora do primeiro ecrã

Testado a **360, 390, 768, 1024 e 1440 px** nas oito páginas: sem deslocamento
horizontal, margens de contentor coincidentes entre secções e sem linhas de
texto acima dos 95 caracteres.

---

## Antes de publicar

1. Confirmar telefone, e-mail e redes sociais e preencher `src/data/site.ts`.
2. Definir `NEXT_PUBLIC_SITE_URL` e as variáveis SMTP no ambiente de produção.
3. Enviar uma mensagem de teste pelo formulário e confirmar a recepção.
4. Rever a Política de Privacidade face aos serviços efectivamente utilizados.
5. Substituir as fotografias por imagens próprias, se existirem.
