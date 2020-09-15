import t from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle, MediaContextProvider } from 'ui'

export default function App ({ Component, pageProps }) {
  return (
    <MediaContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </MediaContextProvider>
  )
}

App.propTypes = {
  Component: t.elementType.isRequired,
  pageProps: t.object,
}
