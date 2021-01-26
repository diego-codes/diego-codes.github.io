import PropTypes from 'prop-types'
import styled from 'styled-components'
import { DefaultScale } from '../utils/typography.utils'
import ProjectFilter from './ProjectFilter'

const Container = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.9em;
  font-size: ${DefaultScale.h5};
`
const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 0.3em 1em;
  flex-wrap: wrap;
`

const Label = styled.span`
  font-weight: 400;
  white-space: nowrap;
`

const ResetButton = styled.button`
  font: inherit;
  font-size: 0.9em;
  background: linear-gradient(
      transparent 0%,
      ${props => props.theme.primary} 0%
    )
    no-repeat;
  background-size: auto 0;
  background-position: bottom;
  transition: background-size 150ms, color 150ms;
  text-decoration: none;

  color: ${props => props.theme.primary};
  padding: 0.05em 0.7em;
  border: 1px solid ${props => props.theme.primary};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.bg01};
    background-size: auto 100%;
  }

  &:focus {
    outline: 2px solid ${props => props.theme.primary};
    outline-offset: 1px;
  }
`

export default function ProjectFilterList({
  filters,
  selectedFilters,
  onToggle,
  onReset,
}) {
  if (filters.length === 0) {
    return null
  }

  return (
    <Container>
      <Label>Filter by:</Label>
      <List>
        {filters.map(filter => (
          <li key={filter}>
            <ProjectFilter
              selected={selectedFilters.includes(filter)}
              onToggle={onToggle}
            >
              {filter}
            </ProjectFilter>
          </li>
        ))}
        {selectedFilters.length > 0 && (
          <ResetButton onClick={onReset}>Reset</ResetButton>
        )}
      </List>
    </Container>
  )
}

ProjectFilterList.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  selectedFilters: PropTypes.arrayOf(PropTypes.string),
  onToggle: PropTypes.func,
  onReset: PropTypes.func,
}

ProjectFilterList.defaultProps = {
  filters: [],
  selectedFilters: [],
  onToggle: () => {},
  onReset: () => {},
}
