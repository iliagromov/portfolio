import React, { FC } from 'react';
import { StaticImage } from "gatsby-plugin-image";

import './style.sass';

type ProjectProps = {
    projectsArray: Object[]
}

const Projects: FC<ProjectProps> = (props) => {
    // console.log(props.projectsArray);
    // const skillsCount =  props.skillsArray && props.skillsArray.length;
    const projectRender = props.projectsArray && props.projectsArray.map((project, i) => {
        let fields = project.blockSingle.singleProjectBlockGroup.wpFields;
        let title = fields?.title;
        let shortdescription = fields?.shortdescription;
        // let miniature = fields?.miniature;
        let imgSrc = fields && fields.miniature ? fields.miniature.sourceUrl : '';
        // console.log(fields);
        // let imgSrc = fields.miniature ? fields.miniature.sourceUrl : '';
        return (
            <a href={project.link} className="project" key={`project${i}`}>
                
                <figure className="page__figure works__effect">
                    <img className="page__img" src={imgSrc} alt='' />
                    <figcaption className="page__figcaption" >
                        <h3 className="page__title-h3">{title}</h3>
                        <p className="page__text">{shortdescription}</p>
                        <button className="page__btn">посмотреть</button>
                    </figcaption>
                </figure>
            </a>
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
                </div>
            </div>
        </section>
    );
}


export default Projects;


