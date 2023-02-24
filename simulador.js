//SIMULADOR ECOMMERCE

//CUPON DE DESCUENTO 30%: promo
//CUPON DE DESCUENTO 50%: coderhouse


//PROYECTO: Ecommerce "JotaEse Store"


//------------------------------ CONSTRUCTOR OBJETO ------------------------------
class Products {
    constructor(sku, articulo, genero, marca, modelo, color, precio){
        this.sku = sku,
        this.articulo = articulo,
        this.genero = genero,
        this.marca = marca,
        this.modelo = modelo,
        this.color = color,
        this.precio = precio
    }
}

//---------------------------------- INSTANCIAS -----------------------------------
const producto1 = new Products(10033,"Gafas","Hombre","Ray Ban","Aviator Classic","Negro", 85000)

const producto2 = new Products(10034,"Gafas","Unisex","Oakley","Mega Wayfarer","Blanco", 67000)

const producto3 = new Products(10011,"Gorra","Hombre","Adidas","Classic","Azul", 18000)

const producto4 = new Products(10012,"Gorra","Mujer","Nike","Tech Swoosh","Blanco", 18000)

const producto5 = new Products(10013,"Gorra","Unisex","Oakley","SurfBlue","Azul", 21000)

const producto6 = new Products(10051,"Zapatillas","Mujer","Nike","Run 5","Negro", 55000)

const producto7 = new Products(10052,"Zapatillas","Hombre","Nike","Total 90","Dorado", 52000)

const producto8 = new Products(10053,"Zapatillas","Hombre","Adidas","Messianico ","Azul", 60000)

const producto9 = new Products(10054,"Zapatillas","Mujer","Puma","Nitro 2","Rosado", 40000)

const producto10 = new Products(10055,"Zapatillas","Unisex","New Balance","574","Verde", 35000)

const producto11 = new Products(10077,"Pulsera","Hombre","Ferouch","Cuero Mamut","Negro", 12000)

const producto12 = new Products(10078,"Pulsera","Mujer","Marquis","Hilo seda","Rojo", 8500)


//----------------------------------- ARRAY --------------------------------------
const stock = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12]




//---------------------------------------- FUNCIONES -----------------------------------

//--------------------------- MENÚ PRINCIPAL -----------------------
function menu(){
    let salirMenu = false
    do{
        salirMenu = preguntarOpcion(salirMenu)
    }while(!salirMenu)
} 

