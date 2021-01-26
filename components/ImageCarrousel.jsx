import PropTypes from 'prop-types'
import { useRef, useState } from 'react'
import styled from 'styled-components'

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

export default function ImageCarrousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const timerRef = useRef(null)

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrentImageIndex(val => (val + 1) % images.length)
    }, 2000)
  }

  const clearTimer = () => clearInterval(timerRef.current)

  useState(() => {
    startTimer()
    return clearTimer
  }, [])

  return (
    <div>
      {images[currentImageIndex]}
      <div>
        {images.map((image, imageIndex) => (
          <Indicator
            key={image}
            type="button"
            tabIndex={-1}
            highlight={imageIndex === currentImageIndex}
            onClick={() => {
              setCurrentImageIndex(imageIndex)
              clearTimer()
              startTimer()
            }}
          />
        ))}
      </div>
    </div>
  )
}

ImageCarrousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
}

ImageCarrousel.defaultProps = {
  images: [],
}
