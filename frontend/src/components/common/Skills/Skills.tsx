import React, { FC } from 'react';
import { StaticImage } from "gatsby-plugin-image";

import './style.sass';

const Skills: FC = () => {
    return (
        <section className="skills">
            <div className="page__title page_transform-uppercase page_text-center">
                <div className="page__subtitle_big">Навыки</div>
                <h2 className="page__title_main page__title-h2 page_bold">Навыки</h2>
            </div>
            <div className="wrapper">
                <div className="skills-content">
                    <div className="skill">
                        <div className="page__img">
                        <StaticImage src="../../../assets/img/logos/img-html-logo.png" alt='HTML 5' title="HTML 5"/>
                        </div>
                        <div className="page__subtitle">HTML 5</div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Skills;


