import PropTypes from 'prop-types'
import remark from 'remark'
import html from 'remark-html'
import Project from '../../components/Project'
import { getAllProjects, getProjectBySlug } from '../../lib/projects'

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.id)

  const markdown = await remark()
    .use(html)
    .process(project.content || '')
  const content = markdown.toString()

  return {
    props: {
      ...project.frontmatter,
      content,
    },
  }
}

export async function getStaticPaths() {
  const projects = getAllProjects()

  return {
    paths: projects.map(project => ({
      params: {
        id: project.slug,
      },
    })),
    fallback: false,
  }
}

export default function ProjectPage({ content = '', ...rest }) {
  return (
    <main>
      <Project {...rest}>{content}</Project>
    </main>
  )
}

ProjectPage.propTypes = {
  content: PropTypes.string,
}
