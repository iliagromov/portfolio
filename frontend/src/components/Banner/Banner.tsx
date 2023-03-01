import React, { FC } from 'react';
import { StaticImage  } from "gatsby-plugin-image";

import './style.sass';


export const Banner: FC = () => {
  return (
    <section className="banner">
        <div className="canvas"></div>
        <div className="banner__logo">
          <div className="page__subtitle">Ilia
            <span className="page_bold">Gromov</span>
          </div>
          <div className="page__img">
              <StaticImage src="../../assets/img/img-frontend-developer.png"  alt='logo'/>
          </div>
        </div>
    </section>
  )
}
