import React, { FC } from 'react';
import { StaticImage } from "gatsby-plugin-image";

import './style.sass';
import { graphql, useStaticQuery } from 'gatsby';

type SkillsProps = {
}

const Skills: FC<SkillsProps> = () => {
    const { wpPage } = useStaticQuery(
        graphql` {
          wpPage(uri: {eq: "/"}) {
            id
            title   
            myskills {
              mySkillsBlockGroup {
                wpFields {
                  skills {
                    image {
                      sourceUrl
                      altText
                      title
                    }
                    title
                  }
                }
              }
            }
          }
        }
    `);
  
  
    const skillsCount = wpPage.myskills.mySkillsBlockGroup.wpFields.skills.length;
    const skills = wpPage.myskills.mySkillsBlockGroup.wpFields.skills;

    const skillsRender = skills && skills.map((skill: any, i: number) => {
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


