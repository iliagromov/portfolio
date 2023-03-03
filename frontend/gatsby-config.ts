import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: '/portfolio',
  siteMetadata: {
    title: `frontend`,
    author: 'iliagromov',
    siteUrl: `https://iliagromov.github.io/`,
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
        url:  "https://dev.gromov-studio.ru/portfolio/graphql",
        // url:  "http://localhost:8080/graphql",
        baseUrl: `dev.gromov-studio.ru`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        auth: {
            htaccess: {
              username: process.env.WP_USER,
              password: process.env.WP_PASSWORD,
            }
        },
        verbose: false,
        debug: {
          preview: false,
          timeBuildSteps: false,
          throwRefetchErrors: false,
          // graphql: {

          // },
          // production: {

          // }
        },
        develop: {
          // server wp update  5min times
          nodeUpdateInterval: 300000,
        },
        catchLinks: false,
      },
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
