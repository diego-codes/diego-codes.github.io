import styled from 'styled-components'
import LayoutContainer from './LayoutContainer'
import pgk from '../package.json'
import StyledLink from './StyledLink'
import { getResponseTypeStyle, Size } from '../utils/typography.utils'
import { Breakpoint, mediaQuery } from '../utils/responsive.utils'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: flex-start;
  row-gap: 0.9em;

  ${getResponseTypeStyle(Size.small)};

  > * {
    margin: 0;
    margin-inline-end: 1.5em;

    ${mediaQuery(Breakpoint.sm)} {
      margin-block-end: 0;
    }

    :last-of-type {
      margin-inline-end: 0;
    }
  }
`
const Copyright = styled.p`
  flex: 1;
  white-space: nowrap;
`

const Contact = styled.p`
  > * {
    margin-inline-end: 0.7em;

    :last-of-type {
      margin-inline-end: 0;
    }
  }
`

export default function Footer() {
  return (
    <LayoutContainer
      backgroundColor="var(--theme-bg-03)"
      color="var(--theme-text-03)"
      padding="1rem 1.5rem"
    >
      <Container>
        <Copyright>
          <StyledLink
            href={pgk.repository.url}
            target="_blank"
            rel="noreferrer"
          >
            Handcrafted
          </StyledLink>{' '}
          by me, {new Date().getFullYear()}
        </Copyright>
        <Contact>
          <StyledLink
            href="https://www.linkedin.com/in/diegoahernandez/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </StyledLink>{' '}
          <StyledLink
            href="https://github.com/diego-codes/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </StyledLink>{' '}
          <StyledLink
            href="https://twitter.com/diego_codes"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </StyledLink>
        </Contact>
      </Container>
    </LayoutContainer>
  )
}
