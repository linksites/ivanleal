# Changelog do Projeto

Registro das principais alterações realizadas no site Ivan Leal JJ.

## 2026-05-28

### Conteúdo e Ortografia

- Revisão geral de textos institucionais.
- Correção de acentos e termos em português.
- Padronização da grafia `Jiu-jitsu`, conforme preferência do cliente.
- Correção da nomenclatura antiga de graduação para `faixa preta 5º grau`.
- Atualização da base do mestre para Paço de Arcos, Portugal.
- Ajuste da frase principal para `Do Brasil para o mundo.`.

### Contato

- Padronização do WhatsApp em todos os links:

```text
+351 934 519 135
https://wa.me/351934519135
```

### UI/UX

- Reestruturação da landing page em formato institucional premium.
- Melhoria de hero, cards, galeria, vídeos, conquistas, CTA e footer.
- Ajustes de responsividade para desktop, tablet e mobile.
- Header com mini logo: nome do mestre e faixa preta com ponteira vermelha.
- Correção e refinamento da animação do menu hambúrguer no mobile.
- Inserção do destaque `Mestre Ivan Leal` após a frase `Do Brasil para o mundo.` no hero.

### Base em Portugal

- Criação da seção `Base em Portugal`.
- Dedicatória à Gracie Barra Paço de Arcos.
- Inclusão de link para o site oficial e página de equipe.
- Conteúdo baseado no site oficial da GBPA:
  - Gracie Barra mais antiga de Portugal;
  - equipe nascida no final de 2002;
  - Professor Diogo Valença como professor principal e diretor pedagógico;
  - Mestre Ivan Leal na equipe desde 2019.

### Linhagem Técnica

- Criação da seção `Linhagem técnica`.
- Inclusão da árvore:

```text
Mitsuyo Maeda -> Carlos Gracie -> Carlson Gracie -> Ricardo De La Riva -> Alexey Pickerell
```

- Inclusão de links de fonte para Alexey BJJ e BJJ Heroes.
- Texto editorial cuidadoso para não afirmar vínculo direto indevido com Ivan Leal.

### Deploy e Infra

- Configuração de exportação estática do Next.js.
- Suporte a Vercel e GitHub Pages.
- Deploys de produção validados em:
  - https://ivanleal.vercel.app
  - https://linksites.github.io/ivanleal/

### Validações Recorrentes

- `npm run build`
- `npm audit --omit=dev`
- Verificação de caracteres quebrados.
- Verificação de textos publicados em produção.
