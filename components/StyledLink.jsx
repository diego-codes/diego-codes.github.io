import styled, { css } from 'styled-components'

export const hoverStyles = css`
  background-size: auto 100%;
  color: ${props => props.theme.background};
`
export default styled.a`
  background: linear-gradient(
      transparent 0%,
      ${props => props.theme.primary} 0%
    )
    no-repeat;
  background-size: auto 2px;
  background-position: bottom;
  transition: background-size 200ms;
  text-decoration: none;

  &:hover {
    ${hoverStyles}
  }
`
