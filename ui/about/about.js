import styled from 'styled-components'

import { TextBox } from 'ui'
import { about } from 'resources/content'

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

const Wrapper = styled.section`
  > * {
    margin-bottom: 19rem;
  }
`
