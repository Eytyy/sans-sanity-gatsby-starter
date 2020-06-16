import React from "react"

const BlogPost = props => {
  const { title, _rawBody } = props
  console.log(props)
  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>
    </article>
  )
}

export default BlogPost
