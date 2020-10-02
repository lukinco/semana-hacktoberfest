import t from 'prop-types'

import { EmptyVideo } from 'ui'
import { Title, VideoWrapper } from './styles'

export const Video = ({ title, videoId }) => {
  const videoUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null

  return (
    <article>
      <Title>{title}</Title>
      {!videoUrl && <EmptyVideo />}
      {videoUrl &&
        <VideoWrapper>
          <iframe
            title={title}
            width='360'
            height='198'
            src={videoUrl}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </VideoWrapper>}
    </article>
  )
}

Video.propTypes = {
  title: t.string.isRequired,
  videoId: t.string,
}
