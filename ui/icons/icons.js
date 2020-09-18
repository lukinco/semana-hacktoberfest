import styled from 'styled-components'

const BaseIcon = styled.i`
  display:inline-block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  margin-right: 0.9rem;
`

export const BoxIcon = styled(BaseIcon)`
  width: 2.2rem;
  height: 2.2rem;
  background-image: url('./icons/ic-box.svg');
`

export const StarIcon = styled(BaseIcon)`
  width: 2.4rem;
  height: 2.4rem;
  background-image: url('./icons/ic-star.svg');
`

export const JSIcon = styled(BaseIcon)`
  width: 1.9rem;
  height: 1.9rem;
  background-image: url('./icons/ic-js.svg')
`

export const LangIcon = styled(BaseIcon)`
  width: 1.9rem;
  height: 1.9rem;
  background-image: ${({ lang }) => `url('./icons/ic-${lang}.svg')`};
`

export const TelegramIcon = styled(BaseIcon)`
  width: 5.7rem;
  height: 5rem;
  background-image: url('./icons/ic-telegram.svg');
`

export const GithubIcon = styled(BaseIcon)`
  width: 4.1rem;
  height: 4.4rem;
  background-image: url('./icons/ic-github.svg');
`

export const YoutubeIcon = styled(BaseIcon)`
  width: 5rem;
  height: 4.95rem;
  background-image: url('./icons/ic-youtube.svg');
`

export const EmptyIssuesIcon = styled(BaseIcon)`
  width: 21.9rem;
  height: 15.8rem;
  background-image: url('./icons/ic-empty-issues.svg');
`
