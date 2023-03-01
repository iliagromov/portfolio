import * as React from "react";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import { Banner } from "../../../components/Banner/Banner";

const IndexPage: React.FC<PageProps> = (data) => {
 
  const { nodes } = data.data;
  console.log(nodes);
  
  return (
    <>
      <Banner/>
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      <hr />
      {/*data.allWpPost.nodes.map(node => (
        <div key={node.slug}>
          <Link to={node.slug}>
            <h2>{node.title}</h2>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))*/}
      <h4>My posts mardown</h4>
      <div className="posts">
        {/*nodes.map(post => {
          const {category, title, url, image} = post.frontmatter;
          // console.log(image);
          const img = getImage(image.childrenImageSharp[0].gatsbyImageData);
          // console.log(img);
          return (
            <div key={post.id} className="post">
              <GatsbyImage image={img} alt={title}/>
              <Link to={`/${category}/${url}`} >{title}</Link>

            </div>
          )
        })*/}
      </div>
    </>
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