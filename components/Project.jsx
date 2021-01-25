import PropTypes from 'prop-types'
import styled from 'styled-components'
import LayoutContainer from './LayoutContainer'
import TagsList from './TagsList'

const Description = styled.p`
  font-style: italic;
  font-size: 1.4em;
`
export default function Project({ name, description, tags, children }) {
  return (
    <LayoutContainer>
      <h1>{name}</h1>
      <TagsList tags={tags} />
      <div>
        <Description>{description}</Description>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: children }} />
      </div>
    </LayoutContainer>
  )
}

Project.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.string,
}

Project.defaultProps = {
  name: '',
  description: '',
  tags: [],
  children: '',
}
