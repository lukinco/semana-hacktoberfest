import styled from 'styled-components'

import { media } from 'ui'

export const Wrapper = styled.section`
  margin-bottom: 19rem;
`

export const List = styled.div`
  display: grid;
  grid-gap: 5rem 3.2rem;
  margin-top: 5rem;

  ${media.greaterThan('md')`
    grid-template-columns: 1fr 1fr;
  `}
`

export const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 7rem;
`

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(2rem, 4vw, 2.6rem);
  font-weight: 600;
  margin: 4rem;
  width: 100%;
  max-width: 42rem;
  text-align: center;
`
