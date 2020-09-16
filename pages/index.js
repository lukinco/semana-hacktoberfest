import {
  HeadComponent,
  Header,
  Container,
  Hero,
  About,
  Footer,
  Playlist,
  IssueList,
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
      </Container>
      <Footer />
    </>
  )
}

export default Home
