import styled from 'styled-components'

export default styled.button`
  font: inherit;
  appearance: none;
  background: linear-gradient(transparent 0%, var(--theme-primary) 0%) no-repeat;
  background-size: 100% 0;
  background-position: bottom;
  transition: background-size 150ms, color 150ms;
  text-decoration: none;

  padding: 0.3em 0.7em;
  border: 1px solid var(--theme-primary);
  cursor: pointer;

  && {
    color: var(--theme-primary);
  }

  &:hover {
    color: var(--theme-bg-01);
    background-size: 100% 100%;
  }

  &:focus {
    outline: 2px solid var(--theme-primary);
    outline-offset: 1px;
  }
`
