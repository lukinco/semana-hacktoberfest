import styled from 'styled-components'
import { lighten } from 'polished'

import { media } from 'ui'

export const Wrapper = styled.section`
  padding: 6rem 10.5rem;
  background-color: ${({ theme }) => lighten(0.07, theme.colors.background)};
  margin-bottom: 19rem;

  ${media.lessThan('md')`
    padding: 6rem 1.5rem;
  `}
`

export const Title = styled.section`
  font-size: clamp(2.4rem, 4vw, 3.2rem);
  padding-left: 2.5rem;
  position: relative;
  font-weight: 600;
  margin-bottom: 6.5rem;

  &:before {
    content: '';
    position: absolute;
    top: calc(50% - .1rem);
    height: .2rem;
    width: 3.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  ${media.greaterThan('md')`
    &:before {
      right: 100%;
    }
  `}

  ${media.lessThan('md')`
    padding-left: 6rem;

    &:before {
      left: 0;
    }
  `}
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 6.5rem 11.5rem;

  ${media.greaterThan('sm')`
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  `}
`
