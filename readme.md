# Proyecto tienda virtual
Este es un proyecto que fue desarrollado como proyecto final del curso de JavaScript de Coderhouse. Consta de una tienda virtual que permite la compra de productos de diferentes categorías (masculino, femenino y unisex). El proyecto utiliza diferentes tecnologías y herramientas como funciones, arrays, objetos, funciones de orden superior, DOM, eventos, storage, JSON, operadores avanzados, librerías como SweetAlert y Luxon, asincronia y promesas, fetch, entre otros.

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