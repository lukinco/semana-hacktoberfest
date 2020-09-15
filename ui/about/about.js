import styled from 'styled-components'

import { TextBox } from 'ui'
import { about } from 'resources/content'

export const About = () => {
  return (
    <Wrapper>
      {about.map(({ title, text, invert }) => (
        <TextBox
          key={title}
          title={title}
          text={text}
          invert={invert}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  > *:not(:first-child) {
    margin-top: 19rem;
  }
`
