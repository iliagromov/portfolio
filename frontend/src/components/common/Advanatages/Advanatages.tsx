import React, { FC } from 'react';
import { StaticImage } from "gatsby-plugin-image";

import './style.sass';

type AdvanatagesProps = {
    advanatagesArray: Object[]
}

const Advanatages: FC<AdvanatagesProps> = (props) => {
    // console.log(props.skillsArray);
    // const skillsCount =  props.skillsArray && props.skillsArray.length;
    const advanatagesRender = props.advanatagesArray && props.advanatagesArray.map((advanatage, i) => {
        return (
            <li className="page__list-item" key={`skill${i}`}> <span className="page__line_before">{advanatage.title}</span></li>
        )
    });

    return (
        <section className="advantages isAnimate animated">
								<div className="page__title page_transform-uppercase page_text-center">
									<h2 className="page__subtitle_big">Преимущества</h2>
									<h2 className="page__title_main page__title-h2 page_bold">Преимущества</h2>
								</div>
				<div className="wrapper">
					<div className="advantages-content">
						<ol className="page__lists">
                                {advanatagesRender}
						</ol>
					</div>
				</div>
			</section>
    );
}


export default Advanatages;


