import { graphql } from "gatsby"

export const SanityVideoEmbed = graphql`
  fragment SanityVideoEmbed on SanityVideoEmbed {
    title
    posterFrame {
      ...SanityFigure
    }
    muted
    controls
    loop
    preload
    autoplay
    versions {
      media
      file {
        asset {
          url
        }
      }
    }
  }
`
