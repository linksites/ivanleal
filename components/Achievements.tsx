import Image from 'next/image'

const bullets = [
  'Medalhista em campeonatos nacionais e internacionais',
  'Representante do Jiu-Jitsu brasileiro na Europa',
  'Experiencia em competicoes de alto nivel',
  'Formacao de atletas e alunos entre Lisboa e Brasil'
]

export function Achievements() {
  return (
    <section id="conquistas" className="achievements">
      <div className="sectionShell achievementInner">
        <div className="achievementMedia fadeInLeft">
          <Image src="/images/ivan-podium-european.jpeg" alt="Ivan Leal no podio European Jiu-Jitsu" width={920} height={720} />
        </div>
        <div className="sectionCopy darkCopy fadeInRight delay-200">
          <p className="eyebrow">Conquistas</p>
          <h2>Resultados que refletem dedicacao, metodo e proposito.</h2>
          <p>
            A trajetoria competitiva reforca a autoridade em cada aula, seminario
            e projeto. O que aparece no podium nasce de rotina, estrategia e leitura
            tecnica do combate.
          </p>
          <div className="bulletGrid">
            {bullets.map((item) => <p key={item}>{item}</p>)}
          </div>
          <a className="button secondary" href="#contato">Convidar para seminario</a>
        </div>
      </div>
    </section>
  )
}
