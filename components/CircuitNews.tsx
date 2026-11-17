'use client'

import { useEffect, useState } from 'react'
import edition from '@/data/circuit-news.json'

const source = 'https://raw.githubusercontent.com/linksites/ivanleal/main/data/circuit-news.json'
const formatDate = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium', timeZone: 'UTC' })

export function CircuitNews() {
  const [items, setItems] = useState(edition)

  useEffect(() => {
    const controller = new AbortController()
    async function refresh() {
      try {
        const response = await fetch(source, { signal: controller.signal })
        if (!response.ok) return
        const latest = await response.json()
        if (Array.isArray(latest) && latest.length && latest.every(item =>
          typeof item?.title === 'string' && /^https:\/\/(www\.)?bjjheroes\.com\//.test(item.href) &&
          /^\d{4}-\d{2}-\d{2}$/.test(item.date) && Number.isFinite(Date.parse(item.date))
        )) setItems(latest.slice(0, 4))
      } catch {
        // A edição incluída no site continua disponível se o GitHub estiver offline.
      }
    }
    void refresh()
    return () => controller.abort()
  }, [])

  return (
    <details className="newsArchive">
      <summary>Últimas do BJJ Heroes ({items.length})</summary>
      <ul>
        {items.map(item => (
          <li key={item.href}>
            <a href={item.href} lang="en" hrefLang="en" target="_blank" rel="noreferrer">{item.title}</a>
            <small>BJJ Heroes · Em inglês · <time dateTime={item.date}>{formatDate.format(new Date(item.date))}</time></small>
          </li>
        ))}
      </ul>
    </details>
  )
}
