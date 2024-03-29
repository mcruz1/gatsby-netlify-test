import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

const BlogpostLayout = ({data}) => {
  const post = data.markdownRemark;
  return (
    <div>
        <SEO
          title={post.title}
          description={post.excerpt}
          // image={post.featured_media.source_url}
          // keywords={post.categories.map(res => res.name).join(', ')}
        />
      <Header />
      <div className="container">
        <div className="row justify-content-md-center">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogpostLayout

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
