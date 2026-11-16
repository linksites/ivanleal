import type { CSSProperties } from 'react'
import { athlete } from '@/data/athlete'

export function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const heroStyle = {
    '--hero-bg': `url("${basePath}/images/ivan-celebracao-1-1280.webp")`,
    '--hero-bg-mobile': `url("${basePath}/images/ivan-celebracao-1-640.webp")`
  } as CSSProperties

  return (
    <section id="home" className="hero" style={heroStyle}>
      <div className="heroInner sectionShell">
        <div className="heroCopy">
          <p className="eyebrow fadeInUp">Do Brasil para o mundo.</p>
          <p className="heroName fadeInUp delay-100">Mestre Ivan Leal</p>
          <h1 className="fadeInUp delay-200">
            Jiu-jitsu de pressão, <span>técnica</span> e <span>legado.</span>
          </h1>
          <p className="heroText fadeInUp delay-300">{athlete.subheadline}</p>
          <div className="heroActions fadeInUp delay-400">
            <a className="button primary" href={`${basePath}/seminarios/`}>Convidar para seminário</a>
            <a className="button secondary" href="#base-portugal">Treinar em Paço de Arcos</a>
          </div>
          <div className="heroProof fadeInUp delay-500" aria-label="Resumo da trajetória">
            <span>Ouro duplo no Europeu IBJJF 2026</span>
            <span>Faixa-preta de 6º grau</span>
            <span>Base em Paço de Arcos</span>
          </div>
        </div>
        <div className="heroVisual fadeInRight delay-200">
          <div className="heroFrame">
            <picture>
              <source media="(max-width: 620px)" srcSet={`${basePath}/images/ivan-double-gold-480.webp`} />
              <img
                src={`${basePath}/images/ivan-double-gold-850.webp`}
                alt="Ivan Leal com medalhas"
                width={1146}
                height={1536}
                fetchPriority="high"
                className="heroPhoto"
              />
            </picture>
            <div className="heroBadge">
              <strong>Ouro duplo</strong>
              <span>Europeu IBJJF 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
