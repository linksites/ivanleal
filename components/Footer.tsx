export function Footer() {
  return (
    <footer className="footer fadeInUp">
      <div className="sectionShell footerInner">
        <div>
          <strong>Ivan Leal<span>JJ</span></strong>
          <p>Jiu-jitsu de pressão, técnica e legado.</p>
        </div>
        <nav aria-label="Links do rodapé">
          <a href="#sobre">Sobre</a>
          <a href="#galeria">Galeria</a>
          <a href="#videos">Vídeos</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="footerSocial">
          <a href="https://www.instagram.com/ivanlealjj/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            IG
          </a>
          <a href="https://wa.me/351934519135" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            WA
          </a>
        </div>
        <p>&copy; 2026 Ivan Leal JJ. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
