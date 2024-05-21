import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/legacy/image'
import TagsList from './TagsList'
import { DefaultScale } from '../utils/typography.utils'
import StyledLink, { hoverStyles } from './StyledLink'

const padding = '1rem'

const ReadMoreButton = styled(StyledLink)`
  padding: 0 0.1em;
  white-space: nowrap;

  &::after {
    content: ' \\2192';
    display: inline;
  }
`

const Container = styled(Link)`
  text-decoration: none;
  background-color: var(--theme-bg-02);
  color: var(--theme-text-02);
  display: flex;
  flex-flow: column;
  transition: transform 200ms ease-in-out;

  &:focus {
    outline: 2px solid var(--theme-primary);
  }

  &:focus,
  &:hover {
    transform: scale(1.04);
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
    z-index: 1;

    ${ReadMoreButton} {
      ${hoverStyles}
    }
  }
`
const Header = styled.header``

const ImageContainer = styled.div`
  block-size: 12.5em;
  inline-size: 100%;
  margin-block-end: 1.3em;
  background: ${props => props.color || 'var(--theme-bg-03)'};
  position: relative;
`

const Heading = styled.h2`
  margin-block-start: 0;
  margin-block-end: 0.4em;
  font-size: ${DefaultScale.h2};
  padding-inline-start: ${padding};
  padding-inline-end: ${padding};
`

const Summary = styled.p`
  flex: 1 1 auto;
  padding-inline-start: ${padding};
  padding-inline-end: ${padding};
`

const Footer = styled.footer`
  padding: ${padding};
  overflow: hidden;
`

export default function TitledContent({
  id,
  img,
  heading,
  children,
  tags = [],
  url,
  color,
}) {
  return (
    <Container href={url} id={id}>
      <Header>
        <ImageContainer color={color}>
          {img && (
            <Image src={`/projects/${img}`} layout="fill" objectFit="contain" />
          )}
        </ImageContainer>
        <Heading>{heading}</Heading>
      </Header>
      <Summary>
        {children} <ReadMoreButton as="span">Read more</ReadMoreButton>
      </Summary>

      <Footer>
        <TagsList tags={tags} />
      </Footer>
    </Container>
  )
}

TitledContent.propTypes = {
  id: PropTypes.string,
  heading: PropTypes.node,
  img: PropTypes.string,
  children: PropTypes.node,
  tags: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
  url: PropTypes.string,
}
