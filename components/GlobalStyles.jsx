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

  :root {
    --theme-bg-01: #131416;
    --theme-text-01: #F0F6FA;
    --theme-bg-02: #1f2123;
    --theme-text-02: #C1D4E1;
    --theme-bg-03: #25272A;
    --theme-text-03: #C1D4E1;
    --theme-primary: #65F4AD;
  }

  html {
    box-sizing: border-box;
    font-family: 'Fira Sans', 'Helvetica Neue', 'Arial', sans-serif;
    font-weight: 300;
    line-height: 1.75;
    background-color: var(--theme-bg-03)
  }
  
  body {
    background-color: var(--theme-bg-01);
    color: var(--theme-text-01);
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

  :any-link  {
    color: inherit;
    
    &:focus {
      outline: 2px solid var(--theme-primary);
    }
  }

  svg {
    fill: currentColor;
    max-inline-size: 100%;
    block-size: auto;
  }
`
