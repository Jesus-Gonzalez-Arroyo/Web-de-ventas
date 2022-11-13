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
        this.InsertarDatosProducto(InfoProducto)
    }

    InsertarDatosProducto(datos){
        const Producto = document.createElement('tr')
        Producto.innerHTML = `
            <td>${datos.name}</td>
            <td>${datos.precio}</td>
            <td>
                <img src='${datos.image}' style='width:100px'>
            </td>`
        
        listaProducto.appendChild(Producto)
    }
}
