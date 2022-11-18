class Carrito {

    AñadirProducto(e){
        if(e.target.classList.contains('btn__carrito')){
            const producto = e.target.parentElement
            this.leerDatosproducto(producto)
        }
    }

    leerDatosproducto(producto){
        const InfoProducto = {
            name: producto.querySelector('.description__card .title').textContent,
            image: producto.querySelector('img').src,
            precio: producto.querySelector('.description__card .precio_producto .precio').textContent
        }
        this.TotalCompra(parseFloat(InfoProducto.precio))
        this.InsertarDatosProducto(InfoProducto)
    }

    TotalCompra(precioProducto){
        const valor = document.querySelector('#valor_total')
        const valorproducto = precioProducto
        const total = parseFloat(valor.value) + valorproducto
        valor.value = total
    }

    InsertarDatosProducto(datos){
        const Producto = document.createElement('tr')
        Producto.innerHTML = `
            <td>${datos.name}</td>
            <td class='price'>${datos.precio}</td>
            <td>
                <img src='${datos.image}'>
            </td>
            <td>
                <button class='btn_cant_produc' id='btn_sumar'>+</button>
                    <input class='cant_produc' value='1' type='text'>
                <button class='btn_cant_produc' id='btn_restar'>-</button>
            </td>
            <td>
                <button class='delete'>
                    <i class="fa-solid fa-trash delete"></i>
                </button>
            </td>`
        
        listaProducto.appendChild(Producto)


        const btn_sumar = document.querySelector('#btn_sumar')
        const btn_restar = document.querySelector('#btn_restar')
        const borrar = document.querySelectorAll('.delete')

        //sumar cantidad del producto
        btn_sumar.addEventListener('click', (e)=>{
            const cantidad = e.target.parentElement.querySelector('.cant_produc')
            const cant_produc = parseInt(cantidad.value) + 1
            cantidad.value = cant_produc
        })
        
        //restar cantidad del producto
        btn_restar.addEventListener('click', ()=>{
            const cantidad = document.querySelector('.cant_produc')
            const cant_produc = parseInt(cantidad.value) - 1
            cantidad.value = cant_produc
        })

        borrar.forEach((btn)=>{
            btn.addEventListener('click', (e)=>{
                //borrar un producto 
                const table = document.querySelector('.table table')
                table.removeChild(e.target.parentElement.parentElement.parentElement)
                const valor = document.querySelector('#valor_total')
                
                //modificar el valor total segun el producto eliminado del carrito
                const nuevototal = parseFloat(valor.value) - e.target.parentElement.parentElement.parentElement.querySelector('.price').textContent
                valor.value = nuevototal
            })
        })
    }

}
