import styled from 'styled-components'

import { TextBox, IssueCard, media } from 'ui'
import { issueList } from 'resources/content'

export const IssueList = () => {
  return (
    <Wrapper>
      <TextBox title={issueList.title} text={issueList.text} />
      <List>
        {issueList.items.map(({ id, ...card }) => (
          <IssueCard key={id} {...card} />
        ))}
      </List>
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
