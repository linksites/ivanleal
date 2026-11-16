'use client'

import { useEffect, useRef, useState } from 'react'

const links = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Academia', href: '#base-portugal' },
  { label: 'Linhagem', href: '#linhagem' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Vídeos', href: '#videos' },
  { label: 'Notícias', href: '#noticias' },
  { label: 'Conquistas', href: '#conquistas' },
  { label: 'Seminários', href: '#seminarios' },
  { label: 'Contato', href: '#contato' }
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')

  useEffect(() => {
    const sections = links.flatMap(({ href }) => {
      const section = document.getElementById(href.slice(1))
      return section ? [{ href, section }] : []
    }).reverse()
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36)
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
      const current = atBottom ? sections[0] : sections.find(({ section }) => section.getBoundingClientRect().top <= 140)
      setActiveHref(current?.href ?? '#home')
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <a
        className="brand"
        href="#home"
        aria-label="Ivan Leal JJ, início"
        onClick={handleLinkClick}
      >
        <span className="brandText">Ivan Leal<span>JJ</span></span>
        <span className="brandBelt" aria-hidden="true">
          <span className="brandBeltPatch" />
        </span>
      </a>

      <nav className="nav" aria-label="Navegação principal">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-current={activeHref === link.href ? 'location' : undefined}
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a className="navCta" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/seminarios/`} onClick={handleLinkClick}>
        Convidar para seminário
      </a>

      <button
        ref={menuButtonRef}
        className={`mobileMenuBtn ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen((open) => !open)}
        aria-controls="mobile-menu"
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isMenuOpen}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      <nav inert={!isMenuOpen} id="mobile-menu" className={`mobileMenu ${isMenuOpen ? 'open' : ''}`} aria-label="Navegação móvel">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-current={activeHref === link.href ? 'location' : undefined}
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
