import React from 'react';


const Card = ({
    title,
    image,
    url
}) => (
    <article>
        <a href={url} target="_blank">
            <h3 className="Title">
                { title }
            </h3>
            <img src={ image } alt=""/>
        </a>
    </article>
)

export default Card