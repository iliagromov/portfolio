import React, { FC, useEffect, useRef } from 'react';
// import { StaticImage } from "gatsby-plugin-image";

import './style.sass';

type ServicesProps = {
    servicesArray: Object[]
}


const Services: FC<ServicesProps> = (props) => {
    // console.log(props.servicesArray);
    const serviceRender = props.servicesArray && props.servicesArray.map((service, i) => {
        let imgSrc = service.image ? service.image.sourceUrl : '';
        return (
            <div className="service"  key={`service${i}`}>
                <div className="page__img">
                    <img src="assets/img/shared/img-Email.png" alt="E-mail письма" title="E-mail письма"/>

                    </div>
                <h4 className="page__subtitle">E-mail письма</h4>
                <div className="page__description">
                    <h4 className="page__subtitle page_text-center">E-mail письма</h4>
                    <p className="page__text">Делаю верстку e-mail письм как для уведомления пользователя от Вашего сайта, так и для рассылки УТП</p>
                </div>
            </div>
        )
    });

    return (
       <div>
         <section className="services isAnimate animated">
            <div className="page__title page_transform-uppercase page_text-center">
                <h2 className="page__subtitle_big">Услуги</h2>
                <h2 className="page__title_main page__title-h2 page_bold">Услуги</h2>
            </div>
            <div className="wrapper">
                <div className="services-content">
                    {serviceRender}
                </div>
            </div>
        </section>
       </div>
    )
}


export default Services;