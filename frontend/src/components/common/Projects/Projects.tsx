import React, { FC } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby-link';

import './Projects.sass';
import './Card.sass';
import Card from './Card';
import SwiperCard from './SwiperCard';


type ProjectProps = {
    projectsArray: Object[],

}

const Projects: FC<ProjectProps> = (props) => {

    const projectRender = props.projectsArray && props.projectsArray.map((project, i) => {
        const wpFields = project.blockSingle.singleProjectBlockGroup.wpFields;

        const projectPages = wpFields.pages;
       
        return (
            <Card projectProps={wpFields} projectPages={projectPages} key={`project${i}`} />
        )
    });

    return (
        <section className="projects isAnimate animated">
            <div className="page__title page_transform-uppercase page_text-center">
                <h2 className="page__subtitle_big">Проекты</h2>
                <h2 className="page__title_main page__title-h2 page_bold">Проекты</h2>
            </div>
            <div className="wrapper">
                <div className="projects-content">
                        {projectRender}
                        {projectRender}
                        {projectRender}
                        {projectRender}
                        {projectRender}
                        {projectRender}
                        {projectRender}
                        {projectRender}
                        {projectRender}
                </div>
            </div>
        </section>
    );
}


export default Projects;


