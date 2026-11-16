const pillars = [
  ['Pressão', 'Controle da distância, quedas e passagens de guarda para avançar até a finalização.'],
  ['Técnica', 'Ajustes de posição e de pegada que podem ser praticados por alunos de diferentes níveis.'],
  ['Tomada de decisão', 'Leitura da reação do adversário para escolher quando avançar, estabilizar ou mudar de posição.']
]

export function Testimonials({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? 'h1' : 'h2'
  const message = 'Olá, mestre Ivan! Gostaria de consultar a disponibilidade para um seminário. Academia: [nome]. Cidade: [cidade]. Data pretendida: [data].'
  return (
    <section id="seminarios" className="testimonials sectionShell">
      <div className="sectionTitle compact fadeInUp">
        <p className="eyebrow">Seminários e metodologia</p>
        <Heading>{standalone ? 'Seminários com o mestre Ivan Leal' : 'O que Ivan ensina nos seminários'}</Heading>
      </div>
      <div className="testimonialGrid">
        {pillars.map(([title, text], index) => (
          <article className={`quoteCard fadeInUp delay-${(index + 1) * 100}`} key={title}>
            <span>{`0${index + 1}`}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="seminarActions">
        <a className="button primary" href={`https://wa.me/351934519135?text=${encodeURIComponent(message)}`}>Consultar disponibilidade no WhatsApp</a>
      </div>
    </section>
  )
}
