import Image from 'next/image'
import { gallery } from '@/data/gallery'

export function Gallery() {
  return (
    <section id="galeria" className="gallery sectionShell">
      <div className="sectionTitle fadeInUp">
        <div>
          <p className="eyebrow">Galeria</p>
          <h2>Conquistas reais, bastidores e presença de competidor.</h2>
        </div>
        <p>
          Um recorte visual para comunicar autoridade sem artifício: medalhas,
          pódio, preparação e momentos que sustentam a marca Ivan Leal JJ.
        </p>
      </div>
      <div className="galleryGrid">
        {gallery.map((image, index) => (
          <figure className={`${index === 1 ? 'wide' : ''} fadeInUp delay-${(index % 4) * 100 + 100}`} key={image.src}>
            <Image src={image.src} alt={image.alt} width={640} height={760} sizes="(max-width: 768px) 100vw, 33vw" />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
