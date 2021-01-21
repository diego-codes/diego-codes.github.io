import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.header`
  padding: 1.5rem;
`

const Hello = styled.h1``
const Tagline = styled.p``

const Navigation = styled.ul``
const NavigationItem = styled.li``
const NavigationLink = styled.a``

export default function Hero() {
  return (
    <Container>
      <Hello>Hello, my name is Diego Hernandez</Hello>
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
  )
}
