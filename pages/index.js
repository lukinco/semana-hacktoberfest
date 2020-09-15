import {
  HeadComponent,
  Header,
  Container,
  Hero,
  About,
  Footer,
} from 'ui'

const Home = () => {
  return (
    <>
      <HeadComponent />
      <Header />
      <Container>
        <Hero />
        <About />
      </Container>
      <Footer />
    </>
  )
}

export default Home
