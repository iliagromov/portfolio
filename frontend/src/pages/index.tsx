import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../layouts/Default";
import SEO from "../components/seo"
import PageMain  from "../components/containers/PageMain/PageMain";

const IndexPage: React.FC<PageProps> = ({data}) => {
  // console.log(data);
  return (
    <Layout>

      <SEO title="Iila Gromov" />
      <PageMain 
      data={data.allMarkdownRemark}
      />
     
    </Layout>
  )
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    },
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          category
          title
          url
          image {
            id
            childrenImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 200, quality: 100, formats: [AUTO, AVIF, WEBP])
            }
          }
        }
      }
    }
  }
`;