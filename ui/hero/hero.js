import { hero } from 'resources/content'
import { motion } from 'framer-motion'

import { Wrapper, Title, Text, Illustration, makeAnimation } from './hero.styles'
import { Button } from 'ui'

export const Hero = () => {
  return (
    <Wrapper>
      <div>
        <Title {...makeAnimation(0.6)}>
          {hero.title}
        </Title>
        <Text {...makeAnimation(0.8)}>{hero.text}</Text>
        <Button {...makeAnimation(0.9)} as={motion.a} href={hero.ctaUrl}>{hero.cta}</Button>
      </div>
      <Illustration {...makeAnimation(0.6)} src='./hero.svg' alt={hero.alt} />
    </Wrapper>
  )
}
