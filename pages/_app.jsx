import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../components/GlobalStyles'
import Page from '../components/Page'
import theme from '../utils/theme.utils'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
}
