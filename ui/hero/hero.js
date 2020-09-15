import styled from 'styled-components'
import { darken, rgba } from 'polished'
import { hero } from 'resources/content'

export const Hero = () => {
  return (
    <Wrapper>
      <div>
        <Title>{hero.title}</Title>
        <Text>{hero.text}</Text>
        <CallToAction>{hero.cta}</CallToAction>
      </div>
      <img src='./hero.svg' alt={hero.alt} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 14.5rem;
  height: 100vh;
  padding: 20rem 0;
`

const Title = styled.h2`
  font-size: 4.2rem;
  font-weight: 700;
  margin: 0;
  padding: 5rem 0 2rem;
`

const Text = styled.p`
  margin: 0;
  padding-bottom: 3rem;
  font-size: 2.2rem;
  line-height: 1.5;
  color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
`

const CallToAction = styled.a`
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 600;
  border-radius: .3rem;
  display: inline-block;
  padding: 1.5rem 3rem;
  transition: background-color .25s ease;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => darken(0.15, theme.colors.primary)};
  }
`
