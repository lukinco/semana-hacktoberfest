import { TextBox, IssueCard, EmptyIssuesIcon } from 'ui'
import { issueList } from 'resources/content'

import { Wrapper, List, Empty, Text } from './issue-list.styles'

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
