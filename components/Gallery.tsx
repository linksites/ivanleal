'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { gallery } from '@/data/gallery'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function Gallery() {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [visible, setVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(true)
  const frame = useRef<HTMLDivElement>(null)
  const touch = useRef<{ x: number; y: number } | null>(null)
  const photo = gallery[index]

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => setPlaying(!motion.matches)
    const syncTab = () => setActiveTab(!document.hidden)
    syncMotion()
    syncTab()
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    if (frame.current) observer.observe(frame.current)
    motion.addEventListener('change', syncMotion)
    document.addEventListener('visibilitychange', syncTab)
    return () => {
      observer.disconnect()
      motion.removeEventListener('change', syncMotion)
      document.removeEventListener('visibilitychange', syncTab)
    }
  }, [])

  useEffect(() => {
    if (!playing || !visible || !activeTab) return
    const timer = window.setTimeout(() => setIndex(current => (current + 1) % gallery.length), 5000)
    return () => window.clearTimeout(timer)
  }, [index, playing, visible, activeTab])

  function select(position: number) {
    setPlaying(false)
    setIndex((position + gallery.length) % gallery.length)
  }

  return (
    <section id="galeria" className="gallery sectionShell" aria-labelledby="gallery-title">
      <div className="sectionTitle fadeInUp">
        <div>
          <p className="eyebrow">Galeria</p>
          <h2 id="gallery-title">No tatame e no pódio</h2>
        </div>
      </div>
      <div ref={frame} className="storyAlbum" role="region" aria-label="Fotos de Ivan Leal" aria-roledescription="carrossel"
        onFocusCapture={event => {
          if (event.target.matches(':focus-visible')) setPlaying(false)
        }}
        onKeyDown={event => {
          if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
          event.preventDefault()
          select(index + (event.key === 'ArrowRight' ? 1 : -1))
        }}>
        <div className="storyPhoto"
          onTouchStart={event => {
            const point = event.touches[0]
            touch.current = { x: point.clientX, y: point.clientY }
          }}
          onTouchCancel={() => { touch.current = null }}
          onTouchEnd={event => {
            if (!touch.current) return
            const dx = event.changedTouches[0].clientX - touch.current.x
            const dy = event.changedTouches[0].clientY - touch.current.y
            touch.current = null
            if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) select(index + (dx < 0 ? 1 : -1))
          }}>
          <Image key={photo.src} src={basePath + photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 100vw, 60vw" />
        </div>
        <div className="storyPanel">
          <div className="storySegments" aria-label="Escolher foto">
            {gallery.map((item, position) => (
              <button key={item.src} aria-label={`Foto ${position + 1}: ${item.caption}`} aria-current={position === index || undefined}
                onClick={() => select(position)} />
            ))}
          </div>
          <div aria-live={playing ? 'off' : 'polite'} aria-atomic="true">
            <small>Foto {index + 1} de {gallery.length}</small>
            <h3>{photo.caption}</h3>
          </div>
          <div className="storyControls">
            <button onClick={() => setPlaying(value => !value)}>{playing ? 'Pausar' : 'Reproduzir'}</button>
            <button aria-label="Foto anterior" onClick={() => select(index - 1)}>←</button>
            <button aria-label="Próxima foto" onClick={() => select(index + 1)}>→</button>
          </div>
        </div>
      </div>
    </section>
  )
}
