import React from 'react'

export const AccordionItem = ({ title, image, text, selected, onClick }) => {
    return (
        <div className={`accordion__item ${selected ? 'accordion__item--active' : ''}`}>
            <div className="accordion__header" onClick={onClick}>
                <h3>{title}</h3>
                <div>
                    <svg className="accordion__arrow" viewBox="0 0 103 147" xmlns="http://www.w3.org/2000/svg">
                        <path d="M61.6969 107.488V0.761795H41.3332V107.488L0.605957 67.7082V95.8451L51.9999 146.298L102.424 95.8451V67.7082L61.6969 107.488Z" />
                    </svg>
                </div>
            </div>
            <div className="accordion__content">
                <div className="accordion__image">
                    <img src={image} />
                </div>
                <p>{text}</p>
            </div>
        </div>
    )
}
