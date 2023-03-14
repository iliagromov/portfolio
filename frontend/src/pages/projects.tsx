import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link, graphql } from "gatsby";
import Layout from "../layouts/Default"
import SEO from "../components/seo"
import { StaticImage, GatsbyImage, getImage, withArtDirection  } from "gatsby-plugin-image";
import PageProjects from "../components/containers/PageProjects/PageProjects";


export const query = graphql`
  query {
    wpPage(uri: {eq: "/"}) {
      id
      title
      blockProjects {
        projectsBlockGroup {
          wpFields {
            projects {
              ... on WpProject {
                date(formatString: "YYYY MM DD")
                id
                title
                link
                blockSingle {
                  singleProjectBlockGroup {
                    wpFields {
                      title
                      shortdescription
                      format
                      description
                      days
                      sitelink
                      task
                      miniature {
                        altText
                        sourceUrl
                      }
                      pages {
                        pageTitle
                        image {
                          altText
                          uri
                          sourceUrl
                        }
                      }
                      technology {
                        name
                        fieldGroupName
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
     
    }
  }
`;

const ProjectsPage: React.FC<PageProps> = ({data}) => {
  // console.log(data);


  return (
    <Layout>
      <SEO title="Projects" />
      <h1>My Projects</h1>
      <hr />
      <PageProjects
        wpQueryData={data}
      />
     
    </Layout>
  )
}

export default ProjectsPage;

