import styled from 'styled-components'

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  transition: color .25s ease;

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.third};
  }
`
