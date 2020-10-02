import { TextBox } from 'ui'
import { about } from 'resources/content'

import { Wrapper } from './styles'

export const About = () => {
  return (
    <Wrapper>
      {about.map(({ id, title, text, invert }) => (
        <TextBox
          key={id}
          id={id}
          title={title}
          text={text}
          invert={invert}
        />
      ))}
    </Wrapper>
  )
}
