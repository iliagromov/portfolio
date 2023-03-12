import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../layouts/Default";
import SEO from "../components/seo"
import PageMain  from "../components/containers/PageMain/PageMain";


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

const IndexPage: React.FC<PageProps> = ({data}) => {
  // console.log(data.allWpPost.nodes);
  // console.log(data);

  return (
    <Layout>

      <SEO title="Iila Gromov" />
      <PageMain 
      wpQueryData={data}
      />
     
    </Layout>
  )
}

export default IndexPage;

