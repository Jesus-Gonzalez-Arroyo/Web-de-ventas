const icon_carrito = document.querySelector('#icon_carrito')
const cerrar_carrito = document.querySelector('#close_carrito')

icon_carrito.addEventListener('click', ()=>{
    const carrito = document.querySelector('.carrito')
    carrito.style.display = 'block'
})


cerrar_carrito.addEventListener('click', ()=>{
    const carrito = document.querySelector('.carrito')
    carrito.style.display = 'none'
})
