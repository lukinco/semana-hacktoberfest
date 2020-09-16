import styled from 'styled-components'
import { lighten } from 'polished'

import { Video, media } from 'ui'
import { playlist } from 'resources/content'

export const Playlist = () => {
  return (
    <Wrapper>
      <Title>{playlist.title}</Title>
      <Grid>
        {playlist.items.map(({ title, videoId }) => (
          <Video
            key={videoId}
            title={title}
            videoId={videoId}
          />
        ))}
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 6rem 10.5rem;
  background-color: ${({ theme }) => lighten(0.07, theme.colors.background)};

  ${media.lessThan('md')`
    padding: 6rem 1.5rem;
  `}
`

const Title = styled.section`
  font-size: 3.2rem;
  padding-left: 2.5rem;
  position: relative;
  font-weight: 600;
  margin-bottom: 6.5rem;

  &:before {
    content: '';
    position: absolute;
    right: 100%;
    top: calc(50% - .1rem);
    height: .2rem;
    width: 3.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(36rem, 1fr));
  grid-gap: 6.5rem 11.5rem;
`
