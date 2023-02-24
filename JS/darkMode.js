//Captura de botones
let botonDarkMode = document.querySelector("#botonDarkMode")
let botonLightMode = document.querySelector("#botonLightMode")

let modoOscuro 
//condicional que consulte si esto existe, lo guarda SINO lo va a crear, va aclarar que entra por primera vez y lo va a setear
if(localStorage.getItem("modoOscuro")){
    modoOscuro = JSON.parse(localStorage.getItem("modoOscuro"))
}else{
    console.log("Entra por primera vez")
    localStorage.setItem("modoOscuro", false)
    modoOscuro = JSON.parse(localStorage.getItem("modoOscuro"))
} 

if(modoOscuro == true){
    document.body.classList.add("darkMode")
}else{
    document.body.classList.remove("darkMode")
}

//eventos DarkMode
botonDarkMode.addEventListener("click",()=>{
    console.log("Btn oscuro funciona")
    document.body.classList.add("darkMode")
    //editar el localStorage para que guarde darkMode
    //setItem podemos crear o editar
    localStorage.setItem("modoOscuro", true)
})

botonLightMode.addEventListener("click",()=>{
    console.log("Btn claro funciona")
    document.body.classList.remove("darkMode")
    //localStorage edit
    localStorage.setItem("modoOscuro", false)
})
