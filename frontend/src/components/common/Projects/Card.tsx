import React, { FC } from 'react';

import './Card.sass';
import SwiperCard from './SwiperCard';

type CardProps = {
    projectProps: Object,
    projectPages: Object[]
}

const Card: FC<CardProps> = (props) => {

    
    const { projectPages } = props;
    const {
        title,
        days,
        technology
    } = props.projectProps;

    const renderTechnology = technology && technology.map((item)=>{
        return (<span>{item.name}</span>)
    });

    return (

        <article className="card">
            <div className="card-header">
                <p>Sep 11th 2020</p>
                <h2>{title}</h2>
            </div>

            <div className="card-days">
                <div className="card-days__count">
                    {days}
                </div>
                <div className="card-days__svg">
                    <svg className="half-circle" viewBox="0 0 106 57">
                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                </div>
            </div>
            <div className="card-pages">
                <SwiperCard cardArray={projectPages} />
            </div>

            <div className="tags">
                {renderTechnology}
            </div>
        </article>
    );
}


export default Card;


