import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const getInternalLinkPath = ({ _type, slug }) => {
  let basePath
  switch (_type) {
    case "project":
      basePath = "/work/"
      break
    case "post":
      basePath = "/blog/"
      break
    default:
      basePath = "/"
      break
  }
  return `${basePath}${slug}`
}

const ContentList = ({ content }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 60px;
      `}
    >
      {content.map(block => (
        <div key={block._id}>
          <Link
            to={getInternalLinkPath({
              _type: block._type,
              slug: block.slug.current,
            })}
          >
            <h2>{block.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ContentList
