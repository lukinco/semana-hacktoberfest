
import { playlist } from 'resources/content'
import { Video } from 'ui'

import { Wrapper, Title, Grid } from './playlist.styles'

export const Playlist = () => {
  return (
    <Wrapper>
      <Title>{playlist.title}</Title>
      <Grid>
        {playlist.items.map(({ id, title, videoId }) => (
          <Video
            key={id}
            title={title}
            videoId={videoId}
          />
        ))}
      </Grid>
    </Wrapper>
  )
}
