import styled, { useTheme } from 'styled-components'
import LayoutContainer from './LayoutContainer'
import pgk from '../package.json'
import StyledLink from './StyledLink'
import { getResponseTypeStyle, Size } from '../utils/typography.utils'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: flex-end;
  column-gap: 1.5em;
  row-gap: 0.9em;
  ${getResponseTypeStyle(Size.small)};
`
const Copyright = styled.p`
  flex: 1;
  white-space: nowrap;
  margin: 0;
`

const Contact = styled.p`
  display: flex;
  gap: 0.7em;
  margin: 0;
`

export default function Footer() {
  const theme = useTheme()
  return (
    <LayoutContainer backgroundColor={theme.bg03} padding="1rem 1.5rem">
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
