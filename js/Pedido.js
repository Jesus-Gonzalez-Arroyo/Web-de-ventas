const carrito = new Carrito
const btn__carrito = document.querySelectorAll('.btn__carrito')
const listaProducto = document.querySelector('.carrito table')

btn__carrito.forEach((boton)=>{
    boton.addEventListener('click', (e)=>{carrito.AñadirProducto(e)})
})