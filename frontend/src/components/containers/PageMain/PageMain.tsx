import * as React from "react";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import { Banner } from "../../common/Banner/Banner";
import Skills from "../../common/Skills/Skills";
import Services from "../../common/Services/Services";

type PageMainProps = {
  wpQueryData: {
    wpPage: Object,
    allMarkdownRemark: {
      nodes: []
    },
    allWpPost: {
      nodes: []
    }
  }
}

const PageMain: React.FC<PageMainProps> = ({
  wpQueryData
}) => {

  // const { nodes } = wpQueryData.data;
  //FIXME: поправить путь
  // const skills = wpQueryData.wpPage.blockSkills?.skillsBlockGroup.wpFields?.skills;
  const skills = wpQueryData.wpPage.myskills.mySkillsBlockGroup.wpFields?.skills;
  // const skills = null;
  // console.log(skills);
  // console.log(wpQueryData.wpPage.blockSkills.skillsBlockGroup.wpFields.skills);
  // console.log(wpQueryData.wpPage.blockSkills.skillsBlockGroup.wpFields.skills);
  // console.log(wpQueryData.allMarkdownRemark);
  // console.log(wpQueryData.allWpPost);

  return (
    <>
      <Banner />
      <Skills skillsArray={skills}/>
      <Services servicesArray={skills}/>
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
export default PageMain;
