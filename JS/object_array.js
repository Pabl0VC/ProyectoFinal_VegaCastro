//SIMULADOR ECOMMERCE

//CUPON DE DESCUENTO 30%: promo
//CUPON DE DESCUENTO 50%: coderhouse


//PROYECTO: Ecommerce "JotaEse Store"


//------------------------------ CONSTRUCTOR OBJETO ------------------------------
class Products {
    constructor(id, sku, articulo, genero, marca, modelo, precio, imagen){
        this.id = id,
        this.sku = sku,
        this.articulo = articulo,
        this.genero = genero,
        this.marca = marca,
        this.modelo = modelo,
        this.precio = precio,
        this.imagen = imagen
        this.cantidad = 1
    }
    //Métodos para agregar cantidad de productos en carrito
    sumarUnidad(){
        this.cantidad = this.cantidad + 1
        return this.cantidad 
    }

    restarUnidad(){
        this.cantidad = this.cantidad - 1
        return this.cantidad 

    }
}

// //----------------------------------- ARRAY --------------------------------------

//guardando en storage el array stock
let stock = []

const cargarStock = async ()=>{
    //con el async puedo incluir el await
    //ruta relativa es: la del HTML al JSON y abrir con liveServer
    const response = await fetch("stock.json")
    const data = await response.json()
    console.log(data)
    for(let product of data){
        let productoNuevo = new Products (product.id, product.sku, product.articulo, product.genero, product.marca, product.modelo, product.precio, product.imagen)
        stock.push(productoNuevo)
    }
    //dentro de la function async seteamos el storage ahí anda perfecto
    localStorage.setItem("stock", JSON.stringify(stock))
}



if(localStorage.getItem("stock")){
    
    for(let product of JSON.parse(localStorage.getItem("stock"))){
        let productoNuevo = new Products (product.id, product.sku, product.articulo, product.genero, product.marca, product.modelo, product.precio, product.imagen)
        stock.push(productoNuevo)
    }
    console.log(stock)
}else{
    //entra por primera vez
    console.log("Seteando stock")
    //en vez de pushear, para utilizar el .json invoco la function aca
    cargarStock()    
}
