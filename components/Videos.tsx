import Image from 'next/image'
import { videos, type VideoItem } from '@/data/videos'

export function Videos() {
  return (
    <section id="videos" className="videos sectionShell">
      <div className="sectionTitle compact fadeInUp">
        <p className="eyebrow">Vídeos</p>
        <h2>Conteúdo pensado para conectar técnica, bastidores e autoridade.</h2>
        <span>@ivanlealjj</span>
      </div>
      <div className="videoGrid">
        {videos.map((video, index) =>
          video.youtubeId ? (
            <EmbedCard key={video.title} video={video} index={index} />
          ) : (
            <ThumbnailCard key={video.title} video={video} index={index} />
          )
        )}
      </div>
    </section>
  )
}

function EmbedCard({ video, index }: { video: VideoItem; index: number }) {
  return (
    <article className={`videoCard videoCard--embed fadeInUp delay-${(index + 1) * 100}`}>
      <iframe
        className="videoEmbed"
        src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <div className="videoInfo">
        <span>{video.label}</span>
        <h3>{video.title}</h3>
      </div>
    </article>
  )
}

function ThumbnailCard({ video, index }: { video: VideoItem; index: number }) {
  return (
    <article className={`videoCard fadeInUp delay-${(index + 1) * 100}`}>
      <Image
        src={video.thumbnail}
        alt={video.title}
        width={640}
        height={420}
        sizes="(max-width: 900px) 100vw, 33vw"
      />
      <div className="play" aria-hidden="true">Play</div>
      {video.duration && <time>{video.duration}</time>}
      <div className="videoInfo">
        <span>{video.label}</span>
        <h3>{video.title}</h3>
      </div>
    </article>
  )
}
