import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useState } from 'react'
import Link from 'next/link'
import LayoutContainer from './LayoutContainer'
import TitledContent from './TitledContent'
import ProjectCard from './ProjectCard'
import ProjectFilterList from './ProjectFilterList'
import Button from './Button'
import { getResponseTypeStyle, Size } from '../utils/typography.utils'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  grid-auto-rows: 1fr;
  gap: 0.7em;
  margin-block-end: 2em;
`

const FiltersContainer = styled.div`
  margin-block-end: 1em;
`

const SeeMoreButtonContainer = styled.div`
  text-align: center;
`

const SeeMoreButton = styled(Button, { as: 'a' })`
  ${getResponseTypeStyle(Size.h5)}
`
export default function ProjectCardsGrid({
  projects,
  showFilters,
  showSeeMoreLink,
}) {
  const [selectedFilters, setSelectedFitlers] = useState([])

  const tagFilters = projects
    .map(({ tags }) => tags)
    .flat()
    .reduce(
      (tagsObj, tag) => ({
        ...tagsObj,

        [tag]: (tagsObj[tag] || 0) + 1,
      }),
      {},
    )

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
        {showFilters && (
          <FiltersContainer>
            <ProjectFilterList
              filters={tagFilters}
              selectedFilters={selectedFilters}
              onToggle={handleFilterToggle}
              onReset={() => setSelectedFitlers([])}
            />
          </FiltersContainer>
        )}
        <Grid>
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.slug}
              heading={project.name}
              img={project.imgs?.[0]}
              url={`/projects/${project.slug}`}
              tags={project.tags}
              color={project.color}
            >
              {project.description}
            </ProjectCard>
          ))}
        </Grid>

        {showSeeMoreLink && (
          <SeeMoreButtonContainer>
            <Link href="/projects" passHref>
              <SeeMoreButton>See more projects</SeeMoreButton>
            </Link>
          </SeeMoreButtonContainer>
        )}
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
      color: PropTypes.string,
    }),
  ),
  showFilters: PropTypes.bool,
  showSeeMoreLink: PropTypes.bool,
}

ProjectCardsGrid.defaultProps = {
  projects: [],
  showFilters: false,
  showSeeMoreLink: false,
}
