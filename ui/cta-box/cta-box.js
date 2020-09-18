import styled from 'styled-components'
import t from 'prop-types'
import { lighten } from 'polished'

import { Button, media } from 'ui'

export const CTABox = ({ text, icon: Icon, cta, ctaUrl }) => {
  return (
    <Wrapper>
      {Icon && <Icon />}
      <Text>{text}</Text>
      <Button as='a' href={ctaUrl}>{cta}</Button>
    </Wrapper>
  )
}

CTABox.propTypes = {
  text: t.string.isRequired,
  icon: t.elementType.isRequired,
  cta: t.string.isRequired,
  ctaUrl: t.string.isRequired,
}

const Wrapper = styled.div`
  padding: 7.5rem 3rem 3rem;
  background-color: ${({ theme }) => lighten(0.07, theme.colors.background)};
  width: 100%;
  text-align: center;

  > a {
    display: block;
    width: 100%;
  }

  ${media.greaterThan('sm')`
    max-width: 30rem;
  `}

  ${media.lessThan('sm')`
    &:not(:first-child) {
      margin-top: 5rem;
    }
  `}
`

const Text = styled.h4`
  font-size: clamp(1.6rem, 4vw, 2rem);
  margin: 1.6rem 0 5.7rem;
  font-weight: 400;
`
