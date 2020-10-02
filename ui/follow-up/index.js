import { TextBox, CTABox } from 'ui'
import { followUp } from 'resources'

import { Wrapper } from './styles'

export const FollowUp = () => {
  return (
    <div id='acompanhe'>
      <TextBox
        title={followUp.title}
        text={followUp.text}
        invert
      />
      <Wrapper>
        {followUp.cards.map(({ id, text, icon, cta, ctaUrl }) => (
          <CTABox
            key={id}
            text={text}
            icon={icon}
            cta={cta}
            ctaUrl={ctaUrl}
          />
        ))}
      </Wrapper>
    </div>
  )
}
