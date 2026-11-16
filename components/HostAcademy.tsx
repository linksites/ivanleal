import Image from 'next/image'
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
          <Image
            className="gbMark"
            src={`${basePath}/images/gracie-barra-paco-de-arcos.jpeg`}
            alt=""
            width={104}
            height={104}
          />
          <p className="eyebrow">Base em Portugal</p>
          <h2>{hostAcademy.name}</h2>
          <p>{hostAcademy.dedication}</p>
          <p>Rua Cândido dos Reis, nº 1, 2770-025 Paço de Arcos</p>
          <div className="hostAcademyActions">
            <a className="button primary" href="https://www.graciebarra-pa.com/horarios" target="_blank" rel="noreferrer">
              Ver horários das aulas
            </a>
            <a className="button outline" href={hostAcademy.teamUrl} target="_blank" rel="noreferrer">
              Ver equipe
            </a>
          </div>
        </div>

        <div className="hostAcademyContent fadeInRight delay-200">
          <span>{hostAcademy.location}</span>
          <h3>Treino e formação em Paço de Arcos</h3>
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
