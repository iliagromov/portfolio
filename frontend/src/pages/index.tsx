import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../layouts/Default";
import SEO from "../components/seo"
import PageMain  from "../components/containers/PageMain/PageMain";


const IndexPage: React.FC<PageProps> = ({data}) => {
  // console.log(data.allWpPost.nodes);
  console.log(data);

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

export const query = graphql`
  query {
    wpPage(uri: {eq: "/"}) {
      id
      title
      blockServices {
        skillsBlockGroup {
          wpFields {
            service {
              title
              image {
                altText
                sourceUrl
              }
            }
          }
        }
      }
      blockAdvantages {
        advantagesBlockGroup {
          wpFields {
            advantages {
              title
            }
          }
        }
      }
      blockProjects {
        projectsBlockGroup {
          wpFields {
            projects {
              ... on WpProject {
                id
                title
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
      blockAbout {
        aboutBlockGroup {
          fieldGroupName
          wpFields {
            about {
              description
            }
          }
        }
      }
      myskills {
        mySkillsBlockGroup {
          wpFields {
            skills {
              image {
                altText
                title
              }
              title
            }
          }
        }
      }
    }
  }
`;