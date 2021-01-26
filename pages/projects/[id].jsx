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

export default function ProjectPage({
  name,
  description,
  tags,
  next,
  content,
}) {
  return (
    <main>
      <Project name={name} description={description} tags={tags} next={next}>
        {content}
      </Project>
    </main>
  )
}

ProjectPage.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  next: PropTypes.string,
  content: PropTypes.string,
}

ProjectPage.defaultProps = {
  name: '',
  description: '',
  tags: [],
  next: undefined,

  content: '',
}
