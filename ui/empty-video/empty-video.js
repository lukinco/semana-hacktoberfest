import styled from 'styled-components'

import { YoutubeIcon } from 'ui'

export const EmptyVideo = () => {
  return (
    <Wrapper>
      <div>
        <Content>
          <YoutubeIcon />
          <p>Disponível em breve</p>
        </Content>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;

  > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 3.3rem;
    height: 3.3rem;
  }

  &:before {
    top: 0;
    left: 0;
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    border-top: 4px solid ${({ theme }) => theme.colors.primary};
  }

  &:after {
    bottom: 0;
    right: 0;
    border-right: 4px solid ${({ theme }) => theme.colors.primary};
    border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
  }
`

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
    font-size: clamp(1.6rem, 4vw, 2rem);
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 2rem;
  }
`
