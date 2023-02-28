//-------------- Capturas nodos DOM ------------
let productos = document.querySelector("#productos")
let guardarProductoBtn = document.querySelector("#guardarProductoBtn")
let verCatalogoBtn = document.querySelector("#verCatalogo")
let ocultarCatalogoBtn = document.querySelector("#ocultarCatalogo")
let buscador = document.querySelector("#buscador") 
let coincidencia = document.querySelector("#coincidencia")
let selectOrden = document.getElementById("selectOrden")


//------------- Login Admin ---------------
// Usuario: admin
// Contraseña: 12345

function login() {
    var user;
    var password;
    //SweetAlert
    Swal.fire({
    title: 'Inicio de sesión',
    html:
        '<input id="swal-input1" class="swal2-input" placeholder="Nombre de usuario">' +
        '<input id="swal-input2" class="swal2-input" type="password" placeholder="Contraseña">',
    focusConfirm: false,
    preConfirm: () => {
        user = Swal.getPopup().querySelector('#swal-input1').value
        password = Swal.getPopup().querySelector('#swal-input2').value
    }
    }).then((result) => {
    if (user === 'admin' && password === '12345') {
        Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        showConfirmButton: false,
        timer: 1500
        })
    } else {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Nombre de usuario o contraseña incorrectos',
        confirmButtonText: 'OK'
        }).then((result) => {
        login();
        })
    }
    })
}
login()


//------------- Mostrar Catalogo --------------
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
                    <p class="cardPrecio">${producto.precio.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</p>
                    <p class="cardSku">SKU ${producto.sku}</p>
                </div>
        </div>`
        productos.appendChild(nuevoProducto)
    }
}


//FUNCION INGRESO DE PRODUCTOS A CATALOGO
function cargarProducto(array){
    
    let inputMarca = document.querySelector("#marcaInput")
    let inputModelo = document.querySelector("#modeloInput")
    let inputGenero = document.querySelector("#generoInput")
    let inputPrecio = document.querySelector("#precioInput")
    let inputArticulo = document.querySelector("#articuloInput")
    let inputSku = document.querySelector("#skuInput")

    //Molde para nuevo objeto
    const productoNuevo = new Products(array.length+1, inputSku.value, inputArticulo.value, inputGenero.value, inputMarca.value, inputModelo.value, parseInt(inputPrecio.value), "producto_nuevo.jpg")

    //Se suma al array stock
    array.push(productoNuevo)

    //guardar en localStorage
    localStorage.setItem("stock", JSON.stringify(array))

    mostrarCatalogo(array)

    //resetear inputs 
    inputMarca.value = ""
    inputModelo.value = ""
    inputGenero.value = ""
    inputPrecio.value = ""
    inputArticulo.value = ""
    inputSku.value = ""
    

    Swal.fire({
        icon: 'success',
        title: 'Producto Agregado',
        text: 'Producto Agregado Exitosamente al Catalogo!'
      })
}



//FUNCION DE BUSQUEDA
function buscarInfo(buscado, array){
    let busquedaArray = array.filter(
        (producto) => producto.marca.toLowerCase().includes(buscado.toLowerCase()) || producto.modelo.toLowerCase().includes(buscado.toLowerCase())) 

    //condicional sino encuentra ninguna coincidencia quiere decir que el array será devuelto vacio, por lo tanto su length será 0:
    if(busquedaArray.length == 0){
        coincidencia.innerHTML = `<div class="alert alert-danger m-5" role="alert">No existe el producto ${buscado.toUpperCase()}</div>`
        mostrarCatalogo(busquedaArray)
    }else{
        coincidencia.innerHTML = ""
        mostrarCatalogo(busquedaArray)
    }
}



//Filtrado de productos(select)

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

//Boton ver catalogo
verCatalogoBtn.onclick = () => {
    mostrarCatalogo(stock)
}

//Boton ocultar catalogo
ocultarCatalogoBtn.onclick = function(){
    productos.innerHTML = ""
}

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
