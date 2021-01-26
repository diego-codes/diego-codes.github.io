import Link from 'next/link'
import LayoutContainer from '../components/LayoutContainer'
import StyledLink from '../components/StyledLink'

export default function AboutPage() {
  return (
    <LayoutContainer vCentered padding="3rem 1.5rem">
      <h1>404 - page not found 😯</h1>
      <p>
        Try visiting the{' '}
        <Link href="/" passHref>
          <StyledLink>homepage</StyledLink>
        </Link>
        .
      </p>
    </LayoutContainer>
  )
}

AboutPage.defaultProps = {}
