import styled from 'styled-components'
import Link from 'next/link'
import { Breakpoint, mediaQuery } from '../utils/responsive.utils'
import StyledLink from './StyledLink'

const List = styled.ul`
  ${mediaQuery(Breakpoint.sm)} {
    display: flex;
    gap: 1em;
  }
`

const NavLink = styled(StyledLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.2em;
  padding: 0 0.3em;

  &::before {
    content: '';
    display: ${props => (props.active ? 'inline-block' : 'none')};
    block-size: 0.375em;
    inline-size: 0.375em;
    border-radius: 0.375em;
    background-color: ${props => props.theme.primary};
  }

  &:hover::before {
    background-color: currentColor;
  }
`

export default function Navigation() {
  return (
    <List>
      <li>
        <Link href="/" passHref>
          <NavLink active>Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/projects" passHref>
          <NavLink>My work</NavLink>
        </Link>
      </li>

      <li>
        <Link href="/#about" passHref>
          <NavLink>About me</NavLink>
        </Link>
      </li>
    </List>
  )
}
