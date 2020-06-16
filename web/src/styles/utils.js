export const breakpoints = {
  mobile: 420,
  mobile__l: 580,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
  bigscreen: 1920,
}

export let mq = {}

Object.keys(breakpoints).forEach(key => {
  mq[key] = `@media (min-width: ${breakpoints[key]}px)`
})
