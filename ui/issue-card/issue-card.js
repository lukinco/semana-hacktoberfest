import styled from 'styled-components'
import t from 'prop-types'
import { lighten, rgba } from 'polished'

import { BoxIcon, StarIcon, LangIcon } from 'ui'

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
        <Repo><BoxIcon /> {repo}</Repo>
        <Position>{position}</Position>
      </Header>
      <Content>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </Content>
      <Footer>
        <Info><StarIcon />  {stars}</Info>
        <Info><LangIcon lang={lang.toLowerCase()} />{lang}</Info>
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
  lang: t.oneOf(['Javascript', 'ReScript']).isRequired,
  url: t.string.isRequired,
}

const Card = styled.a`
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

const Repo = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Info = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => rgba(theme.colors.text, 0.5)};

  &:not(:last-child) {
    margin-right: 2rem;
  }
`
