import PropTypes from 'prop-types'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Breakpoint, mediaQuery } from '../utils/responsive.utils'

const ImagesContainer = styled.div`
  padding-block-start: 1em;
  padding-block-end: 1em;
  background: ${props =>
    props.theme[props.backgroundColor] ||
    props.backgroundColor ||
    'transparent'};
  margin-block-end: 0.7em;
`
const ImagesPosition = styled.div`
  position: relative;
  block-size: 17rem;

  ${mediaQuery(Breakpoint.md)} {
    block-size: 25rem;
  }
`

const ImageWrapper = styled.div`
  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity ${props => props.transitionDuration * 0.1}ms;
`

const Indicator = styled.button`
  background-color: ${props =>
    props.highlight ? props.theme.primary : props.theme.text01};
  opacity: ${props => (props.highlight ? 1 : 0.4)};
  block-size: 0.6em;
  inline-size: 2.5em;
  color: transparent;
  border: none;
  border-radius: 0;
  margin-inline-end: 0.4em;

  &:hover {
    opacity: 1;
    background-color: ${props => props.theme.text01};
  }

  &:focus {
    outline: 2px solid ${props => props.theme.primary};
    outline-offset: 1px;
  }
`

const IndicatorsContainer = styled.div`
  text-align: center;
`

const transitionDuration = 5000

export default function ImageCarrousel({ images, backgroundColor }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const timerRef = useRef(null)

  const startTimer = () => {
    if (images.length > 1) {
      timerRef.current = setTimeout(() => {
        setCurrentImageIndex(val => (val + 1) % images.length)
        startTimer()
      }, transitionDuration)
    }
  }

  const clearTimer = () => {
    clearTimeout(timerRef.current)
    timerRef.current = null
  }

  useEffect(() => {
    setCurrentImageIndex(0)
    startTimer()
    return () => clearTimer()
  }, [images])

  return (
    <>
      <ImagesContainer backgroundColor={backgroundColor}>
        <ImagesPosition>
          {images.map((image, imageIndex) => (
            <ImageWrapper
              key={image}
              show={imageIndex === currentImageIndex}
              transitionDuration={transitionDuration}
            >
              <Image src={image} fill style={{ objectFit: 'contain' }} />
            </ImageWrapper>
          ))}
        </ImagesPosition>
      </ImagesContainer>
      {images.length > 1 && (
        <IndicatorsContainer>
          {images.map((image, imageIndex) => (
            <Indicator
              key={image}
              type="button"
              tabIndex={-1}
              highlight={imageIndex === currentImageIndex}
              onClick={() => {
                clearTimer()
                setCurrentImageIndex(imageIndex)
              }}
            />
          ))}
        </IndicatorsContainer>
      )}
    </>
  )
}

ImageCarrousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  backgroundColor: PropTypes.string,
}

ImageCarrousel.defaultProps = {
  images: [],
  backgroundColor: undefined,
}
