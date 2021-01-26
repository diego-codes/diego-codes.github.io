import PropTypes from 'prop-types'
import styled, { useTheme } from 'styled-components'
import LayoutContainer from './LayoutContainer'

const Content = styled.div`
  margin-block-end: 1em;
`
const Copyright = styled.small``

export default function Footer({ children }) {
  const theme = useTheme()
  return (
    <LayoutContainer backgroundColor={theme.bg03} padding="0.5rem 1.5rem">
      {children && <Content>{children}</Content>}
      <p>
        <Copyright>
          Handcrafted by Diego Hernandez, {new Date().getFullYear()}
        </Copyright>
      </p>
    </LayoutContainer>
  )
}

Footer.propTypes = {
  children: PropTypes.node,
}

Footer.defaultProps = {
  children: undefined,
}
