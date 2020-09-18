import styled from 'styled-components'

import { TextBox, CTABox, media } from 'ui'
import { followUp } from 'resources'

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

const Wrapper = styled.div`
  width: 100%;
  max-width: 74rem;
  margin: 0 auto;
  padding: 8rem 0 13rem;

  ${media.greaterThan('sm')`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`
