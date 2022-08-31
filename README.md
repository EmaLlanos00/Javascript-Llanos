# Proyecto Sucusstore
#### [novedades](#new)
## Introducción
Este proyecto es un clon del proyecto del curso de desarrollo web. Es un *ecommerce* de plantas ornamentales, un hobby que me gusta mucho. La idea de reutilizar este proyecto era
potenciar la simulación lograda previamente mediante los conocimientos a adquirir de *Javascript*.

**Importante:** la página debe verse con Live Server porque sino los datos del JSON no los va a tomar.

**Importante:** en el apartado de cuenta se puede crear una cuenta o entrar como "invitado" colocando los datos que se muestran de ejemplo en el formulario "Ingresar". Caso contrario no se va a poder visualizar apropiadamente el carrito.

**Importante:** el formulario de "Index" puede llegar a ser muy intrusivo pues enviará un mail a mi correo y al correo que se haya colocado, manipular a discreción.

----

## Descripción de las páginas
- ### Index
La cara visible del sitio. El apartado de scripts es limitado pero fue lo último y lo que más me costó realizar: utilizar el metodo POST de una API de gestión de mails (EmailJS).
El resultado es un formulario peligrosamente funcional pues si se completa tanto yo como el mail colocado en el formulario van a recibir un mail recopilando los datos de ese form.
- ### Blog
Contiene varias cards e información contenida en estas. Es la página con más texto del sitio, me gusta redactar y quería volcar eso en algún lado. Sin cambios desde el curso anterior, de hecho no abrí esa página en semanas, queda como un desafío personal agregarle JS a la sección.
- ### Productos
Como gran diferencia desde el curso anterior ahora los productos mostrados provienen de un array de objetos que a su vez toma datos de un JSON. Un agregado que disfruté realizar son los filtros
 y la función para estilizar el "navbar" de los productos. Me hubiera gustado darle funcionalidad al menú lateral pero siento que eso excede mis conocimientos y las exigencias de este curso.
Los modales de cada producto eran una idea que quería realizar desde que empecé a darle estilos al HTML pero ahora los detesto porque me dieron varios dolores de cabeza realizarlos.
- ### Cuenta & Carrito
Estas páginas se quedaron muy cortas de contenido en el anterior curso y el cambio es realmente grande con JS: los formularios de "Cuenta" funcionan bastante bien, el carrito se siente muy interactivo. La información se guarda, lás páginas cambian sin actualizarse, aplican librerías, etc. 

----
## Herramientas utilizadas
Paneo rápido de algunas cosas que me ayudaron mucho:

- **Librerías**: utilicé Sweetalert y Toastify, las personalicé tanto como pude tratando de conservar la paleta de colores del sitio; se han elaborado funciones que parametrizan las alertas para ahorrar líneas de código.

- **Bootstrap**: me fue muy útil para aplicar estilos de manera simplificada, entendiendo que el foco del curso es la funcionalidad del sitio. Especialmente útil para aplicar elementos estilizados desde el DOM.

- **Fetch, API y JSON**: con diferencia lo más difícil de entender de todo el curso (promises y fetch), utilicé fetch para montar mi array con un array de JSON utilizando un constructor. No me sentí satisfecho utilizando Json, quería usar alguna API y me pareció buena idea hacer mi formulario de contacto más realista. Utilizar EmailJS me costó **horrores** porque su documentación es limitada (hay ejemplos con React, Vue, AJAX y sus métodos propios, no JS puro con fetch), pero estoy muy contento de que funcione, ya puedo aprender React en paz.


![mails recibidos por la API screenshot](https://lh3.googleusercontent.com/XqboUjeLOlOhbB1ZFBoLGJrrN7vYFJBXNSnxkODnExfdaWl79MQAwOc1YV3hmFhBOT-JRVN_gjQyN4EBQooVLVk8OmxiHIkCqhqM7GV9wO89Zod_El2-8x2q7KOUHnbSQkGZc-LEEh2P5_ji8fTGJ2eOaaB23zmaFDp7EooNJzmDb0ExZs_ZxHvuY8dbLAofSziFHyfzdqpIrzGX3fre_2EQX53_nO2_tmMDfXxVf_v4m7q3fZHAx5YKTe4vt5kUZJ-5jBQgK5G9tGHXSK_JxLkFeJvKa4T9g5MH4zC0jvLHxRnqTmpqgKZ6zBoMymUuMSksz0GvFiEdRFNg5xof1oBhADnvxR5Pv6g2oRa_D76Kmm3lMEi__T-6WKU_mSOVcr9wwG4dnF23aW_A1IqXscd8WopqtY-ErCBLFayZS5sKu_eISv96T0Anj4ykF69tj3Aute3f13L8Yt1N99x8xvkCIhoZtoIhlRfI9WOwHziGYnON3zReixOSFribgOiQumg13goHXKS4gi8j7uOHJlsr57ZitzSm-gVnW_oBQHikwAKZaZK18PjMqBPgFdXaERPEk4nPxLJXR_6x6Tu7lDrFhg4xTGLvTQAH7gxHJ7LAgxvlNu_eEnoiNShl_WvLP5HXfAYCl9lE8G3RbmgDJLwXkwniNRPdLmiBpvgNl2Q6SPu-RxCk3ttIh--ezPBjTY--XsyZ6H7xA_JimqUd7JpkY9bf18JKATsrvc5UgKw9VKIbQf5vRKK2wCnp=w938-h489-no?authuser=0)
 > Acá una muestra visual del constante "prueba y error", esto es lo que yo bauticé "EmailJS HELL" (todos mails con datos vacíos).
----

## Estado del proyecto
A futuro me gustaría incorporar *javascript* en "blog", agregar más funcionalidades al carrito y volcar grandes cantidades de datos al sitio para incorporar buscadores y filtros más sofisticados con *tags*, etc.

<a name="new"><a/>
## Novedades

- *1/08/22*
- Primeros acercamientos al JS de la página: Simulación de carrito con prompt
- *3/08/22*
- Funciones de ordenamiento aplicadas correctamente a arrays de objetos
- *5/08/22*
- Interacción con HTML vía DOM. Eventos e info mostrada en HTML desde objetos(JS)
- *8/08/22*
- Modales variables según array de productos
- El evento sucede en el área esperada: todo el card excepto el botón "comprar"
- *12/08/22*
- Obtención de datos de formularios, guardado en storage, obtención de éstos
- Bloqueo de página carrito si no existe cuenta creada
- *15/08/22*
- Optimizando proyecto: cambios menores usando operadores avanzados
- *17/08/22*
- productos se agregan desde array
- carrito muestra los productos seleccionados
- se guarda la sesión si se lo requiere
- se puede cerrar sesión o eliminar cuenta
- *22/08/22*
- filtros de "productos" funcionales
- agregadas funcionalidades a carrito como:
- costo total, vaciar carrito, eliminar un producto
- carrito se guarda en toda situación
- *25/08/22*
- Obtenidos datos desde archivo JSON de manera asincrónica
- *31/08/22*
- metodo POST con API EmailJS: recibir y enviar mail con datos de formulario de index
- separado el script en 3 archivos JS
- identación final, revisión de comentarios y console.log restantes
