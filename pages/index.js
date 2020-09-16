import {
  HeadComponent,
  Header,
  Container,
  Hero,
  About,
  Footer,
  Playlist,
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
      </Container>
      <Footer />
    </>
  )
}

export default Home
