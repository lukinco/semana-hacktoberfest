import styled from 'styled-components'
import { darken } from 'polished'
import { motion } from 'framer-motion'

import { media } from 'ui'

export const Button = styled(motion.button)`
  appearance: none;
  text-decoration: none;
  font-size: clamp(1.4rem, 4vw, 1.8rem);
  font-weight: 600;
  border-radius: .3rem;
  display: inline-block;
  padding: 1.5rem 3rem;
  transition: background-color .25s ease;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => darken(0.15, theme.colors.primary)};
  }

  ${media.lessThan('sm')`
    width: 100%;
    display: block;
    text-align: center;
  `}
`
