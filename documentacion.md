# Como hacer una lista dinamica de elementos en HTML con JavaScript

## Contexto

Un documento HTML se compone de una jerarquía de objetos, es decir objetos anidados dentro de otros. Todos los componentes de la página tienen al menos un padre “document” y pueden o no tener elementos o nodos hijos.

Se me ha pedido revisar cierta documentación, relativo a lo concerniente a la jerarquía de un documento Web y cómo este puede manipularse. Luego se me pidió implementar un *catálogo de registros* que agregue elementos (tipo block) en un formulario que había realizado en una entrega anterior. El formulario que entregué era el frontend de un restaurante de comida rápida; el formulario sirve de herramienta para generar un pedido. El *catálogo de registros* servirá para visualizar los datos en el formulario de manera ordenada y limpia antes de enviarlo. Se me ha pedido usar las funciones de JavaScript para crear o agregar elementos de forma dinámica a la jerarquía de elementos: createElement, append, appendChild, insertBefore, before, prepend, etc.
Después habrá que crear documnetación apoyada de capturas de pantalla y una conclusión.

## Desarrollo

Primero hice pruebas básicas con un formulario más simple. Pedí a ChatGPT que me hicera una plantilla muy sencilla y la corrí en mi servidor privado y tras un poco de prueba y error, conseguí que se visualizara como deseé. Al principio el error que cometía el script era querer generar un bloque nuevo de manera dinámica cada que se actualizada cualquier aspecto del campo que se rellenaba, así al escribir una sola letra esta nueva versión de la variable quedaba impresa en otro campo distinto (o bloque distinto) y eso evidentemente no era lo que buscábamos. Tras unas correcciones logré hacer que se generaba en un solo bloque toda la información de un campo.

## Versión alfa 0.1

Voy a agregar un botón para borrar contenido de la lista de respuestas.

