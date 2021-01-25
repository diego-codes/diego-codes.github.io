import { Breakpoint, mediaQuery } from './responsive.utils'

export const DefaultScale = {
  h1: '1.802rem',
  h2: '1.602rem',
  h3: '1.424rem',
  h4: '1.266rem',
  h5: '1.125rem',
  small: '0.889rem',
}

export const ResponsiveScales = {
  [Breakpoint.md]: {
    h1: '3.052rem',
    h2: '2.441rem',
    h3: '1.953rem',
    h4: '1.563rem',
    h5: '1.25rem',
    small: '0.8rem',
  },
}

export const getTypeScaleStyles = scale =>
  Object.entries(scale)
    .map(([selector, size]) => `${selector} { font-size: ${size}; }`)
    .join('\n')

export const getResponseTypeScaleStyles = (breakpoint, scale) => `${mediaQuery(
  breakpoint,
)} {
  ${getTypeScaleStyles(scale)}
}`
