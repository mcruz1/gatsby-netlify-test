import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({title, description, keywords, image}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          defaultImage,
          url,
          defaultKeywords,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${url}${image || defaultImage}`,
        keywords: keywords || defaultKeywords
      }
      return (
          <Helmet>
            <title>{seo.title}</title>
            <meta name="image" content={seo.image} /> 
            <meta
              name="description"
              content={seo.description}
            />
            <meta
              name="keywords"
              content={seo.keywords}
            />
            <meta name="robots" content="index,follow"></meta>
          </Helmet>
      )
    }}
  />
)

export default SEO


const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        url
        defaultKeywords: keywords
      }
    }
  }
`
