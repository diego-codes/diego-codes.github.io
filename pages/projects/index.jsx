import PropTypes from 'prop-types'
import ProjectCardsGrid from '../../components/ProjectCardsGrid'
import { getAllProjects } from '../../lib/projects'

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

export default function ProjectsPage({ projects }) {
  return <ProjectCardsGrid projects={projects} showFilters />
}

ProjectsPage.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      imgs: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
}

ProjectsPage.defaultProps = {
  projects: [],
}
