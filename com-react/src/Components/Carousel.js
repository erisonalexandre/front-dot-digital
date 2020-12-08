import React from 'react'
import image from '../Assets/image_1.jpg'
import { CarouselItem } from './CarouselItem'

export const Carousel = () => {
    const [itensCarousel, setItensCarousel] = React.useState([])
    const [width, setWidth] = React.useState(768)
    const [numberItens, setNumberItens] = React.useState(3)
    const [position, setPosition] = React.useState(0)
    const [translateX, setTranslateX] = React.useState(0)

    const display = React.useRef()

    const loadItens = () => {
        let itens = []
        for (let i = 0; i < 9; i++) {
            itens.push({
                image: image,
                title: 'Lorem Ipsum',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            })
        }
        setItensCarousel(itens)
    }

    const moveCarousel = (direction) => {
        let newPosition = position
        const width = display.current.offsetWidth / numberItens

        if (direction === 'right') {
            if (newPosition === 0) {
                newPosition = itensCarousel.length - numberItens + 1
            }
            newPosition--
        } else {
            if (newPosition === itensCarousel.length - numberItens) {
                newPosition = -1
            }
            newPosition++
        }

        setTranslateX(newPosition * width * -1)
        setPosition(newPosition)
    }

    React.useEffect(() => {
        loadItens()
    }, [])

    React.useEffect(() => {
        const reziseCarousel = () => {
            const numberItens = window.innerWidth > 768 ? 3 : 1
            setNumberItens(numberItens)
            setWidth(itensCarousel.length * (display.current.offsetWidth / numberItens))
            setPosition(0)
        }
        reziseCarousel()

        window.addEventListener('resize', reziseCarousel)

        return () => {
            window.removeEventListener('resize', reziseCarousel)
        }
    }, [itensCarousel.length])

    return (
        <section id="carousel" className="carousel container">
            <div className="carousel__arrow carousel__arrow--left" onClick={() => moveCarousel('right')}>
                <svg viewBox="0 0 146 102" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.0713 61.1668L145.797 61.1668V40.8031L39.0713 40.8031L78.8511 0.0758667L50.7141 0.0758667L0.261754 51.4698L50.7141 101.894H78.8511L39.0713 61.1668Z" />
                </svg>
            </div>
            <div className="carousel__display" ref={display}>
                <div className="carousel__itens" style={{ width: width + 'px', transform: `translateX(${translateX}px)` }}>
                    {
                        itensCarousel.map((item, index) =>
                            <CarouselItem
                                {...item}
                                key={'carousel-item-' + index}
                            />
                        )
                    }

                </div>
            </div>
            <div className="carousel__arrow carousel__arrow--right" onClick={() => moveCarousel('left')}>
                <svg viewBox="0 0 146 102" xmlns="http://www.w3.org/2000/svg">
                    <path d="M106.988 40.8031L0.26178 40.8031L0.26178 61.1668L106.988 61.1668L67.2082 101.894H95.3451L145.798 50.5001L95.3451 0.0758581H67.2082L106.988 40.8031Z" />
                </svg>
            </div>
        </section>
    )
}
