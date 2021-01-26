import PropTypes from 'prop-types'
import styled from 'styled-components'
import { DefaultScale } from '../utils/typography.utils'
import LayoutContainer from './LayoutContainer'
import { styles as linkStyles } from './StyledLink'
import TagsList from './TagsList'

const Description = styled.p`
  font-style: italic;
  font-size: ${DefaultScale.h4};
`

const Container = styled(LayoutContainer)`
  a:any-link {
    ${linkStyles}
  }
`
export default function Project({ name, description, tags, children }) {
  return (
    <Container>
      <h1>{name}</h1>
      <TagsList tags={tags} />
      <div>
        <Description>{description}</Description>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: children }} />
      </div>
    </Container>
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
