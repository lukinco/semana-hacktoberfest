import t from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from 'ui'

export default function App ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

App.propTypes = {
  Component: t.elementType.isRequired,
  pageProps: t.object,
}
