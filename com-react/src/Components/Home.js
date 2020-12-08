import React from 'react'
import { HomeSlider } from './HomeSlider'
import image1 from '../Assets/image_1.jpg'
import image2 from '../Assets/image_2.jpg'

export const Home = () => {
    const [images, setImages] = React.useState([
        image1,
        image2,
        image1
    ])


    return (
        <section className="home">
            <div className="home__top">
                <h1 className="home__title">Lorem Ipsum</h1>
                <p className="home__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <svg className="home__arrow" viewBox="0 0 103 147" xmlns="http://www.w3.org/2000/svg" onclick="scrollToCarousel()">
                    <path d="M61.6969 107.488V0.761795H41.3332V107.488L0.605957 67.7082V95.8451L51.9999 146.298L102.424 95.8451V67.7082L61.6969 107.488Z" />
                </svg>
            </div>

            <HomeSlider images={images} />

        </section>

    )
}
