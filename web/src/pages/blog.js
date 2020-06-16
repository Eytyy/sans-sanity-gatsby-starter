import React from "react"
import { graphql, Link } from "gatsby"

import GraphQLErrorList from "../components/graphql-error-list"
import SEO from "../components/seo"
import { Grid } from "../components/layout.styles"

export const query = graphql`
  query blogQuery {
    posts: allSanityPost {
      nodes {
        _id
        title
        _rawBody
        slug {
          current
        }
        openGraph {
          ...OpenGraph
        }
      }
    }
  }
`

const Blog = props => {
  const { data, errors } = props
  const posts = data.posts.nodes

  return errors ? (
    <GraphQLErrorList errors={errors} />
  ) : (
    <>
      <SEO />
      <Grid>
        {posts.map(post => (
          <div key={post._id}>
            <Link to={post.slug.current}>
              <h2>{post.title}</h2>
            </Link>
          </div>
        ))}
      </Grid>
    </>
  )
}

export default Blog
