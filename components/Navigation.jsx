import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import StyledLink from './StyledLink'

const List = styled.ul`
  display: flex;
  gap: 1em;
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
