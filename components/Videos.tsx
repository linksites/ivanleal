import { videos, type VideoItem } from '@/data/videos'

export function Videos() {
  return (
    <section id="videos" className="videos sectionShell">
      <div className="sectionTitle compact fadeInUp">
        <p className="eyebrow">Vídeos</p>
        <h2>Lutas de Ivan Leal</h2>
        <span>@ivanlealjj</span>
      </div>
      <div className="videoGrid">
        {videos.map((video, index) => (
          <EmbedCard key={video.youtubeId} video={video} index={index} />
        ))}
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
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <div className="videoInfo">
        <span>{video.label}</span>
        <h3>{video.title}</h3>
        <a className="videoLink" href={`https://www.youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noopener noreferrer">
          Assistir no YouTube ↗
        </a>
      </div>
    </article>
  )
}
