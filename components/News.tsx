import { newsItems } from '@/data/news'
import { CircuitNews } from './CircuitNews'

export function News() {
  const highlights = newsItems.filter(item => item.featured).slice(0, 3)
  const archive = newsItems.filter(item => !highlights.includes(item))
  return (
    <section id="noticias" className="news sectionShell">
      <div className="sectionTitle fadeInUp">
        <div>
          <p className="eyebrow">Notícias e referências</p>
          <h2>Resultados e calendário do jiu-jitsu</h2>
        </div>
        <p>
          Acompanhe competições em Portugal e no circuito internacional.
        </p>
      </div>

      <div className="newsLayout">
        <div className="newsGrid">
          {highlights.map((item, index) => (
            <article className="newsCard fadeInUp" style={{ animationDelay: `${(index + 1) * 0.1}s` }} key={item.title}>
              <div className="newsMeta">
                <span>{item.category}</span>
                {item.date && <time dateTime={item.date.iso}>{item.date.label}</time>}
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.source}
              </a>
            </article>
          ))}
        </div>
        <CircuitNews />
        {archive.length > 0 && (
          <details className="newsArchive">
            <summary>Mais notícias e referências ({archive.length})</summary>
            <ul>
              {archive.map(item => (
                <li key={item.title}>
                  <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>
                  <small>{item.source}{item.date && <> · <time dateTime={item.date.iso}>{item.date.label}</time></>}</small>
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </section>
  )
}
