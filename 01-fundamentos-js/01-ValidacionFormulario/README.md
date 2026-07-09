# Módulo de Validación de Clientes

Una aplicación web interactiva diseñada para simular el registro de usuarios mediante la captura de eventos dinámicos en el DOM y la aplicación inmediata de reglas de negocio.

<img width="605" height="847" alt="validacion" src="https://github.com/user-attachments/assets/a190ffcf-f49d-4023-80e3-69f59124b6d5" />

---

## 🛠️ Tecnologías Usadas

* **JavaScript (ES6+):** Control dinámico del DOM y validación lógica basada en eventos (`input`).
* **HTML5:** Estructuración semántica del formulario de registro.
* **Bootstrap 5:** Framework CSS para el diseño responsivo, centrado de interfaz (`vh-100`) y gestión visual de errores (`d-none`).

---

## ⚙️ Reglas de Negocio Validadas

El sistema evalúa el estado del formulario de forma activa mientras el usuario escribe:
1. **Nombre Obligatorio:** Remueve espacios en blanco con `.trim()`.
2. **Mayoría de Edad:** El cliente debe tener **18 años o más** (`parseInt >= 18`).
3. **Fondo Mínimo:** Requiere una capacidad financiera de al menos **S/. 50.00** (`parseFloat >= 50`).

---

## 💡 Destacados Técnicos

* **UX Proactiva:** El uso del evento `input` elimina el feedback tardío (tradicional en el botón de enviar), ocultando o mostrando las alertas de error de manera reactiva e inmediata.
* **Código Limpio:** Separación estricta de responsabilidades entre la estructura (HTML) y el comportamiento lógico (JS).
* **Gestión Estética:** Control visual delegando el estado a clases utilitarias de Bootstrap (`d-none`), evitando la manipulación de estilos en línea (`style.display`).
