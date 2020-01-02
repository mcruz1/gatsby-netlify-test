/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby-Bootstrap",
    description: "This is the description of our website",
    keywords: "gatsby, gatsbyjs project, gatsby bootstrap",
    image: "/static/gatsbyimage.jpg",
    url: "https://www.gatsbyjs.org/",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    { resolve: `gatsby-transformer-remark` },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     baseUrl: `https://codingsrc.com/`,
    //     protocol: `http`,
    //     hostingWPCOM: false,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS bootstrap tutorial`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}

// <Helmet>
// <title>Gatsby-Bootstrap</title>
// <meta name="description" content="This is the description of our website" />
// <meta name="keywords" content="gatsby, gatsbyjs project, gatsby bootstrap" />
// <meta name="robots" content="index,follow"></meta>
// </Helmet>
