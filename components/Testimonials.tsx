const pillars = [
  ['Pressão', 'Controle de distância, quedas, passagem e finalizações conectadas por tomada de decisão.'],
  ['Técnica', 'Ajustes simples, repetíveis e testados em competição para alunos de diferentes níveis.'],
  ['Legado', 'Uma metodologia que preserva a raiz do Jiu-Jitsu brasileiro com leitura moderna de treino.']
]

export function Testimonials() {
  return (
    <section id="seminarios" className="testimonials sectionShell">
      <div className="sectionTitle compact fadeInUp">
        <p className="eyebrow">Seminários e metodologia</p>
        <h2>Mais que técnica. Uma experiência de evolução no tatame.</h2>
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
    </section>
  )
}
