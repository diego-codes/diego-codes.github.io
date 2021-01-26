import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import LayoutContainer from './LayoutContainer'
import TitledContent from './TitledContent'
import ProjectCard from './ProjectCard'

const ProjectFilterList = dynamic(() => import('./ProjectFilterList'))

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  grid-auto-rows: 1fr;
  gap: 0.5em;
`

const FiltersContainer = styled.div`
  margin-block-end: 1em;
`
export default function ProjectCardsGrid({ projects }) {
  const [selectedFilters, setSelectedFitlers] = useState([])
  const allTags = [...new Set(projects.map(({ tags }) => tags).flat())]
  const filteredProjects =
    selectedFilters.length > 0
      ? projects.filter(({ tags }) =>
          tags.some(tag => selectedFilters.includes(tag)),
        )
      : projects

  const handleFilterToggle = name => {
    if (selectedFilters.includes(name)) {
      setSelectedFitlers(val => val.filter(filter => filter !== name))
    } else {
      setSelectedFitlers(val => [...val, name])
    }
  }

  return (
    <LayoutContainer>
      <TitledContent id="projects" heading="Projects">
        <FiltersContainer>
          <ProjectFilterList
            filters={allTags}
            selectedFilters={selectedFilters}
            onToggle={handleFilterToggle}
            onReset={() => setSelectedFitlers([])}
          />
        </FiltersContainer>
        <Grid>
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.slug}
              heading={project.name}
              img={`/${project.imgs?.[0]}`}
              url={`/projects/${project.slug}`}
              tags={project.tags}
            >
              {project.description}
            </ProjectCard>
          ))}
        </Grid>
      </TitledContent>
    </LayoutContainer>
  )
}

ProjectCardsGrid.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      imgs: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
}

ProjectCardsGrid.defaultProps = {
  projects: [],
}
