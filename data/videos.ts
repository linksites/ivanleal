export type VideoItem = {
  title: string
  label: string
  thumbnail: string
  duration?: string
  youtubeId?: string  // cole aqui o ID do YouTube após o upload (youtube.com/watch?v=ESSE_ID)
}

export const videos: VideoItem[] = [
  {
    title: 'Pressão que define o combate',
    label: 'Treino · Técnica',
    thumbnail: '/images/ivan-celebracao-2.jpeg',
    youtubeId: 'u2Q69mQdNTo',
  },
  {
    title: 'Transição com propósito e controle',
    label: 'Competição · Bastidor',
    thumbnail: '/images/ivan-podium-european.jpeg',
    duration: '0:59',
  },
  {
    title: 'Treino é hábito, vitória é escolha',
    label: 'Filosofia · Motivação',
    thumbnail: '/images/ivan-apontando.jpeg',
    duration: '1:15',
  },
]
