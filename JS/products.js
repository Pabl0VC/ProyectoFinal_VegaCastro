//PROYECTO:

//-------------- Capturas nodos DOM ------------
let productos = document.querySelector("#productos")
let guardarProductoBtn = document.querySelector("#guardarProductoBtn")
let verCatalogoBtn = document.querySelector("#verCatalogo")
let ocultarCatalogoBtn = document.querySelector("#ocultarCatalogo")
let buscador = document.querySelector("#buscador") 
let coincidencia = document.querySelector("#coincidencia")
let selectOrden = document.getElementById("selectOrden")


//------------- FUNCTIONS PROYECTO --------------
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
                    <p class="cardPrecio">$${producto.precio}</p>
                    <p class="cardSku">SKU ${producto.sku}</p>
                    <button id="agregarBtn${producto.id}" class="button-48" role="button"><span class="text">Agregar al carrito</span></button>
                </div>
        </div>`
        productos.appendChild(nuevoProducto)

        let btnAgregar = document.querySelector(`#agregarBtn${producto.id}`)
        btnAgregar.addEventListener("click", ()=>{
            agregarAlCarrito(producto) //esta es la funcion que se ejecutará cuando se clickee en el boton "Agregar al carrito" 
            
        })
    }
}


//---------- Nuevo Array "productosEnCarrito" --------
let productosEnCarrito
if(localStorage.getItem("carrito")){//si ya existe en el storage el item con clave "carrito" lo capturamos con sus valores
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
    productosEnCarrito = [] //Si no se ha agregado nada al carrito dejamos el Array "productosEnCarrito" vacio
}



//FUNCION AGREGAR AL CARRITO
function agregarAlCarrito(producto){
    console.log(`${producto.articulo} ${producto.marca} modelo ${producto.modelo} ha sido agregado al carrito de compras. Vale $${producto.precio}`) //Probando funcion
    productosEnCarrito.push(producto)
    console.log(productosEnCarrito) //probamos que el push está agregando los productos al array productosEnCarrito
    localStorage.setItem("carrito", JSON.stringify (productosEnCarrito)) //guardando array en storage

    // cargarProductosCarrito(productosEnCarrito) //las proximas clases crearemos esta funcion
}


//FUNCION INGRESO DE PRODUCTOS A CATALOGO
function cargarProducto(array){
    
    let inputMarca = document.querySelector("#marcaInput")
    let inputModelo = document.querySelector("#modeloInput")
    let inputGenero = document.querySelector("#generoInput")
    let inputPrecio = document.querySelector("#precioInput")
    let inputArticulo = document.querySelector("#articuloInput")
    let inputSku = document.querySelector("#skuInput")

    //*MOLDE: const producto1 = new Products(1,10033,"Gafas","Hombre","Ray Ban","Aviator Classic", 85000, "rayban_classic.jpg")

    //Molde para nuevo objeto
    const productoNuevo = new Products(array.length+1, inputSku.value, inputArticulo.value, inputGenero.value, inputMarca.value, inputModelo.value, inputPrecio.value,"producto_nuevo.jpg")
    console.log(productoNuevo)
    //Se suma al array stock
    array.push(productoNuevo)
    console.log(array)
    //Se guarda en el localStorage
    localStorage.setItem("stock", JSON.stringify(array))
    mostrarCatalogo(array)

    //resetear inputs 
    inputMarca.value = ""
    inputModelo.value = ""
    inputGenero.value = ""
    inputPrecio.value = ""
    inputArticulo.value = ""
    inputSku.value = ""
}



//FUNCION DE BUSQUEDA
function buscarInfo(buscado, array){
    //Con el metodo .includes() podemos realizar busquedas con coindicencias parciales.
    let busquedaArray = array.filter(
        (producto) => producto.marca.toLowerCase().includes(buscado.toLowerCase()) || producto.modelo.toLowerCase().includes(buscado.toLowerCase())) 

    //condicional sino encuentra ninguna coincidencia quiere decir que el array será devuelto vacio, por lo tanto su length será 0:
    if(busquedaArray.length == 0){
        coincidencia.innerHTML = `<div class="alert alert-danger m-5" role="alert">No existe el producto ${buscado.toUpperCase()}</div>` //añadimos este mensaje en el html
        mostrarCatalogo(busquedaArray)
    }else{
        coincidencia.innerHTML = ""
        mostrarCatalogo(busquedaArray)
    }
}



//FUNCIONES DEFILTRADO (SELECT)

//Orden Menor precio
function ordenarMenorMayor(array){
    //copiamos array original // concat
    const menorMayor = [].concat(array)
    //ordena de menor a mayor
    menorMayor.sort((a,b) => a.precio - b.precio)
    mostrarCatalogo(menorMayor)
}

//Orden Mayor precio
function ordenarMayorMenor(arr){
//ordenar de mayor a menor
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
        console.log(`ERROR`)
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
        console.log(`ERROR`)
    }else{
        mostrarCatalogo(unisex)
    }
}




//------------------------------------- EVENTOS -------------------------------------
//Boton guardar producto
guardarProductoBtn.addEventListener("click", ()=>{
    cargarProducto(stock)
})

// //Boton ver catalogo
// verCatalogoBtn.onclick = () => {
//     mostrarCatalogo(stock)
// }
mostrarCatalogo(stock)
// //Boton ocultar catalogo
// ocultarCatalogoBtn.onclick = function(){
//     productos.innerHTML = ""
// }

//Input barra de busqueda
buscador.addEventListener("input", ()=>{
    
    buscarInfo(buscador.value, stock)
}) 


//Select (filtrado) 
selectOrden.addEventListener("change", ()=>{
    console.log(selectOrden.value) //confirmamos si está enlazado el select del html y el evento "change"

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
        mostrarCatalogo(stock) //si no se selecciona ningun select, solo se ejecutará la funcion mostrarCatalogo() 
    }
})

