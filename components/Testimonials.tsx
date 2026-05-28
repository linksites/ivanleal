const pillars = [
  ['Pressao', 'Controle de distancia, quedas, passagem e finalizacoes conectadas por tomada de decisao.'],
  ['Tecnica', 'Ajustes simples, repetiveis e testados em competicao para alunos de diferentes niveis.'],
  ['Legado', 'Uma metodologia que preserva a raiz do Jiu-Jitsu brasileiro com leitura moderna de treino.']
]

export function Testimonials() {
  return (
    <section id="seminarios" className="testimonials sectionShell">
      <div className="sectionTitle compact fadeInUp">
        <p className="eyebrow">Seminarios e metodologia</p>
        <h2>Mais que tecnica. Uma experiencia de evolucao no tatame.</h2>
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
