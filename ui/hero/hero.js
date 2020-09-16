import styled from 'styled-components'
import { darken, rgba } from 'polished'

import { media } from 'ui'
import { hero } from 'resources/content'

export const Hero = () => {
  return (
    <Wrapper>
      <div>
        <Title>{hero.title}</Title>
        <Text>{hero.text}</Text>
        <CallToAction>{hero.cta}</CallToAction>
      </div>
      <Illustration src='./hero.svg' alt={hero.alt} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  align-items: center;
  padding: 12rem 0 9rem;

  ${media.greaterThan('md')`
    height: 100vh;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 14.5rem;
    padding: 20rem 0 20rem;
  `}
`

const Illustration = styled.img`
  display: none;
  width: 100%;

  ${media.greaterThan('md')`
    display: block;
  `}
`

const Title = styled.h2`
  font-size: clamp(2.6rem, 7vw, 4.2rem);
  font-weight: 700;
  padding: 5rem 0 2rem;
`

const Text = styled.p`
  padding-bottom: 3rem;
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  line-height: 1.5;
  color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
`

const CallToAction = styled.a`
  text-decoration: none;
  font-size: clamp(1.4rem, 4vw, 1.8rem);
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
