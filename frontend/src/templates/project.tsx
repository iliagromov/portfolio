import React from "react";
import Layout from "../layouts/Default";
import { graphql } from "gatsby";

export const query = graphql`
  query($slug: String!) {
    allWpProject(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
      }
    }
  }
`;

export default function BlogPost({data}) {
  const post = data.allWpProject.nodes[0]
  console.log(post);
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        
      </div>
    </Layout>
  )
}
