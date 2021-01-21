import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'

const padding = '1rem'

const Button = styled.p``

const Container = styled.a`
  margin-block-end: 1.5rem;
  color: inherit;
  text-decoration: none;

  &:focus {
    outline: 1px solid;
  }

  &:focus,
  &:hover {
    ${Button} {
      text-decoration: underline;
    }
  }
`
const Header = styled.header``

const Image = styled.div`
  block-size: 12.5em;
  inline-size: 100%;
  margin-block-end: 0.5em;
  background: url('${({ url }) => url}') center no-repeat;
  background-size: cover;
`
const Heading = styled.h1`
  margin: 0;
  margin-block-end: 0.5em;
  padding-inline-start: ${padding};
  padding-inline-end: ${padding};
`

const Summary = styled.p`
  padding-inline-start: ${padding};
  padding-inline-end: ${padding};
`
const Tags = styled.ul`
  display: flex;
  gap: 0.5em;
`

const Tag = styled.li``

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
        <Summary>{children}</Summary>

        <Footer>
          {tags.length > 0 && (
            <Tags>
              {tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
          )}

          <Button>Read more</Button>
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
