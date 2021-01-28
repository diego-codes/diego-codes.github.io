import Link from 'next/link'
import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'
import styled, { useTheme } from 'styled-components'
import { debounce } from 'throttle-debounce'
import LayoutContainer from './LayoutContainer'

const StickyContainer = styled.div`
  inset-block-start: 0;
  inset-inline-start: 0;
  inline-size: 100%;
  z-index: 2;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const Title = styled.h1`
  font-size: 1.2em;
  font-weight: 400;
  flex: 1 1 auto;
  margin: 0;
`

const TitleLink = styled.a`
  text-decoration: none;
`

export default function Header({ children }) {
  const theme = useTheme()
  const placeholderRef = useRef(null)

  const setFixedHeaderLayout = () => {
    const placeholder = placeholderRef.current
    if (placeholder) {
      placeholder.style.blockSize = `${placeholder.firstElementChild.clientHeight}px`
      placeholder.firstElementChild.style.position = 'fixed'
    }
  }

  useEffect(() => {
    setFixedHeaderLayout()
  }, [placeholderRef])

  useEffect(() => {
    const debouncedSetFixedHeaderLayout = debounce(100, setFixedHeaderLayout)
    window.addEventListener('resize', debouncedSetFixedHeaderLayout)
    return () =>
      window.removeEventListener('resize', debouncedSetFixedHeaderLayout)
  }, [])

  return (
    <div ref={placeholderRef}>
      <StickyContainer>
        <LayoutContainer backgroundColor={theme.bg03} padding="1.2rem 1.5rem">
          <Container>
            <Title>
              <Link href="/" passHref>
                <TitleLink>Diego Hernandez</TitleLink>
              </Link>
            </Title>
            {children && <div>{children}</div>}
          </Container>
        </LayoutContainer>
      </StickyContainer>
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.node,
}

Header.defaultProps = {
  children: undefined,
}
