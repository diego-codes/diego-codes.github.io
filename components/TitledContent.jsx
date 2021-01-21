import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  margin-block-end: 1.5rem;
`

const Heading = styled.h1`
  margin: 0;
  margin-block-end: 0.5em;
`

export default function TitledContent({ heading, id, hierarchy, children }) {
  return (
    <Container>
      <Heading as={`h${hierarchy}`} id={id}>
        {heading}
      </Heading>
      {children}
    </Container>
  )
}

TitledContent.propTypes = {
  heading: PropTypes.node,
  id: PropTypes.string,
  hierarchy: PropTypes.number,
  children: PropTypes.node,
}

TitledContent.defaultProps = {
  heading: undefined,
  id: undefined,
  hierarchy: 1,
  children: undefined,
}
