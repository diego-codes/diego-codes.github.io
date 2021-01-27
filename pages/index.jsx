import PropTypes from 'prop-types'
import Hero from '../components/Hero'
import ProjectCardsGrid from '../components/ProjectCardsGrid'
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
      <ProjectCardsGrid projects={projects.slice(0, 6)} showSeeMoreLink />
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
