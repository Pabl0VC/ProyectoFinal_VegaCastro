//Proyecto Tienda Virtual

//-------------- Capturas nodos DOM ------------
let productos = document.querySelector("#productos")
let buscador = document.querySelector("#buscador") 
let coincidencia = document.querySelector("#coincidencia")
let selectOrden = document.querySelector("#selectOrden")
let cargaTexto = document.querySelector("#loaderTexto")
let cargando = document.querySelector("#loader")
let botonCarrito = document.querySelector("#botonCarrito")
let modalBodyCarrito = document.querySelector("#modal-bodyCarrito")
let botonFinalizarCompra = document.querySelector("#botonFinalizarCompra")
let precioTotal = document.querySelector("#precioTotal")
let fecha = document.querySelector("#fecha")



//Animacion Carga de productos
setTimeout(()=>{
    cargaTexto.innerHTML = ""
    cargando.remove()
    mostrarCatalogo(stock)
}, 1100)

//Date
const DateTime = luxon.DateTime
const fechaHoy = DateTime.now()
let fechaMostrar = fechaHoy.toLocaleString(DateTime.DATE_FULL)




//----------------------------------------- CATALOGO DE PRODUCTOS -----------------------------------------
function mostrarCatalogo(array){
    productos.innerHTML = ""
    for(let producto of array){
        let nuevoProducto = document.createElement("div")
        nuevoProducto.classList.add("col-12", "col-md-6", "col-lg-4", "my-3")
        nuevoProducto.innerHTML = `
        <div id="${producto.id}" class="card m-auto colorCard" style="width: 18rem;">
                <img class="card-img-top img-fluid" style="height: 200px;"src="img/productos/${producto.imagen}" alt="${producto.modelo} marca ${producto.marca}">
                <div class="card-body">
                    <h3 class="card-title cardText">${producto.marca.toUpperCase()}</h3>
                    <p class="cardText">${producto.genero.toUpperCase()} </p>
                    <p class="cardText">${producto.articulo.toUpperCase()} ${producto.modelo.toUpperCase()}</p>
                    <p class="cardPrecio">${producto.precio.toLocaleString("es-CL", { style: "currency", currency: "CLP" })} CLP</p>
                    <p class="cardSku">SKU ${producto.sku}</p>
                    <button id="agregarBtn${producto.id}" class="button-48" role="button"><span class="text">Agregar al carrito</span></button>
                </div>
        </div>`
        productos.appendChild(nuevoProducto)

        //Boton Agregar al Carrito
        let btnAgregar = document.querySelector(`#agregarBtn${producto.id}`)
        btnAgregar.addEventListener("click", ()=>{
            agregarAlCarrito(producto)
            
        })
    }
}

//----------------------------------------- CARRITO DE COMPRAS -----------------------------------------

//---------- Array "productosEnCarrito" --------
let productosEnCarrito = []
if(localStorage.getItem("carrito")){ // capturamos los valores de "carrito" 
    
    for(let product of JSON.parse(localStorage.getItem("carrito"))){
        //para conservar la cantidad del storage
        let cantStorage = product.cantidad
        let productoCarrito = new Products (product.id, product.sku, product.articulo, product.genero, product.marca, product.modelo, product.precio, product.imagen)
        productoCarrito.cantidad = cantStorage
        productosEnCarrito.push(productoCarrito)
    }
    console.log(productosEnCarrito)
}else{
    productosEnCarrito = [] //Si no se ha agregado nada al carrito dejamos el Array "productosEnCarrito" vacio
}



//FUNCION AGREGAR AL CARRITO
function agregarAlCarrito(producto){
    let productoAgregado = productosEnCarrito.find((elem)=> elem.id == producto.id)
    
    if(productoAgregado == undefined){
        productosEnCarrito.push(producto)
        console.log(productosEnCarrito)
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))

        //sweet alert
        Swal.fire({
            title: "Producto agregado al carrito",
            text: `"${producto.articulo} ${producto.marca} ${producto.modelo}" ha sido agregado exitosamente al carrito`,
            icon: "info",
            confirmButtonText: 'Entendido',
            confirmButtonColor: "green",
            timer: 3000,
            imageUrl: `img/productos/${producto.imagen}`,
            imageHeight: 200
        })
    }else{
        Swal.fire({
            title: `Producto ya existente`,
            text: `El producto "${productoAgregado.articulo} ${productoAgregado.modelo}" ya existe en el carrito`,
            icon: "info",
            timer: 3000,
        })
    }
}



