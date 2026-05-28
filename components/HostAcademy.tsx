import type { CSSProperties } from 'react'
import { hostAcademy } from '@/data/academy'

export function HostAcademy() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const academyStyle = {
    '--academy-bg': `url("${basePath}/images/ivan-apontando.jpeg")`
  } as CSSProperties

  return (
    <section id="base-portugal" className="hostAcademy" style={academyStyle}>
      <div className="sectionShell hostAcademyInner">
        <div className="hostAcademyCard fadeInLeft">
          <div className="gbMark" aria-hidden="true">
            <span>GB</span>
          </div>
          <p className="eyebrow">Base em Portugal</p>
          <h2>{hostAcademy.name}</h2>
          <p>{hostAcademy.dedication}</p>
          <div className="hostAcademyActions">
            <a className="button primary" href={hostAcademy.url} target="_blank" rel="noreferrer">
              Visitar academia
            </a>
            <a className="button outline" href={hostAcademy.teamUrl} target="_blank" rel="noreferrer">
              Ver equipe
            </a>
          </div>
        </div>

        <div className="hostAcademyContent fadeInRight delay-200">
          <span>{hostAcademy.location}</span>
          <h3>Uma casa de treino, tradição e portas abertas.</h3>
          <p>{hostAcademy.summary}</p>
          <p>{hostAcademy.leadership}</p>
          <p>{hostAcademy.ivanConnection}</p>
          <div className="academyDetailGrid">
            {hostAcademy.details.map((detail) => (
              <small key={detail}>{detail}</small>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
