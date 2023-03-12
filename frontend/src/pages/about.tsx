import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link, graphql } from "gatsby";
import Layout from "../layouts/Default"
import SEO from "../components/seo"
import { StaticImage, GatsbyImage, getImage, withArtDirection  } from "gatsby-plugin-image";


const AboutPage: React.FC<PageProps> = ({data}) => {

  return (
    <Layout>
      <SEO title="Project" />
      <h1>My about</h1>
      <hr />
     
    </Layout>
  )
}

export default AboutPage;
