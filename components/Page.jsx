import PropTypes from 'prop-types'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'

export default function Page({ children }) {
  return (
    <div>
      <header>
        <Header>
          <Navigation />
        </Header>
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
}

Page.defaultProps = {
  children: undefined,
}
