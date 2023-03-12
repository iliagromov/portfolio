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
                id
                title
                link
                blockSingle {
                  singleProjectBlockGroup {
                    wpFields {
                      title
                      shortdescription
                      miniature {
                        altText
                        sourceUrl
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

