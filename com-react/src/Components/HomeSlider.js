import React from 'react'

export const HomeSlider = ({ images }) => {
    const [sliderSelected, setSliderSelected] = React.useState(0)

    const handleClick = (index) => {
        setSliderSelected(index)
    }

    const checkSelected = (index) => {
        return sliderSelected === index
    }

    return (
        <React.Fragment>
            <div className="home__slide">
                {
                    images.map((image, index) =>
                        <div className={`home__item ${checkSelected(index) ? 'home__item--active' : ''}`} key={'image-' + index}><img src={image} alt="Slide" /></div>
                    )
                }
            </div>
            <div className="home__dot-container">
                {
                    images.map((image, index) =>
                        <div className={`home__dot ${checkSelected(index) ? 'home__dot--active' : ''}`} key={'image-' + index} onClick={() => { handleClick(index) }}></div>
                    )
                }
            </div>
        </React.Fragment>
    )
}
