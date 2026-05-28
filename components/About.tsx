import Image from 'next/image'
import { athlete } from '@/data/athlete'

export function About() {
  return (
    <section id="sobre" className="about sectionShell">
      <div className="portraitCard fadeInLeft">
        <Image src="/images/ivan-medalhas-collage.jpeg" alt="Mestre Ivan Leal no tatame" width={720} height={880} />
      </div>
      <div className="sectionCopy fadeInRight delay-200">
        <p className="eyebrow">Sobre o mestre</p>
        <h2>Ivan Leal <span>JJ</span></h2>
        <h3>Atleta. Professor. Competidor. Mentor.</h3>
        {athlete.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <div className="aboutHighlights">
          <span>Metodologia de pressao</span>
          <span>Seminarios internacionais</span>
          <span>Formacao para atletas</span>
        </div>
        <a className="button outline" href="#conquistas">Conhecer trajetoria</a>
      </div>
    </section>
  )
}
