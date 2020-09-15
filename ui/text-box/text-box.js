import t from 'prop-types'
import styled from 'styled-components'
import { rgba } from 'polished'

export const TextBox = ({ title, text, invert }) => {
  return (
    <Wrapper>
      <Title invert={invert}>{title}</Title>
      <Text>{text}</Text>
    </Wrapper>
  )
}

TextBox.propTypes = {
  title: t.string.isRequired,
  text: t.string.isRequired,
  invert: t.bool,
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  font-size: 3.6rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  padding-left: 6rem;
  margin-bottom: 2.5rem;

  &:before {
    content: '';
    position: absolute;
    height: 0.2rem;
    width: 3.5rem;
    left: 0;
    top: calc(50% - 0.1rem);
    background-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ invert }) => invert && `
    align-self: flex-end;
  `};
`

const Text = styled.p`
  font-size: 2rem;
  line-height: 1.7;
  color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
`
