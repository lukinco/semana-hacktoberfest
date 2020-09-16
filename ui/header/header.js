import styled from 'styled-components'
import { darken, rgba } from 'polished'

import { media } from 'ui'
import { menu } from 'resources/content'

export const Header = () => {
  return (
    <Wrapper>
      <div><Logo src='./hacktoberfest-black.svg' /></div>
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
  max-width: 134.5rem;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.background};

  ${media.lessThan('md')`
    height: 8rem;
  `}
`

const Logo = styled.img`
  display: block;
  width: 100%;
  height: auto;
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

    ${media.greaterThan('md')`
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: .1rem;
        background-color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
      }
    `}

    ${media.lessThan('md')`
      padding-right: 0;
      font-size: 1.2rem;
      white-space: nowrap;
    `}
  }

  &:not(:last-child) {
    ${media.lessThan('lg')`
      display: none;
    `}
  }
`
