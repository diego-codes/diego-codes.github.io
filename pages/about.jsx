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
          I&apos;m a full-stack software engineer living in Long Beach,
          California, with six years of experience in the worlds of engineering
          and design, relentlessly advocating for simple user experiences,
          accessibility, and robust engineering practices. My specialties are{' '}
          <StyledLink href="/projects/bigfix-alluvial">
            interactive data visualization
          </StyledLink>{' '}
          and{' '}
          <StyledLink href="/projects/ui-testing-talk">
            UI software testing
          </StyledLink>
          .
        </p>
        <p>
          I work as a software engineer at IBM, where I build{' '}
          <StyledLink href="/projects/query-builder">
            user-centered tools
          </StyledLink>{' '}
          for cybersecurity professionals. When I am not working, I am probably
          working on my master&apos;s degree, thinking up a new{' '}
          <StyledLink
            target="_blank"
            rel="noreferrer"
            href="https://github.com/diego-codes/recipes"
          >
            food experiment
          </StyledLink>
          , or going on long walks with my husband.
        </p>
      </TitledContent>
    </LayoutContainer>
  )
}
