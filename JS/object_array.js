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
    }
}

//---------------------------------- INSTANCIAS -----------------------------------
const producto1 = new Products(1,10033,"Gafas","Hombre","Ray Ban","Aviator Classic", 85000, "rayban_classic.jpg")

const producto2 = new Products(2,10034,"Gafas","Unisex","Oakley","Mega Wayfarer", 67000, "lentes_oakley.png")

const producto3 = new Products(3,10011,"Gorra","Mujer","Adidas","Classic", 18000, "gorra_mujer.png")

const producto4 = new Products(4,10012,"Gorra","Hombre","Nike","Tech Swoosh", 18000, "gorra_hombre_nike.png")

const producto5 = new Products(5,10013,"Gorra","Unisex","Oakley","Cocaine & Gaviar", 21000, "gorra_oakley_unisex.png")

const producto6 = new Products(6,10051,"Zapatillas","Mujer","Nike","Run 5", 55000, "zapatilla_nike_mujer.png")

const producto7 = new Products(7,10052,"Zapatillas","Hombre","Nike","Total 90", 52000, "zapatilla_nike_hombre.png")

const producto8 = new Products(8,10053,"Zapatillas","Hombre","Adidas","Messianico", 60000, "zapatillas_adidas_hombre.png")

const producto9 = new Products(9,10054,"Zapatillas","Unisex","Puma","Nitro 2", 40000, "zapatilla_puma_unisex.jpg")

const producto10 = new Products(10,10055,"Zapatillas","Unisex","New Balance","574", 35000, "new_balance_unisex.png")

const producto11 = new Products(11,10077,"Pulsera","Hombre","Ferouch","Cuero Mamut", 12000, "pulsera_hombre.png")

const producto12 = new Products(12,10078,"Pulsera","Mujer","Marquis","Hilo seda", 8500, "pulsera_mujer.png")


//----------------------------------- ARRAY --------------------------------------
// const stock = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12]

//guardando en storage el array stock
let stock = []
if(localStorage.getItem("stock")){
    stock = JSON.parse(localStorage.getItem("stock"))
}else{
    //entra por primera vez
    console.log("Seteando stock de libros")
    stock.push(producto1,producto2,producto3,producto4,producto5,producto6, producto7,producto8,producto9,producto10,producto11,producto12)
    localStorage.setItem("stock", JSON.stringify(stock))
}