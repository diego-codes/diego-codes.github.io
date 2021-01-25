import PropTypes from 'prop-types'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.7em;
`

const Tag = styled.li`
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  display: inline-block;
  font-size: 0.8em;
  padding: 0.2em 0.4em;
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
