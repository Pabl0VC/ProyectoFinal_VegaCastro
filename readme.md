# Proyecto tienda virtual
Este es un proyecto que fue desarrollado como proyecto final del curso de JavaScript de Coderhouse. Consta de una tienda virtual que permite la compra de productos de diferentes categorías (masculino, femenino y unisex). El proyecto utiliza diferentes tecnologías y herramientas como Sass, JavaScript (funciones, arrays, objetos, funciones de orden superior, DOM, eventos, storage, JSON, operadores avanzados), librerías como SweetAlert y Luxon, asincronia y promesas, fetch, entre otros.

## Funcionalidades

### Modo Oscuro
La tienda virtual cuenta con una funcionalidad de modo oscuro para mejorar la accesibilidad para los usuarios. Para ello, se utilizó CSS y JavaScript para cambiar el esquema de colores de la página.
Además, para mantener el modo oscuro activado en todas las páginas de la tienda, se utiliza el objeto localStorage para almacenar el estado del modo oscuro. De esta manera, si el usuario sale de la página y luego regresa, el modo oscuro seguirá activado.

### Funciones del Carrito de Compras
El proyecto cuenta con funciones que permiten agregar, eliminar y actualizar los productos en el carrito de compras. Además, se puede calcular el precio total de los productos en el carrito y hacer el checkout. Todo en formato moneda chilena CLP.

### Filtrado de Productos
El proyecto cuenta con filtros que permiten ordenar los productos por precio ascendente y descendente, y por género (masculino, femenino y unisex).

### Barra de Busqueda de Productos
La tienda posee una barra de busqueda donde el usuario puede realizar busquedas de productos de la tienda de acuerdo a su Modelo o Marca

### Login de Administración
La tienda cuenta con un login simple para la administración de la tienda. Solo se puede acceder si el usuario y la contraseña son correctos. Una vez que se ha iniciado sesión, se puede agregar nuevos productos a la tienda.

## Tecnologías Utilizadas
* JavaScript: utilizado para programar la lógica del proyecto.
* HTML y CSS: para la estructura y diseño de la tienda virtual.
* Sass: utilizado para crear variables y componentes que permiten reducir la cantidad de código CSS necesario y hacerlo más fácil de mantener.
* SweetAlert: muestra alertas más atractivas y personalizadas.
* Luxon: muestra fecha actualizada para verificar dia de la compra
* JSON: se utiliza para almacenar y manejar los datos de los productos.
* Fetch: para realizar peticiones al archivo JSON "stock.json" donde se almacenan los productos.
* LocalStorage: se utiliza para almacenar los datos del carrito de compras junto con la configuracion del modo Dark de la tienda

## Cómo Utilizar
* Clonar o descargar el repositorio desde GitHub.
* Abrir el archivo index.html en un navegador web.
* Navegar por la tienda desde la pestaña "Productos", agregar productos al carrito, probar el filtrado y busquedas.
* Para acceder a la administración de la tienda, hacer clic en la pestaña "Admin", luego ingresar los datos de login correctos y agregar nuevos productos a la tienda.
* NOTA: Usuario: admin. Contraseña: 12345

## Licencia
Este proyecto está bajo la licencia MIT.

## Galería de imágenes

* Index pagina. Modo light (defecto)
[![Captura-de-pantalla-2023-02-28-a-la-s-16-55-17.png](https://i.postimg.cc/vmT81b9x/Captura-de-pantalla-2023-02-28-a-la-s-16-55-17.png)](https://postimg.cc/FftX8tTh)

* Modo Oscuro
[![Captura-de-pantalla-2023-02-28-a-la-s-16-55-48.png](https://i.postimg.cc/kGfht3WD/Captura-de-pantalla-2023-02-28-a-la-s-16-55-48.png)](https://postimg.cc/MffYhLP8)

* Resumen productos agregados al carrito de compras junto con el total a pagar
[![Captura-de-pantalla-2023-02-28-a-la-s-16-56-13.png](https://i.postimg.cc/tR5ccP8y/Captura-de-pantalla-2023-02-28-a-la-s-16-56-13.png)](https://postimg.cc/Yjv8G4py)

* Alerta de confirmacion de compra junto con fecha del día de la compra
[![Captura-de-pantalla-2023-02-28-a-la-s-16-56-56.png](https://i.postimg.cc/YCjTY9n7/Captura-de-pantalla-2023-02-28-a-la-s-16-56-56.png)](https://postimg.cc/tsQrHXGv)

* Login Admin
[![Captura-de-pantalla-2023-02-28-a-la-s-16-57-21.png](https://i.postimg.cc/d3qx1tkz/Captura-de-pantalla-2023-02-28-a-la-s-16-57-21.png)](https://postimg.cc/Q9ybYDqb)

* Modal para agregar productos al catalogo de la tienda
[![Captura-de-pantalla-2023-02-28-a-la-s-16-57-54.png](https://i.postimg.cc/B6fzrCqZ/Captura-de-pantalla-2023-02-28-a-la-s-16-57-54.png)](https://postimg.cc/HJ335XcF)




