import styled from 'styled-components'
import t from 'prop-types'
import { lighten, rgba } from 'polished'

export const IssueCard = ({
  repo,
  position,
  title,
  description,
  stars,
  lang,
  url,
}) => {
  return (
    <Card>
      <Header>
        <Repo>{repo}</Repo>
        <Position>{position}</Position>
      </Header>
      <Content>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </Content>
      <Footer>
        <Info>{stars}</Info>
        <Info>{lang}</Info>
      </Footer>
    </Card>
  )
}

IssueCard.propTypes = {
  repo: t.string.isRequired,
  position: t.string.isRequired,
  title: t.string.isRequired,
  description: t.string.isRequired,
  stars: t.number.isRequired,
  lang: t.oneOf(['Javascript', 'Rescript']).isRequired,
  url: t.string.isRequired,
}

const Card = styled.a`
  padding: 3.5rem;
  background-color: ${({ theme }) => lighten(0.07, theme.colors.background)};
  transition: background-color .25s ease;
  display: block;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => lighten(0.09, theme.colors.background)};
  }
`

const Repo = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Position = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`

const Content = styled.div`
  padding: 2rem 0 3rem;
`

const Title = styled.h4`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: .5rem;
`

const Text = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
`

const Footer = styled.footer`
  margin-left: auto;
  display: inline-block;
`

const Info = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
`
