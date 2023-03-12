import * as React from "react";
import { PageProps, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

import Projects from "../../common/Projects/Projects";

type PageProjectsProps = {
  wpQueryData: {
    wpPage: {
      blockProjects: Object
    },
    blockProjects: Object,
    allMarkdownRemark: {
      nodes: []
    },
    allWpPost: {
      nodes: []
    }
  }
}


const PageProjects: React.FC<PageProjectsProps> = (props) => {


 
  const {wpPage} = props.wpQueryData;
  const projectsData = wpPage.blockProjects.projectsBlockGroup.wpFields.projects;
  return (
    <>
      <Projects projectsArray={projectsData}/>
     

    </>
  )
}
export default PageProjects;
