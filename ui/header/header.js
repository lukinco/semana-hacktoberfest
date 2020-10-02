import { menu } from 'resources/content'
import { smoothScrollTo } from 'utils/smoothScrollTo'

import { motionWrapper, Wrapper, Logo, Navigation, NavItem } from './header.styles'

export const Header = () => {
  function scrollNavigation (e, url) {
    e.preventDefault()
    const to = document.querySelector(url).offsetTop

    smoothScrollTo(0, to)
    window.history.pushState('', '', [url])
  }

  return (
    <Wrapper
      initial='hidden'
      animate='visible'
      variants={motionWrapper}
    >
      <div><Logo src='./hacktoberfest-black.svg' /></div>
      <Navigation>
        {menu.map(({ title, url }) => (
          <NavItem key={title} href={url} onClick={e => scrollNavigation(e, url)}>{title}</NavItem>
        ))}
      </Navigation>
    </Wrapper>
  )
}
