import styled from 'styled-components'

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;

  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  margin-bottom: 2rem;
`
