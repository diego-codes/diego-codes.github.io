import styled from 'styled-components'

export default styled.li`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  display: inline-block;
  font-size: 0.8em;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
`
