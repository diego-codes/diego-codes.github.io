import PropTypes from 'prop-types'
import styled from 'styled-components'

const BackgroundContainer = styled.div`
  padding: ${props => props.padding};
  display: flex;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
  inline-size: 100%;
`
const Container = styled.div`
  inline-size: 100%;
  max-inline-size: 65rem;
`

export default function LayoutContainer({
  children,
  backgroundColor,
  padding,
}) {
  return (
    <BackgroundContainer backgroundColor={backgroundColor} padding={padding}>
      <Container>{children}</Container>
    </BackgroundContainer>
  )
}

LayoutContainer.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  padding: PropTypes.string,
}

LayoutContainer.defaultProps = {
  children: undefined,
  backgroundColor: 'inherit',
  padding: '1.5rem',
}
