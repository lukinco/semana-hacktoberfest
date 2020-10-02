import t from 'prop-types'

import { Link, BoldText } from 'ui'
import { insertComponentsIntoText } from 'resources'

import { Wrapper, Title, Text } from './styles'

export const components = {
  hacktoberfest: <Link key='hacktoberfest' href='https://hacktoberfest.digitalocean.com/'>Hacktoberfest</Link>,
  digitalocean: <Link key='digitalocean' href='https://www.digitalocean.com/'>DigitalOcean</Link>,
  github: <Link key='github' href='https://www.github.com/'>GitHub</Link>,
  fdaciuk: <Link key='@fdaciuk' href='https://twitter.com/fdaciuk'>@fdaciuk</Link>,
  beginner: <BoldText key='beginner'>iniciante</BoldText>,
  advanced: <BoldText key='advanced'>avançado</BoldText>,
}

export const TextBox = ({ id, title, text, invert }) => {
  return (
    <Wrapper id={id}>
      <Title invert={invert}>{title}</Title>
      <Text>{insertComponentsIntoText(text, components)}</Text>
    </Wrapper>
  )
}

TextBox.propTypes = {
  id: t.string,
  title: t.string.isRequired,
  text: t.string.isRequired,
  invert: t.bool,
}