//Agregar al modal carrito
function cargarProductosCarrito(array){
    modalBodyCarrito.innerHTML = ""
    array.forEach((productoEnCarrito) => {
        modalBodyCarrito.innerHTML += `
        <div class="card mb-3 cardText bg-light border border-warning rounded" style="max-width: 540px;" id ="productoCarrito${productoEnCarrito.id}">
        <div class="row g-0">
        <div class="col-md-4 border-end border-warning rounded">
            <img src="img/productos/${productoEnCarrito.imagen}" class="img-fluid rounded-start h-100" alt="Productos Carrito">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${productoEnCarrito.articulo} ${productoEnCarrito.marca} ${productoEnCarrito.modelo}</h5>
            <p class="card-text">${productoEnCarrito.precio.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</p>
            <p class="card-text"><small class="text-muted">Unidades: ${productoEnCarrito.cantidad}</small></p>
            <button class= "btn btn-outline-success btn-sm"" id="botonSumarUnidad${productoEnCarrito.id}"><i class=""></i>+1</button>
            <button class= "btn btn-outline-secondary btn-sm"" id="botonEliminarUnidad${productoEnCarrito.id}"><i class=""></i>-1</button>
            <button class= "btn btn-outline-danger btn-sm"" id="botonEliminar${productoEnCarrito.id}"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>
        </div>
    </div>
        `
    })
    //funcionalidades botones carrito
    array.forEach((productoEnCarrito)=> {
        //Eliminar producto del carrito
        document.getElementById(`botonEliminar${productoEnCarrito.id}`).addEventListener("click", ()=>{
            //eliminar del DOM
            let cardProducto = document.getElementById(`productoCarrito${productoEnCarrito.id}`)
            cardProducto.remove()

            //eliminar del array de compras
            let productoEliminar = array.find((producto)=>producto.id == productoEnCarrito.id)
            console.log(productoEliminar)
            let posicion = array.indexOf(productoEliminar)
            array.splice(posicion,1)

            //eliminar el storage
            localStorage.setItem("carrito", JSON.stringify(array))

            //recalcular el total
            calcularTotal(array)
        })
        
        //Sumar unidad de producto al carrito
        document.getElementById(`botonSumarUnidad${productoEnCarrito.id}`).addEventListener("click", ()=>{
            productoEnCarrito.sumarUnidad()
            localStorage.setItem("carrito", JSON.stringify(array))
            cargarProductosCarrito(array)
        })

        //Restar unidad de producto al carrito
        document.getElementById(`botonEliminarUnidad${productoEnCarrito.id}`).addEventListener("click", ()=>{
            let eliminar = productoEnCarrito.restarUnidad()
            if(eliminar < 1){
                //elimnar del DOM
                let cardProducto = document.getElementById(`productoCarrito${productoEnCarrito.id}`)
                cardProducto.remove()
                //eliminar del array de compras
                
                let productoEliminar = array.find((producto)=>producto.id == productoEnCarrito.id)
                console.log(productoEliminar)

                let posicion = array.indexOf(productoEliminar)
                console.log(posicion)
                array.splice(posicion,1)
                console.log(array)
                //eliminar el storage
                localStorage.setItem("carrito", JSON.stringify(array))
                //recalcular el total
                calcularTotal(array)
            }else{
                localStorage.setItem("carrito", JSON.stringify(array))
            }
            cargarProductosCarrito(array)
        })
    })

    calcularTotal(array)
}



function calcularTotal(array){
    let total = array.reduce((acc, productoCarrito)=> acc + (productoCarrito.precio * productoCarrito.cantidad) ,0)
    total == 0 ? precioTotal.innerHTML = `No hay productos en el carrito` :
    precioTotal.innerHTML = `<strong>Total ${total.toLocaleString("es-CL", { style: "currency", currency: "CLP" })} CLP</strong>`
    return total
}



