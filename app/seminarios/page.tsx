import Link from 'next/link'
import { Testimonials } from '@/components/Testimonials'

export const metadata = {
  title: 'Seminários com o mestre Ivan Leal',
  description: 'Conheça os temas dos seminários de Ivan Leal e consulte a disponibilidade para sua academia.',
  alternates: { canonical: '/seminarios/' }
}

export default function Seminarios() {
  return (
    <main className="seminarPage">
      <nav className="sectionShell" aria-label="Navegação">
        <Link href="/">← Voltar ao site de Ivan Leal</Link>
      </nav>
      <Testimonials standalone />
    </main>
  )
}
