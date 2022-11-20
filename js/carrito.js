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


        const btn_sumar = document.querySelectorAll('#btn_sumar')
        const btn_restar = document.querySelectorAll('#btn_restar')
        const borrar = document.querySelectorAll('.delete')

        //sumar cantidad del producto
        btn_sumar.forEach((btn) => {
            btn.addEventListener('click', (e)=>{
                //sumar cantidad de unidades del producto
                const cantidad = e.target.parentElement.querySelector('.cant_produc')
                const cant_produc = parseInt(cantidad.value) + 1 
                cantidad.value = cant_produc
                //sumar el valor total segun el numero de unidades sumadas
                const valor = document.querySelector('#valor_total') 
                const valor_total_unidades = e.target.parentElement.parentElement.querySelector('.price').textContent
                valor.value = parseFloat(valor.value) + parseFloat(valor_total_unidades)
            })
        })
        
        //restar cantidad del producto
        btn_restar.forEach((btn) => {
            btn.addEventListener('click', (e)=>{
                //restar cantidad de unidades del producto
                const cantidad = e.target.parentElement.querySelector('.cant_produc')
                const cant_produc = parseInt(cantidad.value) - 1
                cantidad.value = cant_produc
                //restar el valor total segun el numero de unidades sumadas
                const valor = document.querySelector('#valor_total')
                const valor_total_unidades = e.target.parentElement.parentElement.querySelector('.price').textContent
                valor.value = parseFloat(valor.value) - parseFloat(valor_total_unidades)
            })
        });

        borrar.forEach((btn)=>{
            btn.addEventListener('click', (e)=>{
                //borrar un producto 
                const table = document.querySelector('.table table')
                table.removeChild(e.target.parentElement.parentElement.parentElement)
                
                //modificar el valor total segun el producto eliminado del carrito
                const valor = document.querySelector('#valor_total')

                valor.value = parseFloat(valor.value) - e.target.parentElement.parentElement.parentElement.querySelector('.price').textContent
            })
        })
    }

}
