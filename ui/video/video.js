import styled from 'styled-components'
import t from 'prop-types'

export const Video = ({ title, videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`

  return (
    <article>
      <Title>{title}</Title>
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
      </VideoWrapper>
    </article>
  )
}

Video.propTypes = {
  title: t.string.isRequired,
  videoId: t.string.isRequired,
}

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;

  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Title = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  margin-bottom: 1.5rem;
`
