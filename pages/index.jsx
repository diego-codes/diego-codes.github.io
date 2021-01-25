import PropTypes from 'prop-types'
import LayoutContainer from '../components/LayoutContainer'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import ProjectCardsGrid from '../components/ProjectCardsGrid'
import TitledContent from '../components/TitledContent'
import { getAllProjects } from '../lib/projects'

export async function getStaticProps() {
  const projects = getAllProjects()

  return {
    props: {
      projects: projects.map(({ frontmatter, slug }) => ({
        ...frontmatter,
        slug,
      })),
    },
  }
}

export default function Home({ projects }) {
  return (
    <>
      <Hero />
      <LayoutContainer>
        <TitledContent id="projects" heading="Projects">
          <ProjectCardsGrid>
            {projects.map(project => (
              <ProjectCard
                key={project.slug}
                heading={project.name}
                img={`/${project.imgs[0]}`}
                url={`/projects/${project.slug}`}
                tags={project.tags}
              >
                {project.description}
              </ProjectCard>
            ))}
          </ProjectCardsGrid>
        </TitledContent>
      </LayoutContainer>

      <LayoutContainer>
        <TitledContent id="about" heading="About me">
          <p>
            Full-stack software engineer with six years of experience living in
            the worlds of engineering and design. Advocating for valuable user
            experiences, accessibility, and sound engineering practices.
          </p>
        </TitledContent>
      </LayoutContainer>
    </>
  )
}

Home.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      imgs: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
}

Home.defaultProps = {
  projects: [],
}
