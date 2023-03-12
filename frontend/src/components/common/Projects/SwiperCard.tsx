import React, { FC } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import './SwiperCard.sass';

// import required modules
import { EffectCards } from "swiper";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";



type SwiperCardProps = {
    cardArray: Object[]
}

const SwiperCard: FC<SwiperCardProps> = (props) => {
    console.log(props.cardArray);

    const renderSwiperSlide = props.cardArray.map((slide, i) =>{
        console.log(slide);
        const image = getImage(slide.image);
        // const img = getImage(image) выдавал ошибку
        // сработало только const img = getImage(image.childrenImageSharp[0].gatsbyImageData)


        return(
            <SwiperSlide key={`project${i}`}> {slide.pageTitle} {i}
                <img src={slide.image.sourceUrl} alt={slide.pageTitle}/>
            </SwiperSlide>
        )
    });
    return (
        <>
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
        >
            {renderSwiperSlide}
        </Swiper>
        </>
    );
}


export default SwiperCard;


