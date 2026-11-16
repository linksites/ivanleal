# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos

```bash
npm run dev      # http://localhost:3000
npm run build    # gera /out (export estático)
```

## Arquitetura

**Next.js 16 + React 19 + TypeScript + CSS global** — site institucional para Mestre Ivan Leal (jiu-jitsu). Sem Tailwind; estilos em `app/globals.css` e `styles/`.

**Export estático** — `next.config.js` define `output: 'export'` com `basePath` via `NEXT_PUBLIC_BASE_PATH` (vazio na Vercel, `/ivanleal` no GitHub Pages). `next/image` com `unoptimized: true`.

**Single-page** — `app/page.tsx` compõe todas as seções em sequência. As sub-rotas (`/sobre`, `/conquistas`, `/galeria`, etc.) são aliases que redirecionam para a home; o conteúdo é todo renderizado na página principal.

**Dados de conteúdo** — todo o conteúdo do atleta está em arquivos TypeScript em `data/`:

| Arquivo | Conteúdo |
|---|---|
| `athlete.ts` | Dados biográficos principais |
| `achievements.ts` | Cards de conquistas |
| `academy.ts` | Gracie Barra Paço de Arcos |
| `lineage.ts` | Árvore técnica (Maeda → De La Riva → Alexey) |
| `gallery.ts` | Itens da galeria |
| `videos.ts` | Vídeos reais do YouTube (tapes de lutas) |

Para atualizar o site, edite esses arquivos — sem banco de dados.

## Identidade visual e decisões de conteúdo

- Paleta: navy, preto, branco + dourado (autoridade) + vermelho (Gracie Barra)
- Grafia padrão: `Jiu-jitsu` (não "jiu-jitsu" minúsculo, não "Jiu Jítsu")
- Graduação: `faixa preta 6º grau` (não usar nomenclaturas externas)
- Localização: Paço de Arcos, Portugal (Gracie Barra Paço de Arcos)
- Logo GB: implementado em CSS (sem ativo oficial licenciado)
- Frase de abertura: `Do Brasil para o mundo.`

## Deploy

**Vercel** (principal): `vercel deploy --prod --yes` → `https://ivanleal.vercel.app`

**GitHub Pages** (espelho): push na `main` → Actions (`.github/workflows/deploy-pages.yml`) → `https://linksites.github.io/ivanleal/` (usa `NEXT_PUBLIC_BASE_PATH=/ivanleal`)
