# Simulador de Evaluación y Aprobación de Préstamos Bancarios

Una aplicación web interactiva que simula el proceso de evaluación de solicitudes de crédito en una entidad financiera. El sistema procesa reglas de negocio complejas en tiempo real y calcula la viabilidad del préstamo basándose en los ingresos y el tipo de contrato del usuario.

<img width="50%" alt="inicio" src="https://github.com/user-attachments/assets/a86d66c7-eb36-498e-9101-829099ef034b" />
<img width="50%" alt="datos" src="https://github.com/user-attachments/assets/317e8315-7435-463c-826a-83a0b4bdae7a" />
<img width="50%" alt="resultado" src="https://github.com/user-attachments/assets/a1f30898-0324-43dd-958e-de0ae8b21926" />

---

## 🛠️ Tecnologías Usadas

* **JavaScript (ES6+):** Captura de eventos reactivos (`input`), delegación de eventos en menús desplegables (`click`) y lógica matemática para el cálculo de líneas de crédito máximas.
* **HTML5:** Componentes de formulario estructurados y contenedores de resultados dinámicos.
* **Bootstrap 5:** Clases de diseño y rejilla responsiva (`vh-100`, `shadow-sm`), interactividad nativa para dropdowns y utilidades de visibilidad (`d-none`).

---

## ⚙️ Reglas de Negocio y Validación

El sistema restringe el envío del formulario mediante la evaluación continua de las siguientes condiciones:
1. **Identidad:** Nombre obligatorio (evaluación con `.trim()`).
2. **Rango de Edad Financiera:** El solicitante debe tener entre **18 y 65 años**.
3. **Ingreso Mínimo Vital:** Ingresos mensuales superiores a la remuneración mínima (`> S/. 1,025`).
4. **Monto Solicitado Válido:** Debe ser un valor estrictamente mayor a **0**.
5. **Tipo de Contrato:** Selección obligatoria entre tres modalidades: *Indefinido*, *Temporal* o *Independiente*.

---

## 📊 Algoritmo de Capacidad de Crédito

Al procesar la solicitud, el sistema calcula de forma dinámica el monto máximo financiable mediante un multiplicador basado en el perfil laboral del cliente:

| Tipo de Contrato | Multiplicador de Crédito | Fórmula del Límite Máximo |
| :--- | :---: | :--- |
| **Indefinido** | $15\times$ | `Ingreso Mensual * 15` |
| **Temporal** | $8\times$ | `Ingreso Mensual * 8` |
| **Independiente** | $5\times$ | `Ingreso Mensual * 5` |

---

## 💡 Destacados Técnicos

* **Transición de Estado Fluida:** Al enviar el formulario, se oculta la interfaz de entrada y se revela una tarjeta (`card`) con el resumen detallado y el veredicto de la aprobación sin recargar la página (`e.preventDefault()`).
* **Validación Reactiva:** Despliegue de errores asíncrono e inmediato en cuanto el usuario interactúa con los controles, mejorando la experiencia de usuario (UX).
* **Uso de Delegación de Eventos:** Captura eficiente de datos estructurados directamente desde elementos interactivos de Bootstrap (`dropdown-item`).
