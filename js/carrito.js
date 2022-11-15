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
            precio: producto.querySelector('.description__card .precio').textContent
        }
        this.TotalCompra(InfoProducto.precio)
        this.InsertarDatosProducto(InfoProducto)
    }


    TotalCompra(precioProducto){
        const valor = document.querySelector('#valor_total')
        const valorproducto = parseFloat(precioProducto)
        const total = valor.value + valorproducto
        valor.value = total
    }

    InsertarDatosProducto(datos){
        const Producto = document.createElement('tr')
        Producto.innerHTML = `
            <td>${datos.name}</td>
            <td class='price'>${datos.precio}</td>
            <td>
                <img src='${datos.image}' style='width:100px'>
            </td>
            <td>
                <i class="fa-solid fa-trash"></i>
            </td>`
        
        listaProducto.appendChild(Producto)
    }
}
