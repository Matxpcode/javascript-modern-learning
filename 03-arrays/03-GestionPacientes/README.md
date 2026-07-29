# 03-ClinicaPacientes

## Descripción

Aplicación web desarrollada con **JavaScript** para gestionar el registro de pacientes de una clínica. El sistema permite registrar pacientes, visualizar el historial completo y mostrar estadísticas mediante gráficos.

<img width=50% alt="clinica1" src="https://github.com/user-attachments/assets/7e0daa57-c152-4e90-bf7d-e57074dcfc7e" />

<img width=50% alt="clinica2" src="https://github.com/user-attachments/assets/139f58ac-4356-4830-b53e-ffcf4eb72c34" />

<img width=50% alt="clinica3" src="https://github.com/user-attachments/assets/1ac8b0bc-faa8-4a00-986e-a036c47730fa" />

<img width=50% alt="clinica4" src="https://github.com/user-attachments/assets/575e173a-2bac-4c00-89a4-51a522f4f1ff" />

---

## Requerimientos del ejercicio

El sistema debía permitir:

- Registrar múltiples pacientes utilizando un **Array de Objetos**.
- Capturar información mediante un formulario.
- Mostrar el historial completo de pacientes registrados.
- Llevar el conteo de:
  - Total de pacientes.
  - Pacientes con seguro.
  - Pacientes sin seguro.
- Mostrar estadísticas utilizando **Chart.js**.
- Cambiar entre diferentes paneles de la interfaz (Formulario, Historial y Estadísticas).
- Mantener la información almacenada durante la ejecución de la aplicación.

---

## Conceptos aplicados

### JavaScript

- Arrays
- Objetos
- Arrays de Objetos
- push()
- length
- forEach()
- Funciones
- Manipulación del DOM
- Eventos (`click`)
- Template Literals
- Variables globales
- Condicionales
- Manipulación de clases (`classList`)
- Uso de formularios
- Manejo de estados de la interfaz

### Bootstrap

- Grid (`row`, `col`)
- Cards
- Buttons
- Badges
- Dropdowns
- Formularios
- Utilidades Flex
- Espaciado (`p-*`, `m-*`, `gap-*`)
- Clases responsivas
- Ocultar y mostrar componentes (`d-none`)

### Librerías

- Chart.js
  - Gráfico de barras
  - Actualización y destrucción de gráficos (`destroy()`)

---

## Estructura del proyecto

```
02-ClinicaPacientes
│
├── index.html
├── pacientes.js
├── README.md

```

---

## Aprendizajes

Durante este ejercicio se practicó:

- Construcción de aplicaciones utilizando Arrays de Objetos.
- Organización del código mediante funciones.
- Separación de responsabilidades.
- Actualización dinámica del DOM.
- Manejo de múltiples vistas dentro de una misma página.
- Integración de una librería externa (Chart.js).
- Representación visual de información mediante gráficos.

---
