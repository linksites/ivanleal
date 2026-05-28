'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Conquistas', href: '#conquistas' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Videos', href: '#videos' },
  { label: 'Seminarios', href: '#seminarios' },
  { label: 'Contato', href: '#contato' }
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 36)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <a
        className="brand"
        href="#home"
        aria-label="Ivan Leal JJ Home"
        onClick={(event) => {
          event.preventDefault()
          handleLinkClick('#home')
        }}
      >
        Ivan Leal<span>JJ</span>
      </a>

      <nav className="nav" aria-label="Navegacao principal">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(event) => {
              event.preventDefault()
              handleLinkClick(link.href)
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a className="navCta" href="#contato" onClick={(event) => {
        event.preventDefault()
        handleLinkClick('#contato')
      }}>
        Agendar seminario
      </a>

      <button
        className={`mobileMenuBtn ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen((open) => !open)}
        aria-label="Abrir menu"
        aria-expanded={isMenuOpen}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobileMenu ${isMenuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(event) => {
              event.preventDefault()
              handleLinkClick(link.href)
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
