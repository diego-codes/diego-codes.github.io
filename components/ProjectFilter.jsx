import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  cursor: pointer;
`

const CheckboxDisplay = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  block-size: 1em;
  inline-size: 1em;
  font-size: 0.8em;
  border-radius: 0.1em;
  margin-inline-end: 0.4em;
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.bg01};
  background-color: ${props =>
    props.selected ? props.theme.primary : 'transparent'};
`

const Input = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  block-size: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  inline-size: 1px;
  opacity: 0;

  &:focus {
    & + label ${CheckboxDisplay} {
      box-shadow: 0 0 0 1px currentColor,
        0 0 0 3px ${props => props.theme.primary};
    }
  }
`
export default function ProjectFilter({ children, selected, onToggle }) {
  return (
    <Container>
      <Input
        type="checkbox"
        id={children}
        checked={selected}
        onChange={({ target }) => onToggle(children, target.value)}
      />
      <label htmlFor={children}>
        <CheckboxDisplay selected={selected}>
          {selected && (
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.783 2l.766.643-5.785 6.894L1.7 6.966l.643-.766L4.64 8.128z" />
            </svg>
          )}
        </CheckboxDisplay>
        {children}
      </label>
    </Container>
  )
}

ProjectFilter.propTypes = {
  children: PropTypes.string,
  selected: PropTypes.bool,
  onToggle: PropTypes.func,
}

ProjectFilter.defaultProps = {
  children: '',
  selected: false,
  onToggle: () => {},
}
