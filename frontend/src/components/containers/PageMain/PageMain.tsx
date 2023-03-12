import * as React from "react";
import { PageProps, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import { Banner } from "../../common/Banner/Banner";
import Skills from "../../common/Skills/Skills";
import Services from "../../common/Services/Services";
import Advanatages from "../../common/Advanatages/Advanatages";
import Projects from "../../common/Projects/Projects";
import About from "../../common/About/About";

type PageMainProps = {
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


const PageMain: React.FC<PageMainProps> = (props) => {


 
  const {wpPage} = props.wpQueryData;
  const projectsData = wpPage.blockProjects.projectsBlockGroup.wpFields.projects;
  return (
    <>
      <Banner />
      <Skills />
      <Services />
      <Advanatages/>
      <Projects projectsArray={projectsData}/>
      <About />  
     

    </>
  )
}
export default PageMain;
