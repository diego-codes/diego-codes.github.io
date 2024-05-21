import Link from 'next/link'
import styled, { css } from 'styled-components'

export const hoverStyles = css`
  background-size: 100% 100%;
  color: var(--theme-bg-01);
`

export const styles = css`
  background: linear-gradient(transparent 0%, var(--theme-primary) 0%) no-repeat;
  background-size: 100% 2px;
  background-position: bottom;
  transition: background-size 150ms, color 150ms;
  text-decoration: none;

  &:hover {
    ${hoverStyles}
  }
`

export default styled(Link)`
  ${styles}
`
