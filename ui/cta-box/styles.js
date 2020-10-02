import styled from 'styled-components'
import { lighten } from 'polished'

import { media } from 'ui'

export const Wrapper = styled.div`
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

export const Text = styled.h4`
  font-size: clamp(1.6rem, 4vw, 2rem);
  margin: 1.6rem 0 5.7rem;
  font-weight: 400;
`
