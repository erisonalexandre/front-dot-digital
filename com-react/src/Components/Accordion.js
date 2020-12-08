import React from 'react'
import image from '../Assets/image_1.jpg'
import { AccordionItem } from './AccordionItem'

export const Accordion = () => {
    const [itensAccordion, setItensAccordion] = React.useState([])
    const [accordionSelected, setAccordionSelected] = React.useState(null)

    const loadItens = () => {
        let itens = []
        for (let i = 0; i < 9; i++) {
            itens.push({
                image: image,
                title: 'Lorem Ipsum',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
            })
        }
        setItensAccordion(itens)
    }

    const handleClick = (index) => {
        if (accordionSelected === index) {
            setAccordionSelected(null)
        } else {
            setAccordionSelected(index)
        }
    }

    React.useEffect(() => {
        loadItens()
    }, [])

    return (
        <section className="accordion">
            <div className="container">
                <div className="accordion__container">
                    {
                        itensAccordion.map((item, index) =>
                            <AccordionItem
                                {...item}
                                selected={accordionSelected === index}
                                onClick={() => handleClick(index)}
                                key={'accordion-item-' + index}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    )
}
