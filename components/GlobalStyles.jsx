import { createGlobalStyle } from 'styled-components'
import {
  DefaultScale,
  getResponseTypeScaleStyles,
  getTypeScaleStyles,
  ResponsiveScales,
} from '../utils/typography.utils'

export default createGlobalStyle`
  *, *:before, *:after {
      box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: 'Fira Sans', 'Helvetica Neue', 'Arial', sans-serif;
    font-weight: 300;
    line-height: 1.75;

    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text01}
  }

  body, ol, ul {
    margin: 0;
    padding: 0;
  }

  p {
    margin-block-end: 1rem;
  }

  h1, h2, h3, h4, h5 {
    margin-block-start: 3rem;
    margin-block-end: 1.38rem;
    font-weight: inherit;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
  }

  ${getTypeScaleStyles(DefaultScale)}
  
  ${Object.entries(ResponsiveScales)
    .map(([breakpoint, sizes]) => getResponseTypeScaleStyles(breakpoint, sizes))
    .join('\n')}




  ol, ul {
    list-style: none;
  }

  img {
    max-inline-size: 100%;
    block-size: auto;
  }

  a:any-link  {
    color: inherit;
    
    &:focus {
    outline: 2px solid ${props => props.theme.primary};
  }
  }
`
