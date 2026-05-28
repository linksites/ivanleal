import Image from 'next/image'

const bullets = [
  'Medalhista em campeonatos nacionais e internacionais',
  'Representante do Jiu-Jitsu brasileiro na Europa',
  'Experiência em competições de alto nível',
  'Formação de atletas e alunos entre Lisboa e Brasil'
]

export function Achievements() {
  return (
    <section id="conquistas" className="achievements">
      <div className="sectionShell achievementInner">
        <div className="achievementMedia fadeInLeft">
          <Image src="/images/ivan-podium-european.jpeg" alt="Ivan Leal no pódio do European Jiu-Jitsu" width={920} height={720} />
        </div>
        <div className="sectionCopy darkCopy fadeInRight delay-200">
          <p className="eyebrow">Conquistas</p>
          <h2>Resultados que refletem dedicação, método e propósito.</h2>
          <p>
            A trajetória competitiva reforça a autoridade em cada aula, seminário
            e projeto. O que aparece no pódio nasce de rotina, estratégia e leitura
            técnica do combate.
          </p>
          <div className="bulletGrid">
            {bullets.map((item) => <p key={item}>{item}</p>)}
          </div>
          <a className="button secondary" href="#contato">Convidar para seminário</a>
        </div>
      </div>
    </section>
  )
}
