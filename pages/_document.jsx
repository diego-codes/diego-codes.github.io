import Document, { Html, Head, Main, NextScript } from 'next/document'

import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="I'm a full-stack software engineer living in the worlds of engineering and design, advocating for valuable and accessible user experiences."
          />

          <meta property="og:url" content="https://www.diegohernandez.dev/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Diego Hernandez, Engineering &amp; UX portfolio"
          />
          <meta
            property="og:description"
            content="I'm a full-stack software engineer living in the worlds of engineering and design, advocating for valuable and accessible user experiences."
          />
          <meta
            property="og:image"
            content="https://diegohernandez.dev/_next/image?url=%2Fme-03.jpeg&w=3840&q=75"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="" />
          <meta
            property="twitter:url"
            content="https://www.diegohernandez.dev/"
          />
          <meta
            name="twitter:title"
            content="Diego Hernandez, Engineering &amp; UX portfolio"
          />
          <meta
            name="twitter:description"
            content="I'm a full-stack software engineer living in the worlds of engineering and design, advocating for valuable and accessible user experiences. "
          />
          <meta
            name="twitter:image"
            content="https://diegohernandez.dev/_next/image?url=%2Fme-03.jpeg&w=3840&q=75"
          />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
