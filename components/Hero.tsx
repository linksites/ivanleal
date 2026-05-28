import Image from 'next/image'
import type { CSSProperties } from 'react'
import { athlete } from '@/data/athlete'

export function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const heroStyle = {
    '--hero-bg': `url("${basePath}/images/ivan-celebracao-1.jpeg")`
  } as CSSProperties

  return (
    <section id="home" className="hero sectionShell" style={heroStyle}>
      <div className="heroCopy">
        <p className="eyebrow fadeInUp">Do Brasil para o mundo.</p>
        <h1 className="fadeInUp delay-100">
          Jiu-Jitsu de pressão, <span>técnica</span> e <span>legado.</span>
        </h1>
        <p className="heroText fadeInUp delay-200">{athlete.subheadline}</p>
        <div className="heroActions fadeInUp delay-300">
          <a className="button primary" href="#contato">Agendar seminário</a>
          <a className="button secondary" href="#galeria">Ver galeria</a>
        </div>
        <div className="heroProof fadeInUp delay-400" aria-label="Resumo da trajetória">
          <span>Double Gold European</span>
          <span>5º Dan faixa-preta</span>
          <span>Base em Lisboa</span>
        </div>
      </div>
      <div className="heroVisual fadeInRight delay-200" aria-label="Ivan Leal JJ com medalhas">
        <div className="heroFrame">
          <Image
            src="/images/ivan-double-gold.jpeg"
            alt="Ivan Leal JJ com medalhas"
            width={760}
            height={980}
            priority
            className="heroPhoto"
          />
          <div className="heroBadge">
            <strong>Double Gold</strong>
            <span>European Championship</span>
          </div>
        </div>
      </div>
    </section>
  )
}
