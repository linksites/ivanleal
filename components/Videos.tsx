import Image from 'next/image'
import { videos } from '@/data/videos'

export function Videos() {
  return (
    <section id="videos" className="videos sectionShell">
      <div className="sectionTitle compact fadeInUp">
        <p className="eyebrow">Vídeos</p>
        <h2>Conteúdo pensado para conectar técnica, bastidores e autoridade.</h2>
        <span>@ivanlealjj</span>
      </div>
      <div className="videoGrid">
        {videos.map((video, index) => (
          <article className={`videoCard fadeInUp delay-${(index + 1) * 100}`} key={video.title}>
            <Image src={video.thumbnail} alt={video.title} width={640} height={420} sizes="(max-width: 900px) 100vw, 33vw" />
            <div className="play" aria-hidden="true">Play</div>
            <time>{video.duration}</time>
            <div className="videoInfo">
              <span>Reels · Aula · Bastidor</span>
              <h3>{video.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
