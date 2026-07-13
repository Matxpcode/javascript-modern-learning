# Sistema de Registro de Productos (CRUD de Objetos Dinámicos)

Una aplicación web interactiva y ligera diseñada para la creación, gestión y mutación dinámica de propiedades de un producto en tiempo real. Este proyecto destaca por el control avanzado en la manipulación de objetos en JavaScript y el manejo preciso de estados mediante la inserción, actualización y eliminación de propiedades directamente en el DOM.

<img width=50% alt="objetos-1" src="https://github.com/user-attachments/assets/b6580514-536d-4f79-a526-75dad7b81146" />

## 🛠️ Tecnologías Usadas

* **JavaScript (ES6+):** Captura de eventos (`submit`, `click`), iteración dinámica de estructuras de datos (`for...in`) y mutación física de objetos (`delete`, `hasOwnProperty`).
* **HTML5:** Estructuración semántica de controles de formulario y contenedores dinámicos para el renderizado del producto.
* **CSS3:** Estilos personalizados para el ocultamiento y visualización selectiva de componentes (`.d-none`) y el formateo de tarjetas informativas.

## ⚙️ Funcionalidades Clave

* **Estructuración Inicial y Captura Segura:** Intercepta el envío del formulario anulando la recarga nativa de la página mediante `e.preventDefault()`, mapeando de forma segura los valores y estados booleanos (`.checked`) a un objeto estructural base.
* **Renderizado Híbrido y Dinámico:** Implementa una función de listado que combina una maquetación estática para propiedades base obligatorias con un bucle iterativo `for...in` encargado de rastrear y renderizar de forma automática cualquier propiedad extra inyectada en el objeto.
* **Control de Operaciones por Estados (CRUD):** Centraliza el flujo de la aplicación a través de un estado de ejecución (`ANADIR`, `ACTUALIZAR`, `ELIMINAR`), alterando dinámicamente el comportamiento de los controles, modificando las etiquetas de los botones y aplicando restricciones interactivas en tiempo de ejecución.
* **Validación Estructural y Eliminación en Memoria:** Utiliza el método nativo `hasOwnProperty` para validar la existencia de llaves antes de ser mutadas y ejecuta el operador físico `delete` para remover claves del mapa de memoria, asegurando que dejen de existir e iterarse en los flujos posteriores.

## 💡 Destacados Técnicos

* **Manipulación Avanzada de Objetos:** Demuestra un dominio sólido en la gestión dinámica de estructuras de datos en JavaScript mediante la notación de corchetes `objeto[clave]`, lo que permite expandir y alterar el esquema del objeto de forma flexible sin requerir estructuras rígidas preliminares.
* **Control de Interactividad en el DOM:** Uso óptimo de la API `classList` para alternar la visualización de paneles operativos y la propiedad `.disabled` para bloquear componentes redundantes (como el input de valor durante el flujo de borrado), mejorando la UX de forma limpia y directa.