function preguntarOpcion(salir){
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
        1 - Comprar
        2 - Ver Catalogo completo de productos
        3 - Filtros
        4 - Buscar por marca
        5 - Ordenar por precios
        0 - Salir del menu`))
    
        switch(opcionIngresada){
            case 1:
                Comprar()
            break
            case 2:
                verCatalogo(stock)
            break
            case 3:
                filtros(stock)
            break
            case 4:
                buscarMarca(stock)
                break
            case 5:
                ordenarPrecios(stock)
            break
            case 0:
                alert("Gracias por su visita, vuelva pronto a JotaEse Store")
                salir = true
                return salir
            break
            default:
                alert("Ingrese una opción correcta")
            break
        }
}


//------------------------ CATALOGO COMPLETO -------------------------
function verCatalogo(array){
    console.log("Bienvenido a JotaEse Store! Nuestro catalogo es:")
    array.forEach((prod)=>{
        console.log(`${prod.articulo} ${prod.genero} 
        Marca: ${prod.marca} 
        Modelo: ${prod.modelo}
        Color: ${prod.color}
        Precio: $${prod.precio} CLP
        SKU: ${prod.sku}
        `)
    })
}


//------------------------ FILTRO -------------------------
// Submenu filtros
function filtros(filtro){
    let opcion = parseInt(prompt(`
    1 - Catalogo productos HOMBRE
    2 - Catalogo productos MUJER
    3 - Catalogo productos UNISEX`))
    switch(opcion){
        case 1:
            catalogoHombre(filtro)
        break
        case 2:
            catalogoMujer(filtro)
        break
        case 3:
            catalogoUnisex(filtro)
        break
        default:
            alert(`${opcion} no es válido`)
        break    
    }
}



//------------------------ CATALOGO HOMBRE -------------------------
function catalogoHombre(arr){
    let hombre = arr.filter((stock)=> stock.genero == "Hombre")
    if(hombre.length == 0){
        console.log(`ERROR`)
    }else{
        verCatalogo(hombre)
    }
}



//------------------------ CATALOGO MUJER -------------------------
function catalogoMujer(arr){
    let mujer = arr.filter((stock)=> stock.genero == "Mujer")
    if(mujer.length == 0){
        console.log(`ERROR`)
    }else{
        verCatalogo(mujer)
    }
}


//------------------------ CATALOGO UNISEX -------------------------
function catalogoUnisex(arr){
    let unisex = arr.filter((stock)=> stock.genero == "Unisex")
    if(unisex.length == 0){
        console.log(`ERROR`)
    }else{
        verCatalogo(unisex)
    }
}



//------------------------ BUSCAR MARCA -------------------------
function buscarMarca(array){
    let marcaBuscada = prompt("Ingrese la marca que desea buscar")
    let marcaEncontrada = array.filter(
        (brand)=> brand.marca.toLowerCase() == marcaBuscada.toLowerCase()
        )
    if(marcaEncontrada.length == 0){
        alert(`No tenemos stock de la marca ${marcaBuscada}`)
    }else{
        verCatalogo(marcaEncontrada)
    }
}


//----------------------- ORDENAR PRECIOS -------------------------
function MenorMayorPrecio(ar){
    const menorMayor = [].concat(ar) 
    menorMayor.sort((x, y) => {
        return x.precio - y.precio
        })
    verCatalogo(menorMayor)
}


function MayorMenorPrecio(arr){ 
const mayorMenor = [].concat(arr)
mayorMenor.sort((param1, param2) => {
    return param2.precio - param1.precio 
    })
verCatalogo(mayorMenor)
}


//SubMenú Orden de precios
function ordenarPrecios(h){
    let opcion = parseInt(prompt(`
    1 - Ordenar de menor a mayor precio
    2 - Ordenar de mayor a menor precio`))
    switch(opcion){
        case 1:
            MenorMayorPrecio(h)
        break
        case 2:
            MayorMenorPrecio(h)
        break
        default:
            alert(`${opcion} no es válida para ordenar precios`)
        break    
    }
}




//----------------------- COMPRAR -------------------------
function Comprar(){
    total = 0
    let nombreCliente = prompt("Ingrese su nombre").toUpperCase()
    alert(`Hola ${nombreCliente}, ahora comenzaremos a procesar su compra`)
    //Cantidad de producto que cliente desea comprar
    let cantidad = parseInt(prompt("¿Cuantos productos necesita?"))
    while(isNaN(cantidad)){ 
        cantidad = parseInt (prompt (`ERROR! Tipo de dato incorrecto. Ingrese la cantidad de productos que necesita`)) //Validacion tipo de dato number 
    }

    for (let i=1 ; i<=cantidad ; i++){
        productos = prompt(`Por favor, ingrese el NOMBRE DEL PRODUCTO N°${i} que desea comprar`)

        productos = productos.toLowerCase()

        while (productos != "gafas" && productos != "zapatillas" && productos != "gorra" && productos != "pulsera" ){
            productos = prompt (`No existe el producto "${productos}". Por favor ingrese el NOMBRE DEL PRODUCTO CORRECTAMENTE`).toLowerCase() //Validacion Producto
        }
        if (productos == "gafas"){
            agregarCarrito(productos)
            total = total + 20
        }
        else if (productos == "gorra" ){
            agregarCarrito(productos)
            total = total + 10
        }
        else if(productos == "zapatillas"){
            agregarCarrito(productos)
            total = total + 45
        }
        else if (productos == "pulsera"){
            agregarCarrito(productos)
            total = total + 8
        }
    }
    //Suma de productos
    alert(`Su total es $${total.toFixed(3)} CLP`)

    //Cupon de Descuento
    let respuesta = prompt("¿Usted tiene un CUPON DE DESCUENTO? Escriba SI o NO").toLowerCase()
    while (respuesta != "si" && respuesta != "no"){
        respuesta = prompt("Respuesta inválida, por favor, escriba SI o  NO").toLowerCase()
    }

    if (respuesta == "si"){
        cupon = prompt("Ingrese el CODIGO DEL CUPON").toLowerCase()
        
        while (cupon != "coderhouse" && cupon != "promo"){
            cupon = prompt("Codigo inválido. Ingrese el CODIGO DEL CUPON").toLowerCase()
        }
        if( cupon == "promo"){
            cuponDescuento(total, 0.7)
            alert(`A obtenido un 30% de descuento. Su total a pagar es $${totalFinal.toFixed(3)} CLP`)
        }
        else if(cupon == "coderhouse"){
            cuponDescuento(total, 0.5)
            alert(`A obtenido un 50% de descuento. Su total a pagar es $${totalFinal.toFixed(3)} CLP`)
        }
        else { //Precio final con descuento
            alert(` Su total a pagar es $${total.toFixed(3)} CLP`)
        }
        }

    alert ('Gracias por su compra, vuelva pronto')
    }


function agregarCarrito(){
    alert(`${productos.toUpperCase()} agregado al carrito.`)
}

function cuponDescuento(total, descuento){
    totalFinal = total*descuento
}


// Funcion para ejecutar app:
// menu()