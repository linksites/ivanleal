import { lineageMasters, lineageSources } from '@/data/lineage'

export function Lineage() {
  return (
    <section id="linhagem" className="lineage">
      <div className="sectionShell">
        <div className="sectionTitle compact">
          <p className="eyebrow">Linhagem técnica</p>
          <h2>Uma árvore que conecta tradição, competição e legado.</h2>
          <p>
            A história do Jiu-jitsu também é preservada por linhagens. Alexey Pickerell,
            mestre natural de Belém e fundador da Alexey BJJ nos Estados Unidos, segue a
            árvore técnica da equipe De La Riva, com raízes na escola Carlson Gracie.
          </p>
        </div>

        <div className="lineageTrack" aria-label="Árvore genealógica do Jiu-jitsu de Alexey Pickerell">
          {lineageMasters.map((master, index) => (
            <article className="lineageNode" key={master.name}>
              <span className="lineageIndex">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <p>{master.role}</p>
                <h3>{master.name}</h3>
                <small>{master.detail}</small>
              </div>
            </article>
          ))}
        </div>

        <div className="lineageNote">
          <strong>Registro histórico</strong>
          <p>
            Esta seção apresenta a linhagem pública relacionada a Alexey Pickerell e Ricardo
            De La Riva como referência histórica do Jiu-jitsu. Ela não altera a trajetória de
            Ivan Leal; reforça a importância da tradição, da memória e das conexões que
            atravessam gerações no tatame.
          </p>
          <div className="sourceLinks" aria-label="Referências da linhagem">
            {lineageSources.map((source) => (
              <a key={source.href} href={source.href} target="_blank" rel="noreferrer">
                {source.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
