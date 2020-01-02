import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { graphql } from "gatsby"


export default ({ data }) => {
  console.log(data)
  return (
    <PrimaryLayout column="col-xs-6">
      {data.allMarkdownRemark.nodes.map(node => (
        <Post
          image={node.frontmatter.image}
          title={node.frontmatter.title}
          excerpt={node.excerpt}
          readMore={node.fields.slug}
        />
      ))}
      {/* <Post
        title="This is our first post"
        excerpt="We are writing something to be displayed in our excerpt"
      /> */}
    </PrimaryLayout>
  )
}

export const query = graphql`
{
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        date
        keywords
        image
      }
      excerpt
      html
      fields {
        slug
      }
    }
  }
}
`