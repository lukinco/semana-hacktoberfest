import styled from 'styled-components'

import { TextBox, IssueCard, EmptyIssuesIcon, media } from 'ui'
import { issueList } from 'resources/content'

export const IssueList = () => {
  return (
    <Wrapper id='contribua'>
      <TextBox title={issueList.title} text={issueList.text} />
      <List>
        {issueList.length && issueList.items.map(({ id, ...card }) => (
          <IssueCard key={id} {...card} />
        ))}
      </List>
      {!issueList.length &&
        <Empty>
          <EmptyIssuesIcon />
          <Text>Em breve as issues estarão disponíveis aqui.</Text>
        </Empty>}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-bottom: 19rem;
`

const List = styled.div`
  display: grid;
  grid-gap: 5rem 3.2rem;
  margin-top: 5rem;

  ${media.greaterThan('md')`
    grid-template-columns: 1fr 1fr;
  `}
`

const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 7rem;
`

const Text = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(2rem, 4vw, 2.6rem);
  font-weight: 600;
  margin: 4rem;
  width: 100%;
  max-width: 42rem;
  text-align: center;
`
