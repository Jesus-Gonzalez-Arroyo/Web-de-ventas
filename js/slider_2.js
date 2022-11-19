let slider_2 = document.querySelector('#slider_2')
let slidersection_2 = document.querySelectorAll('.content_slider_2')
let slidersectionlast_2 = slidersection_2[slidersection_2.length - 1]

const btn_right_2 = document.querySelector('#btn-right_2')
const btn_left_2 = document.querySelector('#btn-left_2')

function sig(){
    let slidersectionFirst = document.querySelectorAll('.content_slider_2')[0]

    slider_2.style.marginLeft = '-33%'
    slider_2.style.transition = 'margin-left 1s'

    setTimeout(() => {
        slider_2.style.transition = 'none'
        slider_2.insertAdjacentElement('beforeend', slidersectionFirst)
        slider_2.style.marginLeft = '-0%'
    }, 1000);
}

btn_right_2.addEventListener('click', sig)


function pass(){
    let slidersection = document.querySelectorAll('.content_slider_2')
    let slidersectionlast = slidersection[slidersection.length - 1]

    slider_2.style.marginLeft = '33%'
    slider_2.style.transition = 'margin-left 1s'

    setTimeout(() => {
        slider_2.style.transition = 'none'
        slider_2.insertAdjacentElement('afterbegin', slidersectionlast)
        slider_2.style.marginLeft = '0%'
    }, 1000);
}

btn_left_2.addEventListener('click', pass)