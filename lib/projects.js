import matter from 'gray-matter'
import fs from 'fs'
import { join } from 'path'

const projectsDirectory = join(process.cwd(), 'data', 'projects')
const projectDataFiles = fs.readdirSync(projectsDirectory)

const cleanUpSlug = slug => slug?.replace(/^\d+-/, '').replace(/\.mdx?$/, '')

export function getProjectBySlug(slug) {
  const realSlug = cleanUpSlug(slug)
  const foundFilenameIndex = projectDataFiles.findIndex(filename =>
    filename.includes(realSlug),
  )
  const fullPath = join(projectsDirectory, projectDataFiles[foundFilenameIndex])
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const next = cleanUpSlug(projectDataFiles[foundFilenameIndex + 1]) || null
  const previous = cleanUpSlug(projectDataFiles[foundFilenameIndex - 1]) || null

  return { slug: realSlug, frontmatter: { ...data, next, previous }, content }
}

export function getAllProjects() {
  const posts = projectDataFiles.map(slug => getProjectBySlug(slug))
  return posts
}
