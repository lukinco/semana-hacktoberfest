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
