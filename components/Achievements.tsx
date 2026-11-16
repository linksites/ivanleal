import Image from 'next/image'

export function Achievements() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  return (
    <section id="conquistas" className="achievements">
      <div className="sectionShell achievementInner">
        <div className="achievementMedia fadeInLeft">
          <Image src={`${basePath}/images/ivan-podium-european.jpeg`} alt="Ivan Leal no pódio do Campeonato Europeu" width={1166} height={1536} />
        </div>
        <div className="sectionCopy darkCopy fadeInRight delay-200">
          <p className="eyebrow">Conquistas</p>
          <h2>Dois ouros no Europeu IBJJF 2026</h2>
          <p>
            Em Odivelas, Ivan Leal representou a Gracie Barra e venceu no superpesado
            e no absoluto da faixa preta Master 4.
          </p>
          <div className="achievementActions">
            <a className="button outline" href="https://ibjjf.com/events/2926/results" target="_blank" rel="noreferrer">
              Ver resultados do Europeu
            </a>
            <a className="button secondary" href={`${basePath}/seminarios/`}>Convidar para seminário</a>
          </div>
        </div>
      </div>
      <article id="nacional-open" className="sectionShell achievementResult darkCopy">
        <p className="eyebrow">Nacional Open de Portugal 2026</p>
        <h3>Ivan Leal conquista o ouro no absoluto em Odivelas</h3>
        <p>
          O Nacional Open de Jiu-Jitsu ocorreu em 7 e 8 de novembro de 2026 no
          Pavilhão Multiusos de Odivelas, em Portugal. Ivan Martins Leal competiu
          no dia 7 pela Gracie Barra, na faixa preta Master 4 com quimono.
        </p>
        <p>
          No absoluto, Ivan venceu Samuel Fernandes da Silva na semifinal e Roberto
          Gayer Lima na final. No superpesado (até 100,5 kg), a chave oficial
          registra o primeiro lugar de Ivan, único inscrito na categoria, sem luta.
        </p>
        <p>
          Na edição de 2025, Ivan conquistou ouro no superpesado e prata no absoluto.
        </p>
        <div className="achievementActions" aria-label="Fontes oficiais do Nacional Open">
          <a className="button outline" href="https://www.bjjcompsystem.com/tournaments/3423/categories/3005376" target="_blank" rel="noreferrer">
            Chave do absoluto
          </a>
          <a className="button outline" href="https://www.bjjcompsystem.com/tournaments/3423/categories/3004582" target="_blank" rel="noreferrer">
            Chave do superpesado
          </a>
          <a className="button outline" href="https://www.fpjjb.com/nacopen26" target="_blank" rel="noreferrer">
            Edital de 2026
          </a>
          <a className="button outline" href="https://ibjjf.com/events/2989/results" target="_blank" rel="noreferrer">
            Resultados de 2025
          </a>
        </div>
      </article>
    </section>
  )
}
