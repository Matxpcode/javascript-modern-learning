# Generador de Tickets e Identificadores Dinámicos

Una aplicación web interactiva y ligera diseñada para la creación, formateo y renderizado inmediato de credenciales o tickets de usuario. Este proyecto destaca por el control preciso en la manipulación de cadenas de texto (Strings) y la mutación dinámica de estados visuales mediante clases nativas de CSS.

<img width="50%" alt="ticket_vacio" src="https://github.com/user-attachments/assets/0b27a50c-0ee4-4c72-904a-25089c475ecb" />
<img width="50%" alt="ticked_completo" src="https://github.com/user-attachments/assets/19f0bec6-b430-4d2a-8dbb-5022f7c3514f" />

---

## 🛠️ Tecnologías Usadas

* **JavaScript (ES6+):** Captura de eventos (`click`), manipulación estructural del DOM y formateo avanzado de flujos de texto.
* **HTML5:** Estructuración semántica de controles de formulario e interfaces de componentes visuales (`tarjeta`).
* **CSS3:** Estilos personalizados para la maquetación y definición de transiciones de estado estéticas (`.activo`, `.tarjeta_luego`).

---

## ⚙️ Funcionalidades Clave

1. **Normalización de Texto (Capitalización Automática):** Procesa de forma algorítmica las entradas del usuario utilizando métodos nativos como `.slice()`, `.toUpperCase()` y `.toLowerCase()` para garantizar que los nombres, roles y ciudades se rendericen siempre con la primera letra en mayúscula y las demás en minúscula, independientemente de cómo se hayan escrito.
2. **Mutación de Estado Visual:** Al actualizar el ticket, el sistema inyecta dinámicamente clases de CSS para transformar el diseño del componente, ofreciendo un feedback visual inmediato al usuario.
3. **Restablecimiento Completo (Reset):** Un manejador dedicado limpia tanto los campos de entrada de datos como el contenido renderizado de la tarjeta, revirtiendo adicionalmente los estilos visuales a su estado base original.

---

## 💡 Destacados Técnicos

* **Formateo Seguro de Strings:** Demuestra un control sólido sobre los métodos de cadenas de texto en JavaScript para estandarizar datos de entrada sin depender de librerías externas.
* **Manejo Eficiente de Clases CSS:** Uso óptimo de la API `classList` (`add`/`remove`) para alternar las propiedades de los componentes de forma limpia, manteniendo la lógica del negocio separada de la presentación visual.
