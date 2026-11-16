import Image from 'next/image'
import { gallery } from '@/data/gallery'

export function Gallery() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  return (
    <section id="galeria" className="gallery sectionShell">
      <div className="sectionTitle fadeInUp">
        <div>
          <p className="eyebrow">Galeria</p>
          <h2>No tatame e no pódio</h2>
        </div>
        <p>
          Registros de campeonatos e medalhas da trajetória de Ivan Leal.
        </p>
      </div>
      <div className="galleryGrid">
        {gallery.map((image, index) => (
          <figure className={`fadeInUp delay-${(index % 4) * 100 + 100}`} key={image.src}>
            <Image src={`${basePath}${image.src}`} alt={image.alt} width={640} height={760} sizes="(max-width: 620px) 100vw, (max-width: 1020px) 50vw, 33vw" />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
