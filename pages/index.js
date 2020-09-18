import {
  HeadComponent,
  Header,
  Container,
  Hero,
  About,
  Footer,
  Playlist,
  IssueList,
  FollowUp,
} from 'ui'

const Home = () => {
  return (
    <>
      <HeadComponent />
      <Header />
      <Container>
        <Hero />
        <About />
        <Playlist />
        <IssueList />
        <FollowUp />
      </Container>
      <Footer />
    </>
  )
}

export default Home
