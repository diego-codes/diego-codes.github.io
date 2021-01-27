import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import StyledLink from './StyledLink'

const List = styled.ul`
  display: flex;
  > * {
    margin-block-end: 1em;
    margin-inline-end: 1em;

    :last-of-type {
      margin-block-end: 0;
      margin-inline-end: 0;
    }
  }
`

const NavLink = styled(StyledLink)`
  text-decoration: none;
  display: flex;
  align-items: center;

  padding: 0 0.3em;

  &::before {
    content: '';
    display: ${props => (props.active ? 'inline-block' : 'none')};
    block-size: 0.375em;
    inline-size: 0.375em;
    border-radius: 0.375em;
    background-color: ${props => props.theme.primary};
    margin-inline-end: 0.2em;
  }

  &:hover::before {
    background-color: currentColor;
  }
`

export default function Navigation() {
  const router = useRouter()
  return (
    <List>
      <li>
        <Link href="/projects" passHref>
          <NavLink active={router.route.includes('projects')}>Work</NavLink>
        </Link>
      </li>

      <li>
        <Link href="/about" passHref>
          <NavLink active={router.route.includes('about')}>About</NavLink>
        </Link>
      </li>
    </List>
  )
}
