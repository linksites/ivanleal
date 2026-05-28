import { achievements } from '@/data/achievements'

const statTags = ['Dan', '2x', 'EU', '15+']

export function Stats() {
  return (
    <section className="stats sectionShell" aria-label="Destaques do atleta">
      {achievements.map((item, index) => (
        <article className={`statCard fadeInUp delay-${(index + 1) * 100}`} key={item.value}>
          <div className="statIcon" aria-hidden="true">{statTags[index]}</div>
          <div>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <small>{item.description}</small>
          </div>
        </article>
      ))}
    </section>
  )
}
