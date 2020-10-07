import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { TextBox, IssueCard, EmptyIssuesIcon, media } from 'ui'
import { issueList } from 'resources/content'

function normalizeRepo (repo) {
  return repo.replace(/^.+\/(.+\/.+)$/, '$1')
}

export const IssueList = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    async function getIssues () {
      const repos = await Promise.all(issueList.repos.map(repo => fetch(`https://api.github.com/repos/${repo}/issues`)))

      for (const repo of repos) {
        const issues = await repo.json()
        const issuesWithValidLabel = issues.filter(issue =>
          issue.labels.find(label => label.name === 'hacktoberfest-lukin') &&
          issue.state === 'open'
        )

        for (const issue of issuesWithValidLabel) {
          const resultRepo = await fetch(issue.repository_url)
          const stars = await resultRepo.json()
          const repo = normalizeRepo(issue.repository_url)

          const normalizedIssue = {
            id: issue.node_id,
            repo,
            title: issue.title,
            stars: stars.stargazers_count,
            url: `https://github.com/${repo}/issues/${issue.number}`,
          }

          setCards(cards => cards.concat(normalizedIssue))
        }
      }
    }

    getIssues()
  }, [])

  return (
    <Wrapper id='contribua'>
      <TextBox title={issueList.title} text={issueList.text} />
      <List>
        {!!cards.length && cards.map(({ id, ...card }, index) => (
          <IssueCard key={id} position={index + 1} {...card} />
        ))}
      </List>
      {!cards.length &&
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
