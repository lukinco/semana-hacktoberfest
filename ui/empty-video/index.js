import { YoutubeIcon } from 'ui'

import { Wrapper, Content } from './styles'

export const EmptyVideo = () => {
  return (
    <Wrapper>
      <div>
        <Content>
          <YoutubeIcon />
          <p>Disponível em breve</p>
        </Content>
      </div>
    </Wrapper>
  )
}
