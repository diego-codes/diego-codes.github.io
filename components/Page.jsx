import PropTypes from 'prop-types'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'

const Container = styled.div`
  display: flex;
  flex-flow: column;
  min-block-size: 100vh;
`

const Main = styled.main`
  flex: 1 1 auto;
`

export default function Page({ children }) {
  return (
    <Container>
      <header>
        <Header>
          <Navigation />
        </Header>
      </header>

      <Main>{children}</Main>

      <footer>
        <Footer />
      </footer>
    </Container>
  )
}

Page.propTypes = {
  children: PropTypes.node,
}

Page.defaultProps = {
  children: undefined,
}
