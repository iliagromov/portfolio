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
    // console.log(props.projectsArray);


    const projectRender = props.projectsArray && props.projectsArray.map((project, i) => {
        let wpFields = project.blockSingle.singleProjectBlockGroup.wpFields;
        let title = wpFields?.title;
        let shortdescription = wpFields?.shortdescription;
        // let miniature = fields?.miniature;
        let imgSrc = wpFields && wpFields.miniature ? wpFields.miniature.sourceUrl : '';
        let projectPages = wpFields.pages;
        // console.log(wpFields);
        // let imgSrc = fields.miniature ? fields.miniature.sourceUrl : '';
        return (
            // <Link to={project.link} className="project" key={`project${i}`}>
            //     <figure className="page__figure works__effect">
            //         <img className="page__img" src={imgSrc} alt='' />
            //         <figcaption className="page__figcaption" >
            //             <h3 className="page__title-h3">{title}</h3>
            //             <p className="page__text">{shortdescription}</p>
            //             <button className="page__btn">посмотреть</button>
            //         </figcaption>
            //     </figure>
            // </Link>

            <Card projectPages={projectPages} key={`project${i}`} />
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
                    <section className="card-list">
                        {projectRender}
                    </section>

                </div>
            </div>
        </section>
    );
}


export default Projects;


