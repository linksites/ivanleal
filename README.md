# Ivan Leal JJ - Site institucional

Site institucional premium para o mestre e atleta Ivan Leal, faixa preta 5º grau de Jiu-jitsu, com base em Paço de Arcos, Portugal.

O projeto foi construído em Next.js App Router, TypeScript e CSS global, com foco em presença profissional, responsividade, performance estática e preparação para futuras integrações.

## Links

- Produção Vercel: https://ivanleal.vercel.app
- GitHub Pages: https://linksites.github.io/ivanleal/
- Repositório: https://github.com/linksites/ivanleal
- Gracie Barra Paço de Arcos: https://www.graciebarra-pa.com/

## Objetivo

Transformar a landing page em um site institucional moderno para comunicar:

- trajetória e autoridade do Mestre Ivan Leal;
- conquistas e experiência competitiva;
- metodologia de ensino e seminários;
- galeria visual com imagens reais;
- base em Portugal na Gracie Barra Paço de Arcos;
- linhagem técnica e referências históricas do Jiu-jitsu;
- canais oficiais de contato, Instagram e WhatsApp.

## Identidade Visual

A identidade visual segue uma linha premium e esportiva:

- navy, preto e branco como base;
- dourado para autoridade, medalhas e destaques;
- vermelho como acento de força, ligação com Gracie Barra e detalhes de faixa;
- componentes com raio discreto de 8px;
- contraste forte, leitura clara e espaçamentos amplos;
- mini logo no header com o nome `Ivan LealJJ` e uma faixa preta com ponteira vermelha abaixo.

## Stack

- Next.js 16.2.6
- React 19.2.6
- TypeScript 5.9.3
- CSS global em `app/globals.css`
- Exportação estática com `output: 'export'`
- Imagens com `next/image` e `images.unoptimized: true`

## Estrutura

```text
app/
  page.tsx              Home com todas as seções principais
  layout.tsx            Metadados, SEO base e estrutura global
  globals.css           Estilos globais e responsividade
  sobre/                Alias para a home
  conquistas/           Alias para a home
  contato/              Alias para a home
  galeria/              Alias para a home
  seminarios/           Alias para a home
  videos/               Alias para a home

components/
  Header.tsx            Navegação desktop/mobile e mini logo
  Hero.tsx              Primeira dobra com nome em destaque
  Stats.tsx             Cards de graduação/conquistas
  About.tsx             Biografia institucional
  HostAcademy.tsx       Dedicatória à Gracie Barra Paço de Arcos
  Lineage.tsx           Árvore técnica ligada a Alexey/De La Riva
  Gallery.tsx           Galeria com imagens existentes
  Videos.tsx            Cards de vídeo preparados para integração
  Achievements.tsx      Conquistas e autoridade competitiva
  Testimonials.tsx      Metodologia/seminários
  CTA.tsx               Contato, Instagram e WhatsApp
  Footer.tsx            Rodapé e links sociais

data/
  athlete.ts            Conteúdo principal do atleta
  achievements.ts       Dados dos cards de conquistas
  academy.ts            Dados da Gracie Barra Paço de Arcos
  lineage.ts            Dados da linhagem técnica
  gallery.ts            Itens da galeria
  videos.ts             Itens dos vídeos

lib/
  analytics.ts          Estrutura futura para eventos
  seo.ts                Metadados base
  utils.ts              Utilidades

public/images/
  Imagens reais usadas no hero, galeria, vídeos e seções institucionais
```

## Seções Atuais

### Header

Header fixo com navegação, menu mobile animado e mini logo. A marca mantém `Ivan Leal` em branco, `JJ` em dourado e uma faixa preta com ponteira vermelha logo abaixo.

### Hero

Primeira dobra com:

- frase `Do Brasil para o mundo.`;
- destaque `Mestre Ivan Leal`;
- headline `Jiu-jitsu de pressão, técnica e legado.`;
- CTAs para seminário e galeria;
- chips de prova social: Double Gold European, faixa preta 5º grau e base em Paço de Arcos.

### Sobre

Biografia institucional, reforçando origem em Belém do Pará, atuação em Paço de Arcos e metodologia baseada em pressão inteligente, controle posicional e tomada de decisão.

### Base em Portugal

Dedicatória à Gracie Barra Paço de Arcos, academia que abriu as portas para Mestre Ivan Leal em Portugal.

Conteúdo documentado no site oficial da academia:

- Gracie Barra mais antiga de Portugal;
- equipe nascida no final de 2002;
- mais de 20 anos de experiência;
- Professor Diogo Valença como professor principal, diretor pedagógico e responsável pelo programa de aulas;
- Ivan Leal na equipe desde 2019.

### Linhagem Técnica

Seção educativa com a árvore:

```text
Mitsuyo Maeda -> Carlos Gracie -> Carlson Gracie -> Ricardo De La Riva -> Alexey Pickerell
```

O texto deixa claro que a seção apresenta a linhagem pública relacionada a Alexey Pickerell e Ricardo De La Riva, sem afirmar vínculo direto indevido com Ivan Leal.

### Galeria

Grid responsivo com imagens reais da pasta `public/images`.

### Vídeos

Cards visuais preparados para futura integração com Instagram, YouTube, Vimeo ou arquivos internos.

### Conquistas

Bloco institucional de resultados, incluindo faixa preta 5º grau, Double Gold European e experiência internacional.

### Seminários e Metodologia

Cards sobre pressão, técnica e legado, usados como base para futura página de seminários.

### CTA

Área de contato com Instagram e WhatsApp oficial:

```text
+351 934 519 135
https://wa.me/351934519135
```

## Decisões de Conteúdo

- Usar `Jiu-jitsu` como grafia padrão solicitada pelo cliente.
- Usar `faixa preta 5º grau` em vez de nomenclaturas externas de graduação.
- Substituir referências de localização para Paço de Arcos, Portugal.
- Usar `Do Brasil para o mundo.` como frase de abertura.
- Evitar texto genérico de template e manter tom institucional.
- Não usar logo oficial da Gracie Barra sem asset/licença no projeto; foi criado um selo visual `GB` em CSS.

## Comandos

Instalar dependências:

```bash
npm install
```

Rodar localmente:

```bash
npm run dev
```

Build de produção:

```bash
npm run build
```

Auditoria de dependências em produção:

```bash
npm audit --omit=dev
```

## Deploy

### Vercel

O projeto está vinculado à Vercel e pode ser publicado com:

```bash
vercel deploy --prod --yes
```

URL principal:

```text
https://ivanleal.vercel.app
```

### GitHub Pages

O deploy está configurado por GitHub Actions em `.github/workflows/deploy-pages.yml`.

URL:

```text
https://linksites.github.io/ivanleal/
```

O projeto usa `NEXT_PUBLIC_BASE_PATH` para funcionar corretamente no GitHub Pages com `basePath`.

## Validação Antes de Publicar

Fluxo recomendado:

```bash
npm run build
npm audit --omit=dev
rg "caractere-quebrado|termo-antigo-de-graduacao|grafia-antiga-do-jiu-jitsu" -n app components data lib
git status --short --branch
```

Depois:

```bash
git add .
git commit -m "Mensagem objetiva"
git push origin main
vercel deploy --prod --yes
```

## Futuras Integrações

- Instagram real nos cards de vídeo;
- WhatsApp com mensagem pré-preenchida;
- formulário de contato com API;
- painel administrativo ou CMS;
- página dedicada a regras e graduações do Jiu-jitsu;
- página de seminários com agenda;
- analytics de cliques em Instagram, WhatsApp e CTAs;
- domínio próprio definitivo.
