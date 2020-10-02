import styled from 'styled-components'
import { media } from 'ui'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 74rem;
  margin: 0 auto;
  padding: 8rem 0 13rem;

  ${media.greaterThan('sm')`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`
