import t from 'prop-types'

import { BoxIcon, StarIcon, LangIcon } from 'ui'
import { Card, Header, Repo, Position, Content, Title, Text, Footer, Info } from './styles'

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
