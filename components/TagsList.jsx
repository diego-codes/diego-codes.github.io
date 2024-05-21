import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getResponseTypeStyle, Size } from '../utils/typography.utils'

const List = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
`

const Tag = styled.li`
  ${getResponseTypeStyle(Size.small)}
  border: 1px solid var(--theme-primary);
  color: var(--theme-primary);
  display: inline-block;
  padding: 0.15em 0.6em;
  border-radius: 0.2em;
  margin-block-end: 0.7em;
  margin-inline-end: 0.7em;
`

export default function TagsList({ tags = [] }) {
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
