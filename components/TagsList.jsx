import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getResponseTypeStyle, Size } from '../utils/typography.utils'

const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.7em;
`

const Tag = styled.li`
  ${getResponseTypeStyle(Size.small)}
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  display: inline-block;
  padding: 0.15em 0.6em;
  border-radius: 0.2em;
`

export default function TagsList({ tags }) {
  if (tags.length === 0) {
    return null
  }

  return (
    <List>
      {tags.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </List>
  )
}

TagsList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

TagsList.defaultProps = {
  tags: [],
}
