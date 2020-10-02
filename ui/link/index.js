import styled from 'styled-components'

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  overflow: hidden;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    height: 0.2rem;
    transition: all .25s ease;
    width: 100%;
    z-index: -1;
  }

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.text};

    &:before {
      height: 100%;
    }
  }
`
