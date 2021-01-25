import matter from 'gray-matter'
import fs from 'fs'
import { join } from 'path'

const projectsDirectory = join(process.cwd(), 'data', 'projects')

export function getProjectBySlug(slug) {
  const realSlug = slug.replace(/\.mdx?$/, '')
  const fullPath = join(projectsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { slug: realSlug, frontmatter: data, content }
}

export function getAllProjects() {
  const slugs = fs.readdirSync(projectsDirectory)
  const posts = slugs.map(slug => getProjectBySlug(slug))

  return posts
}
