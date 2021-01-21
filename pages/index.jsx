import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import ProjectCardsGrid from '../components/ProjectCardsGrid'
import TitledContent from '../components/TitledContent'

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <TitledContent id="projects" heading="Projects">
          <ProjectCardsGrid>
            <ProjectCard heading="Project name" img="/aen-notes-1.jpg" url="/">
              This is a summary of this project
            </ProjectCard>
            <ProjectCard heading="Project name" img="/aen-notes-1.jpg" url="/">
              This is a summary of this project
            </ProjectCard>
            <ProjectCard heading="Project name" img="/aen-notes-1.jpg" url="/">
              This is a summary of this project
            </ProjectCard>
            <ProjectCard heading="Project name" img="/aen-notes-1.jpg" url="/">
              This is a summary of this project
            </ProjectCard>
            <ProjectCard
              heading="Project name"
              img="/aen-notes-1.jpg"
              url="/"
              tags={['React', 'Node.js', 'Express']}
            >
              This is a summary of this projectThis is a summary of this
              projectThis is a summary of this projectThis is a summary of this
              projectThis is a summary of this projectThis is a summary of this
              projectThis is a summary of this projectThis is a summary of this
              projectThis is a summary of this projectThis is a summary of this
              projectThis is a summary of this projectThis is a summary of this
              projectThis is a summary of this projectThis is a summary of this
              projectThis is a summary of this projectThis is a summary of this
              projectThis is a summary of this projectThis is a summary of this
              project
            </ProjectCard>
          </ProjectCardsGrid>
        </TitledContent>

        <TitledContent id="about" heading="About me">
          <p>
            Full-stack software engineer with six years of experience living in
            the worlds of engineering and design. Advocating for valuable user
            experiences, accessibility, and sound engineering practices.
          </p>
        </TitledContent>
      </main>
      <Footer>Footer content goes here</Footer>
    </>
  )
}
