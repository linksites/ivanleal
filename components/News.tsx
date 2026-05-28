import { newsItems, newsletterChannels } from '@/data/news'

export function News() {
  return (
    <section id="noticias" className="news sectionShell">
      <div className="sectionTitle fadeInUp">
        <div>
          <p className="eyebrow">Notícias do Jiu-jitsu</p>
          <h2>Um radar para acompanhar o movimento da arte suave.</h2>
        </div>
        <p>
          Curadoria de fontes, calendários e referências para atletas, alunos e
          academias que acompanham o Jiu-jitsu dentro e fora do tatame.
        </p>
      </div>

      <div className="newsLayout">
        <div className="newsGrid">
          {newsItems.map((item, index) => (
            <article className="newsCard fadeInUp" style={{ animationDelay: `${(index + 1) * 0.1}s` }} key={item.title}>
              <div className="newsMeta">
                <span>{item.category}</span>
                <time>{item.date}</time>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <a href={item.href} target="_blank" rel="noreferrer">
                Ler em {item.source}
              </a>
            </article>
          ))}
        </div>

        <aside className="newsletterBox fadeInRight delay-200" aria-label="Newsletter de notícias do Jiu-jitsu">
          <span className="ctaLabel">Newsletter</span>
          <h3>Receba o radar do tatame.</h3>
          <p>
            Curadoria para acompanhar campeonatos, seminários, técnica e
            bastidores do Jiu-jitsu pelos canais oficiais Ivan Leal JJ.
          </p>
          <form className="newsletterForm">
            <label htmlFor="newsletter-email">E-mail</label>
            <div>
              <input id="newsletter-email" name="email" type="email" placeholder="seuemail@exemplo.com" />
              <button type="button" aria-disabled="true">Cadastrar</button>
            </div>
          </form>
          <div className="newsletterTags">
            {newsletterChannels.map((channel) => (
              <small key={channel}>{channel}</small>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
