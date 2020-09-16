import styled from 'styled-components'
import Link from 'next/link'
import { HeadComponent } from 'ui'

export default function Custom404 () {
  return (
    <Wrapper>
      <HeadComponent />
      <Title>404 - Página não encontrada</Title>
      <Link href='/' passHref>
        <BackButton>Voltar para a homepage</BackButton>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`

const Title = styled.h1`
  font-size: 3.2rem;
  margin: 0 0 3rem;
`

const BackButton = styled.a`
  font-weight: 600;
  font-size: 1.8rem;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem 3rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.background};
  border-radius: 3px;
  transition: background-color .25s ease;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.darkenedPrimary};
  }
`
