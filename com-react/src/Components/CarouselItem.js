import React from 'react'

export const CarouselItem = ({ image, title, text }) => {
    return (
        <div className="carousel__item">
            <div className="carousel__image">
                <img src={image} alt="" />
            </div>
            <div className="carousel__text">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
