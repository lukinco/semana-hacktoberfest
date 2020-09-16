import styled from 'styled-components'

import { Container, media } from 'ui'
import { social } from 'resources/content'

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

const Wrapper = styled.footer`
  height: 20rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  clip-path: polygon(0% 5rem, 100% 0%, 100% 100%, 0% 100%);
`

const Content = styled.div`
  padding-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
`

const Copyright = styled.p`
  font-size: 1.6rem;
  font-weight: 600;

  ${media.lessThan('sm')`
    order: 3;
  `}
`

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > *:not(:last-child) {
    margin-right: 2.5rem;
  }
`
