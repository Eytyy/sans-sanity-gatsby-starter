import { css } from "@emotion/core"

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

export const wrap = css`
  max-width: 1200px;
  padding: 30px;
  margin: 0 auto;
  ${mq.desktop} {
    padding: 60px;
  }
`

export const hide = css`
  visibility: hidden;
  width: 0;
  height: 0;
  overflow: hidden;
`
