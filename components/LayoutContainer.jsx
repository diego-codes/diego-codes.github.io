import PropTypes from 'prop-types'
import styled from 'styled-components'

const BackgroundContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
  inline-size: 100%;
`
const Container = styled.div`
  inline-size: 100%;
  max-inline-size: 76.25rem;
`

export default function LayoutContainer({ children, backgroundColor }) {
  return (
    <BackgroundContainer backgroundColor={backgroundColor}>
      <Container>{children}</Container>
    </BackgroundContainer>
  )
}

LayoutContainer.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
}

LayoutContainer.defaultProps = {
  children: undefined,
  backgroundColor: 'inherit',
}