function finalizarCompra(){
    let finalizarTotal = calcularTotal(productosEnCarrito)
    if(finalizarTotal == 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No tienes productos en el carrito!',
        })
    }
    else{
        Swal.fire({
            title: `Está seguro de realizar la compra por ${finalizarTotal.toLocaleString("es-CL", { style: "currency", currency: "CLP" })} CLP`,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Sí, seguro',
            cancelButtonText: 'No, no quiero',
            confirmButtonColor: 'green',
            cancelButtonColor: 'red'
        })
        .then((result)=>{
            if(result.isConfirmed){
                Swal.fire({
                    title: `Compra realizada`,
                    text: `Su pedido será enviado hoy ${fechaMostrar}`,
                    icon: 'success',
                    confirmButtonColor: 'green',
                    })
                    //resetear carrito
                    productosEnCarrito = []
                    //removemos storage
                    localStorage.removeItem("carrito")
            }else{
                Swal.fire({
                    title: 'Compra no realizada',
                    icon: 'error',
                    text: `La compra no ha sido realizada! ATENCIÓN sus productos siguen en el carrito`,
                    confirmButtonColor: 'green',
                    
                })
            }
        }
        )
    }
}



//Busqueda de productos
function buscarInfo(buscado, array){
    let busquedaArray = array.filter(
        (producto) => producto.marca.toLowerCase().includes(buscado.toLowerCase()) || producto.modelo.toLowerCase().includes(buscado.toLowerCase())) 

    //condicional sino encuentra ninguna coincidencia
    if(busquedaArray.length == 0){
        coincidencia.innerHTML = `<div class="alert alert-danger m-5" role="alert">No existe el producto ${buscado.toUpperCase()}</div>`
        mostrarCatalogo(busquedaArray)
    }else{
        coincidencia.innerHTML = ""
        mostrarCatalogo(busquedaArray)
    }
}



//------------- Filtrado de procuctos (select) ----------------

//Orden Menor precio
function ordenarMenorMayor(array){
    const menorMayor = [].concat(array)
    menorMayor.sort((a,b) => a.precio - b.precio)
    mostrarCatalogo(menorMayor)
}

//Orden Mayor precio
function ordenarMayorMenor(arr){
const mayorMenor = [].concat(arr)
mayorMenor.sort((param1, param2)=>{
    return param2.precio - param1.precio
})
mostrarCatalogo(mayorMenor)
}

//CATALOGO HOMBRE
function catalogoHombre(arr){
    let hombre = arr.filter((stock)=> stock.genero.toUpperCase() == "HOMBRE")
    if(hombre.length == 0){
    }else{
        mostrarCatalogo(hombre)
    }
}

//CATALOGO MUJER
function catalogoMujer(arr){
    let mujer = arr.filter((stock)=> stock.genero.toUpperCase() == "MUJER")
    if(mujer.length == 0){
        console.log(`ERROR`)
    }else{
        mostrarCatalogo(mujer)
    }
}

//CATALOGO UNISEX
function catalogoUnisex(arr){
    let unisex = arr.filter((stock)=> stock.genero.toUpperCase() == "UNISEX")
    if(unisex.length == 0){
    }else{
        mostrarCatalogo(unisex)
    }
}




//------------------------------------- EVENTOS -------------------------------------

//Input barra de busqueda
buscador.addEventListener("input", ()=>{
    
    buscarInfo(buscador.value, stock)
}) 


//Select (filtrado) 
selectOrden.addEventListener("change", ()=>{
    console.log(selectOrden.value)
    if(selectOrden.value == 1){ 
        ordenarMayorMenor(stock)
    }else if(selectOrden.value == 2){ 
        ordenarMenorMayor(stock)
    }else if(selectOrden.value == 3){
        catalogoHombre(stock)
    }else if(selectOrden.value == 4){
        catalogoMujer(stock)
    }else if(selectOrden.value == 5){
        catalogoUnisex(stock)
    }else{
        mostrarCatalogo(stock) 
    }
})


botonCarrito.addEventListener("click", ()=>{
    cargarProductosCarrito(productosEnCarrito)
})

botonFinalizarCompra.addEventListener("click", ()=>{
    finalizarCompra()})
