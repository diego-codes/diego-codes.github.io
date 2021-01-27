import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { DefaultScale } from '../utils/typography.utils'
import LayoutContainer from './LayoutContainer'
import StyledLink, { styles as linkStyles } from './StyledLink'
import TagsList from './TagsList'
import ImageCarrousel from './ImageCarrousel'

const Description = styled.p`
  font-style: italic;
  font-size: ${DefaultScale.h4};
`

const Links = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  > * {
    margin-block-end: 1.2em;
    margin-inline-end: 1.2em;

    :last-of-type {
      margin-block-end: 0;
      margin-inline-end: 0;
    }
  }
`

const Content = styled.div`
  a:any-link {
    ${linkStyles}
  }
`

const ProjectNavigationLinks = styled.div`
  padding-block-start: 2em;
  padding-block-end: 1em;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  > * {
    margin-block-end: 1em;
    margin-inline-end: 0.8em;

    :last-of-type {
      margin-block-end: 0;
      margin-inline-end: 0;
    }
  }
`

export default function Project({
  imgs,
  name,
  description,
  tags,
  previous,
  next,
  color,
  links,
  children,
}) {
  return (
    <>
      {imgs.length > 0 && (
        <ImageCarrousel images={imgs} backgroundColor={color} />
      )}
      <LayoutContainer>
        <h1>{name}</h1>
        <TagsList tags={tags} />
        <div>
          <Description>{description}</Description>
          {links && (
            <Links>
              {links.map(link => (
                <StyledLink
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.text}
                </StyledLink>
              ))}
            </Links>
          )}
          {/* eslint-disable-next-line react/no-danger */}
          <Content dangerouslySetInnerHTML={{ __html: children }} />

          <ProjectNavigationLinks>
            {previous && (
              <Link href={previous} passHref>
                <StyledLink>Previous project</StyledLink>
              </Link>
            )}

            {next && (
              <Link href={next} passHref>
                <StyledLink>Next project</StyledLink>
              </Link>
            )}
          </ProjectNavigationLinks>
        </div>
      </LayoutContainer>
    </>
  )
}

Project.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  previous: PropTypes.string,
  next: PropTypes.string,
  color: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
  children: PropTypes.string,
}

Project.defaultProps = {
  imgs: [],
  name: '',
  description: '',
  tags: [],
  previous: undefined,
  next: undefined,
  color: undefined,
  links: [],
  children: '',
}
