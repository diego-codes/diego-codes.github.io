import styled, { css } from 'styled-components'

export const hoverStyles = css`
  background-size: 100% 100%;
  color: ${props => props.theme.bg01};
`

export const styles = css`
  background: linear-gradient(
      transparent 0%,
      ${props => props.theme.primary} 0%
    )
    no-repeat;
  background-size: 100% 2px;
  background-position: bottom;
  transition: background-size 150ms, color 150ms;
  text-decoration: none;

  &:hover {
    ${hoverStyles}
  }
`

export default styled.a`
  ${styles}
`
