//Captura de botones
let botonDarkMode = document.querySelector("#botonDarkMode")
let botonLightMode = document.querySelector("#botonLightMode")

let modoOscuro 
if(localStorage.getItem("modoOscuro")){
    modoOscuro = JSON.parse(localStorage.getItem("modoOscuro"))
}else{
    localStorage.setItem("modoOscuro", false)
    modoOscuro = JSON.parse(localStorage.getItem("modoOscuro"))
} 


if(modoOscuro == true){
    document.body.classList.add("darkMode")
}else{
    document.body.classList.remove("darkMode")
}

//Eventos
botonDarkMode.addEventListener("click",()=>{
    document.body.classList.add("darkMode")
    localStorage.setItem("modoOscuro", true)
})

botonLightMode.addEventListener("click",()=>{
    document.body.classList.remove("darkMode")
    localStorage.setItem("modoOscuro", false)
})
