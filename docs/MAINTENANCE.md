# Manutenção

Guia rápido para manter o site Ivan Leal JJ.

## Conteúdo Editável

Os textos principais ficam em `data/`:

- `data/athlete.ts`: nome, base, headline, biografia e CTA.
- `data/achievements.ts`: conquistas e estatísticas.
- `data/academy.ts`: dados da Gracie Barra Paço de Arcos.
- `data/lineage.ts`: árvore técnica e fontes.
- `data/gallery.ts`: imagens e legendas da galeria.
- `data/videos.ts`: cards de vídeo.

## Imagens

As imagens ficam em `public/images/`.

Ao adicionar uma nova imagem:

1. Coloque o arquivo em `public/images/`.
2. Use nomes simples, sem espaços.
3. Prefira `.jpeg`, `.jpg`, `.png` ou `.webp`.
4. Atualize o componente ou arquivo em `data/`.
5. Use `next/image` para imagens dentro de componentes.

## Estilos

Os estilos estão concentrados em `app/globals.css`.

Padrões importantes:

- raio padrão: `--radius: 8px`;
- cores principais em `:root`;
- evitar aparência genérica ou de template;
- manter boa legibilidade em mobile;
- testar sempre a navegação mobile após mexer no header.

## Publicação

Valide antes:

```bash
npm run build
npm audit --omit=dev
```

Commit e push:

```bash
git status --short --branch
git add .
git commit -m "Mensagem objetiva"
git push origin main
```

Deploy Vercel:

```bash
vercel deploy --prod --yes
```

GitHub Pages publica automaticamente após push em `main`.

## Checklist Pós-Deploy

Verificar:

- https://ivanleal.vercel.app
- https://linksites.github.io/ivanleal/

Pontos importantes:

- hero carregando corretamente;
- mini logo no header;
- menu mobile abrindo/fechando;
- links de Instagram e WhatsApp;
- links externos da Gracie Barra Paço de Arcos;
- ausência de nomenclaturas antigas de graduação;
- ausência de caracteres quebrados.

## Cuidados Editoriais

- Manter `Jiu-jitsu` como grafia padrão.
- Usar `faixa preta 5º grau`.
- Não usar nomenclaturas externas de graduação no lugar de `faixa preta 5º grau`.
- Não afirmar relação de linhagem sem fonte.
- Ao mencionar terceiros, preferir linguagem factual e baseada em fontes públicas.
