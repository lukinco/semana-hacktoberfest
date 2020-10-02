import { Container } from 'ui'
import { social } from 'resources/content'

import { Wrapper, Content, Copyright, Social } from './footer.styles'

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <img src='./logo-lukin.svg' alt='Lukin Co.' />
          <Copyright>Lukin Co. 2020 ©</Copyright>
          <Social>
            {social.map(({ icon, url }) => (
              <a key={url} href={url} target='_blank' rel='noopener noreferrer'>
                <img src={icon} alt={url} />
              </a>
            ))}
          </Social>
        </Content>
      </Container>
    </Wrapper>
  )
}
