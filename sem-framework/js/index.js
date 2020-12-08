
function toggleAccordion(accordion) {
    const parent = accordion.parentElement

    if (parent.classList.contains("accordion__item--active")) {
        parent.classList.remove('accordion__item--active')
    } else {
        Array.prototype.forEach.call(parent.parentElement.children, function (children) {
            children.classList.remove('accordion__item--active')
        })
        parent.classList.add('accordion__item--active')
    }
}


function loadCarousel() {
    let carousels = document.querySelectorAll('.carousel__itens')
    Array.prototype.forEach.call(carousels, function (carousel) {
        let lengthItems = carousel.querySelectorAll('.carousel__item').length
        const showItems = window.innerWidth > 768 ? 3 : 1
        const width = lengthItems * (carousel.parentElement.offsetWidth / showItems)
        carousel.style.width = width + 'px'
        carousel.setAttribute('data-length-items', lengthItems)
        carousel.setAttribute('data-position', 0)
        carousel.setAttribute('data-show', showItems)
    })
}

function moveCarousel(element, direction) {
    const itens = element.parentElement.querySelector('.carousel__itens')
    const showItems = itens.getAttribute('data-show')
    const width = itens.parentElement.offsetWidth / showItems
    let translateX = (new WebKitCSSMatrix(window
        .getComputedStyle(itens)
        .getPropertyValue('transform'))).m41

    let position = itens.getAttribute('data-position')
    const lengthItems = itens.getAttribute('data-length-items')
    position = itens.getAttribute('data-position')

    if (direction === 'right') {
        if (position == 0) {
            position = lengthItems - showItems + 1
        }
        position--
    } else {
        if (position == lengthItems - showItems) {
            position = -1
        }
        position++
    }

    translateX = position * width * -1

    itens.setAttribute('data-position', position)
    itens.style.transform = `translateX(${translateX}px)`
}

function mask(input) {
    setTimeout(() => {
        let value = input.value
        value = value.replace(/\D/g, "")                 //Remove tudo o que não é dígito
        value = value.replace(/^(\d\d)(\d)/g, "($1) $2") //Coloca parênteses em volta dos dois primeiros dígitos
        value = value.length == 14 ? value.replace(/(\d{5})(\d)/, "$1-$2") : value.replace(/(\d{4})(\d)/, "$1-$2")
        input.value = value
    }, 1)
}

function scrollToCarousel() {
    const carousel = document.getElementById('carousel')
    carousel.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
}

function changeImageHome(index) {
    const parent = index.parentElement.parentElement
    const position = index.getAttribute('data-index')
    parent.querySelector('.home__dot--active').classList.remove('home__dot--active')
    parent.querySelector('.home__item--active').classList.remove('home__item--active')

    parent.querySelector(`.home__item[data-index="${position}"]`).classList.add('home__item--active')
    index.classList.add('home__dot--active')
}


function submitForm(event) {
    event.preventDefault()
}

window.onload = (event) => {
    loadCarousel()
}
window.onresize = (event) => {
    loadCarousel()
}