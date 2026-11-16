import Image from 'next/image'
import { athlete } from '@/data/athlete'

export function About() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  return (
    <section id="sobre" className="about sectionShell">
      <div className="portraitCard fadeInLeft">
        <Image
          src={`${basePath}/images/ivan-medalhas-collage.jpeg`}
          alt="Duas fotos de Ivan Leal com suas medalhas no tatame"
          width={1290}
          height={1287}
        />
      </div>
      <div className="sectionCopy fadeInRight delay-200">
        <p className="eyebrow">Sobre o mestre</p>
        <h2>Ivan Leal <span>JJ</span></h2>
        <h3>Atleta e professor de jiu-jitsu</h3>
        {athlete.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <div className="aboutHighlights">
          <span>Metodologia de pressão</span>
          <span>Seminários internacionais</span>
          <span>Formação para atletas</span>
        </div>
        <a className="button outline" href="#conquistas">Ver conquistas</a>
      </div>
    </section>
  )
}
