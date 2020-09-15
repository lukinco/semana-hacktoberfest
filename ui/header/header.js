import styled from 'styled-components'
import { darken, rgba } from 'polished'

import { menu } from 'resources/content'

export const Header = () => {
  return (
    <Wrapper>
      <Logo src='./hacktoberfest-black.svg' />
      <Navigation>
        {menu.map(({ title, url }) => (
          <NavItem key={title} href={url}>{title}</NavItem>
        ))}
      </Navigation>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 12rem;
  padding: 4rem 1.5rem;
  width: 100%;
  max-width: 131.5rem;
  margin: 0 auto;
`

const Logo = styled.img`
  display: block;
  width: 100%;
  max-width: 22rem;
`

const Navigation = styled.nav`
  display: inline-flex;
`

const NavItem = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: 1.6rem;
  padding-right: 2.5rem;
  position: relative;
  transition: color .25s ease;
  color: ${({ theme }) => theme.colors.text};

  &:focus,
  &:hover {
    color: ${({ theme }) => darken(0.15, theme.colors.text)};
  }

  &:last-child {
    padding-left: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};

    &:focus,
    &:hover {
      color: ${({ theme }) => darken(0.15, theme.colors.primary)};
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: .1rem;
      background-color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
    }
  }
`
