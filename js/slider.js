let slider = document.querySelector('#slider')
let slidersection = document.querySelectorAll('.content_slider')
let slidersectionlast = slidersection[slidersection.length - 1]

const btn_right = document.querySelector('#btn-right')
const btn_left = document.querySelector('#btn-left')


function next(){
    let slidersectionFirst = document.querySelectorAll('.content_slider')[0]

    slider.style.marginLeft = '-33%'
    slider.style.transition = 'margin-left 1s'

    setTimeout(() => {
        slider.style.transition = 'none'
        slider.insertAdjacentElement('beforeend', slidersectionFirst)
        slider.style.marginLeft = '-0%'
    }, 1000);
}

btn_right.addEventListener('click', next)


function prev(){
    let slidersection = document.querySelectorAll('.content_slider')
    let slidersectionlast = slidersection[slidersection.length - 1]

    slider.style.marginLeft = '33%'
    slider.style.transition = 'margin-left 1s'

    setTimeout(() => {
        slider.style.transition = 'none'
        slider.insertAdjacentElement('afterbegin', slidersectionlast)
        slider.style.marginLeft = '0%'
    }, 1000);
}

btn_left.addEventListener('click', prev)


