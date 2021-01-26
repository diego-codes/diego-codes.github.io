import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'
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

const Container = styled.a`
  margin-block-end: 1.5rem;
  color: inherit;
  text-decoration: none;
  background-color: ${props => props.theme.bg02};
  display: flex;
  flex-flow: column;

  &:focus {
    outline: 2px solid ${props => props.theme.primary};
  }

  &:focus,
  &:hover {
    ${ReadMoreButton} {
      ${hoverStyles}
    }
  }
`
const Header = styled.header``

const Image = styled.div`
  block-size: 12.5em;
  inline-size: 100%;
  margin-block-end: 1.3em;
  background: url('${({ url }) => url}') top center no-repeat;
  background-size: cover;
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
`

export default function TitledContent({ img, heading, children, tags, url }) {
  return (
    <Link href={url} passHref>
      <Container>
        <Header>
          <Image url={img} />
          <Heading>{heading}</Heading>
        </Header>
        <Summary>
          {children} <ReadMoreButton as="span">Read more</ReadMoreButton>
        </Summary>

        <Footer>
          <TagsList tags={tags} />
        </Footer>
      </Container>
    </Link>
  )
}

TitledContent.propTypes = {
  heading: PropTypes.node,
  img: PropTypes.string,
  children: PropTypes.node,
  tags: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
}

TitledContent.defaultProps = {
  heading: undefined,
  img: undefined,
  children: undefined,
  tags: [],
  url: undefined,
}
