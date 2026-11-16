type NewsItem = {
  featured?: boolean
  category: string
  title: string
  summary: string
  source: string
  href: string
  date?: { iso: string; label: string }
}

export const newsItems: NewsItem[] = [
  {
    category: 'Regras · IBJJF',
    featured: true,
    date: { iso: '2026-11-13', label: '13 nov. 2026' },
    title: 'IBJJF anuncia a categoria Master 8 para 2027',
    summary: 'As mudanças entram em vigor em 1º de janeiro. O pacote também altera a regra para quando os dois atletas puxam para a guarda ao mesmo tempo e atualiza as exigências de uniforme no no-gi.',
    source: 'Comunicado oficial da IBJJF',
    href: 'https://ibjjf.com/news/official-ibjjf-rules-update'
  },
  {
    category: 'Resultados · Crown',
    date: { iso: '2026-11-08', label: '8 nov. 2026' },
    title: 'Mica Galvão supera Andy Murasaki na final do peso médio do Crown',
    summary: 'Murasaki buscava o terceiro título seguido. Na final, respondeu à primeira raspagem de Mica com uma raspagem própria, mas Mica voltou a inverter a posição e marcou os dois pontos decisivos.',
    source: 'Cobertura do Crown pela IBJJF',
    href: 'https://ibjjf.com/news/2026-crown-event-recap-and-breakdown'
  },
  {
    category: 'Atletas · Crown',
    date: { iso: '2026-11-08', label: '8 nov. 2026' },
    title: 'João “Bisnaga” Mendes deixa a faixa no tatame após conquistar o Crown',
    summary: 'Campeão mundial dos penas em 2025, Mendes venceu Jun Yong Cho, Mateo Cardona e Will Wilson para conquistar o ouro. Depois da final, deixou a faixa preta no tatame para anunciar sua despedida das competições.',
    source: 'Relato da despedida pela IBJJF',
    href: 'https://ibjjf.com/news/2026-crown-event-recap-and-breakdown'
  },
  {
    category: 'Resultados · Portugal',
    date: { iso: '2026-11-08', label: '8 nov. 2026' },
    title: 'Gracie Barra lidera a base no Nacional Open de Odivelas',
    summary: 'No domingo, o Nacional Open teve disputas infantis e juvenis com quimono. A Gracie Barra liderou a classificação conjunta dessas categorias com 429 pontos, à frente de Brazilian Power Team (168) e Focus Jiu-Jitsu (159). A equipe também terminou em primeiro no geral com quimono, com 928 pontos.',
    source: 'Resultados oficiais com quimono',
    href: 'https://ibjjf.com/events/3423/results'
  },
  {
    category: 'Resultados · No-Gi',
    date: { iso: '2026-11-08', label: '8 nov. 2026' },
    title: 'Gracie Barra também vence por equipes no Nacional Open No-Gi',
    summary: 'As disputas sem quimono encerraram o fim de semana no Pavilhão Multiusos de Odivelas. A Gracie Barra ficou em primeiro na classificação geral com 52 pontos, seguida de Brazilian Power Team (33) e Holdz Jiu-Jitsu (30).',
    source: 'Resultados oficiais do No-Gi',
    href: 'https://ibjjf.com/events/3424/results'
  },
  {
    category: 'Resultados · Portugal',
    date: { iso: '2026-11-07', label: '7 nov. 2026' },
    title: 'Ivan Leal vence o absoluto no Nacional Open de Portugal',
    featured: true,
    summary: 'Em Odivelas, Ivan venceu duas lutas pela Gracie Barra para conquistar o ouro no absoluto da faixa preta Master 4 com quimono. No superpesado, ficou em primeiro lugar como único inscrito, sem luta.',
    source: 'Chave oficial do absoluto',
    href: 'https://www.bjjcompsystem.com/tournaments/3423/categories/3005376'
  },
  {
    category: 'Resultados',
    date: { iso: '2026-11-01', label: '1 nov. 2026' },
    title: 'Ouro duplo no Europeu No-Gi em Roma',
    summary: 'Paweł Jaworski e Martyna Kapuścińska venceram em suas categorias de peso e no absoluto da faixa preta adulta. A Academia Gorila liderou a classificação por equipes no adulto masculino e feminino.',
    source: 'Resultados da IBJJF',
    href: 'https://ibjjf.com/events/3313/results'
  },
  {
    category: 'Ivan na imprensa · Jornal Passaporte',
    date: { iso: '2026-01-30', label: '30 jan. 2026' },
    title: 'Do Jurunas ao pódio em Odivelas',
    summary: 'Braz Chucre relembra a ligação de Ivan com o bairro do Jurunas, em Belém, ao contar como o atleta conquistou o superpesado e o absoluto no Europeu de 2026.',
    source: 'Ler no Jornal Passaporte',
    href: 'https://www.jornalpassaporte.com.br/2026/01/30/paraense-fatura-o-mundial-de-jiu-jitsu-no-europen-2026/'
  },
  {
    category: 'Ivan na imprensa · O Liberal',
    featured: true,
    date: { iso: '2026-01-29', label: '29 jan. 2026' },
    title: 'Ivan conta a O Liberal o que significou o duplo ouro europeu',
    summary: 'Em entrevista à repórter Aila Beatriz Inete, Ivan descreveu os dois ouros como a realização de um sonho e disse que seu próximo objetivo era disputar o Mundial.',
    source: 'Ler a entrevista em O Liberal',
    href: 'https://www.oliberal.com/esportes/maisesportes/paraense-conquista-duas-medalhas-de-ouro-no-campeonato-europeu-de-jiu-jitsu-1.1077722'
  },
  {
    category: 'Agenda',
    date: { iso: '2026-12-10', label: '10–12 dez. 2026' },
    title: 'Mundial No-Gi da IBJJF em Las Vegas',
    summary: 'O Mundial está marcado para o Las Vegas Convention Center. O prazo previsto para inscrições é 29 de novembro de 2026, sujeito à lotação.',
    source: 'Página oficial do Mundial',
    href: 'https://ibjjf.com/events/world-ibjjf-jiu-jitsu-no-gi-championship-2026'
  },
  {
    category: 'Agenda',
    date: { iso: '2027-01-14', label: '14–23 jan. 2027' },
    title: 'Europeu com quimono volta a Odivelas',
    summary: 'O Pavilhão Multiusos de Odivelas recebe o Europeu da IBJJF. A programação começa em 14 de janeiro, com possibilidade de lutas no dia 13.',
    source: 'Página oficial do Europeu',
    href: 'https://ibjjf.com/events/european-ibjjf-jiu-jitsu-championship-2027'
  },
  {
    category: 'Calendário',
    title: 'Calendário internacional da IBJJF',
    summary:
      'Consulte as datas e os locais dos campeonatos com e sem quimono.',
    source: 'IBJJF',
    href: 'https://ibjjf.com/events/calendar'
  },
  {
    category: 'Cultura BJJ',
    title: 'História e técnica do jiu-jitsu',
    summary:
      'Leia perfis de atletas e artigos sobre a história da modalidade e a evolução de suas técnicas.',
    source: 'BJJ Heroes',
    href: 'https://www.bjjheroes.com/'
  },
  {
    category: 'Equipe',
    title: 'Aulas e equipe da Gracie Barra Paço de Arcos',
    summary:
      'Confira os horários, os programas de treino e os professores da academia onde Ivan dá aulas em Portugal.',
    source: 'GB Paço de Arcos',
    href: 'https://www.graciebarra-pa.com/'
  }
]
