import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: '/porfolio/frontend',
  siteMetadata: {
    title: `frontend`,
    author: 'iliagromov',
    siteUrl: `https://iliagromov.github.io/portfolio/`,
    blog: 'my blog',

  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        "url":  process.env.WPGRAPHQL_URL || "http://localhost:8080/graphql",
      }
    }, 
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    "gatsby-plugin-sass", 
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/images/`
      },
    __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "posts",
        "path": `${__dirname}/src/posts/`
      },
    __key: "images"
    }
]
};

export default config;
