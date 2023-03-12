import React, { FC } from 'react';

import './Card.sass';
import SwiperCard from './SwiperCard';

type CardProps = {
    projectPages: Object[]
}

const Card: FC<CardProps> = (props) => {

    // console.log(props);
    const { projectPages } = props;

    return (

        <article className="card">
            <header className="card-header">
                <p>Sep 11th 2020</p>
                <h2>Never forget</h2>
            </header>

            <div className="card-author">
                <a className="author-avatar" href="#">
                    <img src="avatar.png" />
                </a>
                <svg className="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div className="author-name">
                    <div className="author-name-prefix">Author</div>
                    Jeff Delaney
                </div>
            </div>
            <div className="pages">
                <SwiperCard cardArray={projectPages} />
            </div>

            <div className="tags">
                <a href="#">html</a>
                <a href="#">css</a>
                <a href="#">web-dev</a>
            </div>
        </article>
    );
}


export default Card;


