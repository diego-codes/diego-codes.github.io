import Link from 'next/link'
import ImageCarrousel from '../components/ImageCarrousel'
import LayoutContainer from '../components/LayoutContainer'
import StyledLink from '../components/StyledLink'
import TitledContent from '../components/TitledContent'

export default function AboutPage() {
  return (
    <LayoutContainer narrow>
      <TitledContent heading="Hi there, nice to meet you!">
        <ImageCarrousel
          images={[`/me-0${Math.floor(Math.random() * 7) + 1}.jpeg`]}
        />
        <p>
          I&apos;m a full-stack software engineer with six years of experience
          living in Long Beach, California and in the worlds of engineering and
          design, relentlessly advocating for valuable user experiences,
          accessibility, and sound engineering practices. My specialties are{' '}
          <Link href="/projects/bigfix-alluvial" passHref>
            <StyledLink>interactive data visualization </StyledLink>
          </Link>{' '}
          and{' '}
          <Link href="/projects/ui-testing-talk" passHref>
            <StyledLink>UI software testing</StyledLink>
          </Link>
          .
        </p>
        <p>
          I work as a software engineer at IBM, where I build{' '}
          <Link href="/projects/query-builder" passHref>
            <StyledLink>user-centered tools</StyledLink>
          </Link>{' '}
          for cybersecurity professionals. When I am not working, I am probably
          working on my master&apos;s degree, thinking up a new{' '}
          <Link href="https://github.com/diego-codes/recipes" passHref>
            <StyledLink target="_blank" rel="noreferrer">
              food experiment
            </StyledLink>
          </Link>
          , or going on long walks with my husband.
        </p>
      </TitledContent>
    </LayoutContainer>
  )
}

AboutPage.propTypes = {}

AboutPage.defaultProps = {}
