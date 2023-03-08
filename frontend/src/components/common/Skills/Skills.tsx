import React, { FC } from 'react';
import { StaticImage } from "gatsby-plugin-image";

import './style.sass';

type SkillsProps = {
    skillsArray: Object[]
}

const Skills: FC<SkillsProps> = (props) => {
    // console.log(props);
    const skillsCount =  props.skillsArray && props.skillsArray.length;
    const skillsRender = props.skillsArray && props.skillsArray.map((skill, i) => {
        let imgSrc = skill.image ? skill.image.sourceUrl : '';
        return (
            <div className="skill" key={`skill${i}`}>
                <div className="pagehristina cosmhristina cosmeticsetics__img">
                    {/* <StaticImage  alt='HTML 5' title="HTML 5" /> */}
                    <img src={imgSrc} alt="" />
                </div>
                <div className="page__subtitle">{skill.title}</div>
            </div>
        )
    });

    return (
        <section className="skills isAnimate animated">
            <div className="page__title page_transform-uppercase page_text-center">
                <div className="page__subtitle_big">Навыки</div>
                <h2 className="page__title_main page__title-h2 page_bold">Навыки {skillsCount}</h2>
            </div>
            <div className="wrapper">
                <div className="skills-content">
                    {skillsRender}
                </div>
            </div>
        </section>
    );
}


export default Skills;


