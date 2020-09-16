import { Link, BoldText } from 'ui'

export const components = {
  hacktoberfest: <Link key='hacktoberfest' href='https://hacktoberfest.digitalocean.com/'>Hacktoberfest</Link>,
  digitalocean: <Link key='digitalocean' href='https://www.digitalocean.com/'>DigitalOcean</Link>,
  github: <Link key='github' href='https://www.github.com/'>GitHub</Link>,
  fdaciuk: <Link key='@fdaciuk' href='https://twitter.com/fdaciuk'>@fdaciuk</Link>,
  beginner: <BoldText>iniciante</BoldText>,
  advanced: <BoldText>Avançado</BoldText>,
}

export const insertComponentsIntoText = (str, replacements) => {
  const splitRegex = new RegExp(/\[\[(\w*)\]\]/g)
  const parts = str.split(splitRegex)

  return parts.map(word => {
    if (Object.prototype.hasOwnProperty.call(replacements, word)) {
      return replacements[word]
    }
    return word
  })
}
