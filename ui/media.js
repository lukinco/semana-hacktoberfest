import { generateMedia } from 'styled-media-query'
import { createMedia } from '@artsy/fresnel'

const SSRMedia = createMedia({
  breakpoints: {
    sm: 0,
    md: 900,
    lg: 1100,
    xl: 1300,
  },
})

const ssrMediaStyles = SSRMedia.createMediaStyle()

const { MediaContextProvider, Media } = SSRMedia

const media = generateMedia({
  sm: '580px',
  md: '900px',
  lg: '1024px',
  xl: '1300px',
})

export { MediaContextProvider, Media, ssrMediaStyles, media }
