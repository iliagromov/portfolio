import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link, graphql } from "gatsby";
import Layout from "../layouts/Default"
import SEO from "../components/seo"
import { StaticImage, GatsbyImage, getImage, withArtDirection  } from "gatsby-plugin-image";


const IndexPage: React.FC<PageProps> = ({data}) => {

  return (
    <Layout>
      <SEO title="home" />
      <h1>My Projects</h1>
      <hr />
      {data.allWpPost.nodes.map(node => (
        <div key={node.slug}>
          <Link to={node.slug}>
            <h2>{node.title}</h2>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
     
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
    }
  }
`;