# Sistema de Evaluación de Empleados

Una aplicación web interactiva y ligera diseñada para procesar, validar y calcular beneficios laborales de un empleado en tiempo real. Este proyecto destaca por el análisis condicional estructurado, la conversión segura de tipos de datos en JavaScript (casting) y la mutación dinámica de componentes visuales en base a reglas de negocio preestablecidas.

<img width=50% alt="evaluacion_empleados1" src="https://github.com/user-attachments/assets/9e39e04e-1790-4a2b-ae2e-9214576a6918" />
<img width=50% alt="evaluacion_empleados2" src="https://github.com/user-attachments/assets/d35e222a-5c74-47fe-b33b-16a5f1afd78b" />


## 🛠️ Tecnologías Usadas

* **JavaScript (ES6+):** Captura de eventos (`submit`), parsing e inferencia de tipos de datos, manipulación estructurada del DOM y lógica de negocio condicional.
* **HTML5:** Estructuración de formularios semánticos, controles de interacción y plantillas de tarjetas para renderizado de resultados.
* **Bootstrap 5:** Framework de estilos para la maquetación responsiva rápida, centrado absoluto de la interfaz (`vh-100`) y transiciones de visibilidad fluidas.

## ⚙️ Funcionalidades Clave

* **Captura y Normalización de Datos:** Intercepta el envío del formulario anulando la recarga nativa de la página mediante `.preventDefault()` y limpia las entradas de texto utilizando el método `.trim()` para mitigar errores comunes por espacios vacíos.
* **Conversión de Tipos de Datos (Casting):** Procesa de manera adecuada las entradas numéricas convirtiendo strings a números flotantes (`parseFloat`) o enteros (`parseInt`), asegurando operaciones matemáticas rigurosas y evitando concatenaciones accidentales.
* **Motor Condicional de Reglas de Negocio:** Evalúa de forma algorítmica las condiciones del beneficio usando operadores lógicos (`&&`). El sistema valida si el empleado es apto para un bono (10% de su salario) si cumple con tres condiciones concurrentes: estar activo, tener una antigüedad mayor o igual a 2 años, y un sueldo menor a S/.5000.
* **Transición Dinámica de Vistas:** Al procesar la evaluación, el formulario de registro se oculta y la tarjeta de resultados se revela dinámicamente de forma inmediata, simulando la experiencia fluida de una Single Page Application (SPA).

## 💡 Destacados Técnicos

* **Expansión Dinámica de Objetos:** Modela la información capturada en un objeto literal ordenado y le agrega en tiempo de ejecución la propiedad calculada (`empleado.bono`), demostrando el dinamismo y flexibilidad de las estructuras en JavaScript.
* **Control de Precisión Numérica:** Utiliza el método `.toFixed(2)` para formatear y redondear los montos monetarios calculados, garantizando una salida de datos limpia y con formato financiero estándar.
* **Manejo Eficiente de Clases CSS:** Uso óptimo de la API `classList` (`add`/`remove`) para alternar de forma limpia las clases de Bootstrap, logrando que la interfaz responda al flujo de la aplicación sin sobreescribir estilos en línea.
