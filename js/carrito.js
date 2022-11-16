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
                <i class="fa-solid fa-trash"></i>
            </td>`
        
        listaProducto.appendChild(Producto)
    }
}
