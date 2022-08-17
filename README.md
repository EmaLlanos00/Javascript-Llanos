# Proyecto Sucusstore
###### [novedades](#new)
## Introducción
El proyecto consiste en un sitio de ventas online de jardinería. Conformado por 5 páginas: index, blog, productos, cuenta, carrito. Cada página tiene su función y comparten el mejor intento de estética minimalista/simple que mi pobre conocimiento en diseño puede ofrecer.

Este es mi primer trabajo de desarrollo web, es muy especial para mí porque logré combinar algo que me gusta mucho con un proyecto que sabía que me iba a tomar mucho tiempo y dedicación.

## Descripción de las páginas
- ### Index
La cara visible del sitio. Tiene varias secciones de tipos semánticos distintos y un amplio uso de grids anidados.
- ### Blog
Contiene varias cards e información contenida en estas. Es la página con más texto del sitio, me gusta redactar y quería volcar eso en algún lado.
- ### Productos
Todo el proyecto gira en torno a esta página, por eso tiene gran contenido de imágenes y texto inclusive. Tiene un menú de tipo *off canvas* que **no es funcional** e items separados por contenedores.
- ### Cuenta & Carrito
Las páginas más simples y las más difíciles de rellenar. Ambas tienen un título que pasaba desapercibido desde el *wireframe*. Les aporté notoriedad con una imagen de fondo. **Cuenta** además tiene el mayor trabajo en cuanto a formularios de todo el sitio.

## Herramientas utilizadas
A medida que el proyecto alcanzaba su estado final, el código se hacía más extenso. Pude ahorrar bastantes líneas de código reutilizando clases y con la ayuda de :

- **Bootstrap**: Considerando que decidí conservar este *framework* aproveché sus clases de estilos, box modeling e incluso flex.

- **SASS**: muy útil para optimizar código con extend, each o sus bucles. Los mixins no me resultaron muy funcionales en esta tarea.

## Reporte de errores
Si bien le dediqué mucho tiempo a la revisión del proyecto, al no conocer mucho sobre los temas aquí trabajados es posible que todavía haya errores grandes. Si hubiera algún problema y quien lea esto quisiera avisarme puede contactar a mi correo electrónico (emanuellls44@gmail.com).

## Estado del proyecto
Me gustaría incorporar *javascript* en este sitio para llevar la simulación de tienda a otro nivel. También tengo en mente simplificar muchas cosas y así optimizar el código lo máximo posible.

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
