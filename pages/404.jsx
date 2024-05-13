import LayoutContainer from '../components/LayoutContainer'
import StyledLink from '../components/StyledLink'

export default function AboutPage() {
  return (
    <LayoutContainer vCentered padding="3rem 1.5rem">
      <h1>404 - page not found 😯</h1>
      <p>
        Try visiting the <StyledLink href="/">homepage</StyledLink>.
      </p>
    </LayoutContainer>
  )
}
