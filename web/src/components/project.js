import React from "react"
import Media from "./media"

const Project = props => {
  const { title, mainMedia, _rawBody } = props
  return (
    <article>
      <header>
        <h1>{title}</h1>
        <Media data={mainMedia} />
      </header>
    </article>
  )
}

export default Project
