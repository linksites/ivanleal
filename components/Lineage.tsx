import Image from 'next/image'
import { lineageMasters, lineageSources } from '@/data/lineage'

export function Lineage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  return (
    <section id="linhagem" className="lineage">
      <div className="sectionShell">
        <div className="sectionTitle compact">
          <p className="eyebrow">Linhagem técnica</p>
          <h2>As raízes do jiu-jitsu em Belém e a linhagem de Ivan Leal</h2>
          <p>
            Ivan Leal e seu mestre, Alexey Pickerell, nasceram em Belém do Pará.
            Alexey se formou com Ricardo De La Riva, da escola de Carlson Gracie.
          </p>
        </div>

        <div className="lineageTrack" aria-label="Linhagem técnica de Ivan Leal">
          {lineageMasters.map((master, index) => (
            <article className="lineageNode" key={master.name}>
              <div className={`lineagePortrait lineagePortrait--${master.portrait}`}>
                <Image
                  src={`${basePath}/images/linhagem/${master.portrait}.webp`}
                  alt=""
                  width={320}
                  height={400}
                  loading="lazy"
                />
                <span className="lineageIndex">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div>
                <p>{master.role}</p>
                <h3>
                  <a href={master.href} target="_blank" rel="noreferrer">
                    {master.name}
                  </a>
                </h3>
                <small>{master.detail}</small>
              </div>
            </article>
          ))}
        </div>

        <details className="lineageCredits">
          <summary>Créditos das fotos</summary>
          <ul>
            <li>
              <a href="https://commons.wikimedia.org/wiki/File:Mitsuyo_Maeda_c1910.jpg" target="_blank" rel="noreferrer">
                Mitsuyo Maeda, c. 1910 · Wikimedia Commons / Biblioteca Nacional do Japão
              </a>
            </li>
            {lineageMasters.map(({ photoCredit }) => photoCredit && (
              <li key={photoCredit.href}>
                <a href={photoCredit.href} target="_blank" rel="noreferrer">{photoCredit.label}</a>
              </li>
            ))}
          </ul>
        </details>

        <details id="historia-linhagem" className="lineageHistory">
          <summary>Ler a história da linhagem</summary>
          <article className="lineageNote" aria-label="História do jiu-jitsu em Belém e no Rio">
            <header className="lineageHistoryLead">
              <div className="lineagePortrait">
                <Image
                  src={`${basePath}/images/linhagem/mitsuyo-maeda.webp`}
                  alt="Retrato histórico de Mitsuyo Maeda, o Conde Koma, por volta de 1910"
                  width={360}
                  height={623}
                  loading="lazy"
                />
              </div>
              <div>
                <h3>Conde Koma em Belém</h3>
                <p>Mitsuyo Maeda</p>
              </div>
            </header>
            <div>
              <p>
                Conhecido como Conde Koma, Mitsuyo Maeda foi um judoca japonês formado no
                Kodokan, a escola fundada por Jigoro Kano. Depois de viajar pelas Américas
                fazendo demonstrações e disputando lutas, chegou ao Brasil em 1914 e passou
                por Belém do Pará no ano seguinte. Na cidade, ensinou judô e participou de
                iniciativas ligadas à imigração japonesa na Amazônia.
              </p>
              <p>
                Maeda morreu em 1941 e foi sepultado no Cemitério Santa Izabel, em Belém.
                O mestre de karatê Yoshizo Machida ajudou a reconstruir o túmulo, que
                também recebeu a visita do professor de jiu-jitsu Muzio de Angelis.
                A cidade segue homenageando Maeda. Em fevereiro de 2026, atletas
                disputaram em Belém a Copa Conde Koma, organizada pela Federação de
                Jiu-Jitsu do Estado do Pará.
              </p>
              <h3 className="lineageJourneyTitle">De Belém ao Rio e de volta ao Pará</h3>
              <p>
                Carlos Gracie nasceu em Belém em 1902, filho de Gastão Gracie e Cezalina
                Pessoa Vasconcellos Gracie. Na cidade, ele teve contato com a escola de
                Maeda, onde o paraense Jacyntho Ferro também ensinava. A tradição familiar
                destaca Conde Koma, e pesquisas históricas discutem o papel de Ferro no
                aprendizado de Carlos.
              </p>
              <p>
                Em setembro de 1930, jornais do Rio de Janeiro registraram a abertura de
                uma academia de jiu-jitsu na Rua Marquês de Abrantes, no Flamengo. O
                paraense Donato Pires dos Reis dirigia a escola, com Carlos e George
                Gracie no ensino. Nos anos seguintes, Hélio Gracie ganhou projeção em
                lutas públicas.
              </p>
              <p>
                Décadas depois, Ricardo De La Riva começou a treinar em 1980 com Carlson
                Gracie e Marcos Vinícius. Recebeu a faixa preta em 1986 e desenvolveu a
                guarda que leva seu nome, conhecida pelo gancho por fora da perna do
                adversário.
              </p>
              <p>
                Alexey Pickerell, natural de Belém, começou a treinar com De La Riva no
                Rio em 1989. Em 1998, voltou a Belém e abriu sua primeira academia.
                Em 2007, mudou-se para o Maine, nos Estados Unidos. Sua passagem por
                Belém liga a escola de De La Riva à formação de Ivan Leal.
              </p>
            </div>
            <div className="sourceLinks" aria-label="Fontes da história e da linhagem">
              {lineageSources.map((source) => (
                <a key={source.href} href={source.href} target="_blank" rel="noreferrer">
                  {source.label}
                </a>
              ))}
            </div>
          </article>
        </details>
      </div>
    </section>
  )
}
