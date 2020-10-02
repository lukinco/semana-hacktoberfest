import { menu } from 'resources/content'

import { motionWrapper, Wrapper, Logo, Navigation, NavItem } from './header.styles'

export const Header = () => {
  return (
    <Wrapper
      initial='hidden'
      animate='visible'
      variants={motionWrapper}
    >
      <div><Logo src='./hacktoberfest-black.svg' /></div>
      <Navigation>
        {menu.map(({ title, url }) => (
          <NavItem key={title} href={url}>{title}</NavItem>
        ))}
      </Navigation>
    </Wrapper>
  )
}
