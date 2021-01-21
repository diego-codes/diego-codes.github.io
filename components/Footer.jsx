import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.footer`
  padding: 1.5rem;
`

const Content = styled.div`
  margin-block-end: 1em;
`
const Copyright = styled.p``

export default function Footer({ children }) {
  return (
    <Container>
      {children && <Content>{children}</Content>}
      <Copyright>
        Handcrafted by Diego Hernandez, {new Date().getFullYear()}
      </Copyright>
    </Container>
  )
}

Footer.propTypes = {
  children: PropTypes.node,
}

Footer.defaultProps = {
  children: undefined,
}
