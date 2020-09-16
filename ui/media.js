import { generateMedia } from 'styled-media-query'

const media = generateMedia({
  sm: '580px',
  md: '900px',
  lg: '1024px',
  xl: '1366px',
})

export { media }
