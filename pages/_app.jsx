import Head from 'next/head'
import PropTypes from 'prop-types'
import GlobalStyles from '../components/GlobalStyles'
import Page from '../components/Page'

export default function MyApp({ Component, pageProps = {} }) {
  return (
    <>
      <Head>
        <title>Diego Hernandez, Engineering &amp; UX portfolio</title>
      </Head>
      <GlobalStyles />
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any),
}
