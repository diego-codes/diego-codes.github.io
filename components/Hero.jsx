import styled from 'styled-components'
import Link from 'next/link'
import { Breakpoint, mediaQuery } from '../utils/responsive.utils'
import StyledLink from './StyledLink'
import LayoutContainer from './LayoutContainer'

const Container = styled.header`
  ${mediaQuery(Breakpoint.md)} {
    padding-block-start: 5em;
    padding-block-end: 5em;
  }
`

const Name = styled.span`
  white-space: nowrap;
`
const Hello = styled.h1`
  margin-block-end: 0.2em;
`
const Tagline = styled.p`
  font-size: 1.3em;
  margin-block-end: 1em;
`

const Navigation = styled.ul`
  display: flex;
  gap: 1.5em;
`

const NavigationItem = styled.li``
const NavigationLink = styled(StyledLink)``

export default function Hero() {
  return (
    <LayoutContainer>
      <Container>
        <Hello>
          Hello, my name is <Name>Diego Hernandez</Name>
        </Hello>
        <Tagline>I code and design to make this world a better place.</Tagline>
        <Navigation>
          <NavigationItem>
            <Link href="#projects" passHref>
              <NavigationLink>See my work</NavigationLink>
            </Link>
          </NavigationItem>

          <NavigationItem>
            <Link href="#about" passHref>
              <NavigationLink>Get to know me</NavigationLink>
            </Link>
          </NavigationItem>
        </Navigation>
      </Container>
    </LayoutContainer>
  )
}
