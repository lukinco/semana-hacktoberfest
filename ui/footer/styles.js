import styled from 'styled-components'

import { media } from 'ui'

export const Wrapper = styled.footer`
  height: 20rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  clip-path: polygon(0% 5rem, 100% 0%, 100% 100%, 0% 100%);
`

export const Content = styled.div`
  padding-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
`

export const Copyright = styled.p`
  font-size: 1.6rem;
  font-weight: 600;

  ${media.lessThan('sm')`
    order: 3;
  `}
`

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > *:not(:last-child) {
    margin-right: 2.5rem;
  }
`
