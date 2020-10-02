import t from 'prop-types'

import { Button } from 'ui'
import { Wrapper, Text } from './cta-box.styles'

export const CTABox = ({ text, icon: Icon, cta, ctaUrl }) => {
  return (
    <Wrapper>
      {Icon && <Icon />}
      <Text>{text}</Text>
      <Button as='a' href={ctaUrl}>{cta}</Button>
    </Wrapper>
  )
}

CTABox.propTypes = {
  text: t.string.isRequired,
  icon: t.elementType.isRequired,
  cta: t.string.isRequired,
  ctaUrl: t.string.isRequired,
}
