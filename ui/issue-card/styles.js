import styled from 'styled-components'
import { lighten, rgba } from 'polished'

export const Card = styled.a`
  padding: 3.5rem;
  background-color: ${({ theme }) => lighten(0.07, theme.colors.background)};
  transition: background-color .25s ease;
  display: block;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => lighten(0.15, theme.colors.background)};
  }
`

export const Repo = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Position = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`

export const Content = styled.div`
  padding: 2rem 0 3rem;
`

export const Title = styled.h4`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: .5rem;
`

export const Text = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Info = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => rgba(theme.colors.text, 0.5)};

  &:not(:last-child) {
    margin-right: 2rem;
  }
`
