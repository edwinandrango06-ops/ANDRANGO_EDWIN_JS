# Documentación del Proyecto: Innova ESPE 2026

## Estructura de Directorios

```
ANDRANGO_EDWIN_JS/
├── index.html
├── js/
│   └── app.js
└── README.md

```
## Decisiones de Lógica y Estructura

El prototipo se desarrolló en JavaScript nativo utilizando interacciones por consola y cuadros de diálogo (`prompt()`, `alert()` y `console.log()`), sin manipulación del DOM ni interfaz gráfica:

* **Configuración y Estado (RF01):** Se declararon constantes (`const`) para parámetros fijos como el precio por entrada (`$20`), cupos iniciales (`50`), porcentajes de descuento (`30 %`, `15 %`, `0 %`) y máximo por compra (`5`), junto con variables (`let`) para el estado dinámico del evento.
* **Bucle Principal y Menú (RF02 y RF06):** Se implementó un ciclo `do...while` combinado con `switch` para mantener el menú activo hasta seleccionar la opción `4` (Salir), normalizando la entrada con `.trim()` y mostrando el resumen final al cerrar.
* **Flujo de Compra y Validaciones (RF03):** Se solicita nombre, tipo de participante y cantidad de entradas, validando que la cantidad sea un número entero entre `1` y `5` y que no supere los cupos disponibles antes de calcular subtotal, descuento y total o modificar contadores.
* **Consulta de Cupos e Ingresos (RF04 y RF05):** La opción `2` muestra los cupos restantes y el estado correspondiente (`Cupos disponibles`, `Últimos cupos disponibles` o `Evento agotado`), mientras que la opción `3` reporta entradas vendidas, ingresos acumulados y compras realizadas.
* **Resguardo ante Compras Rechazadas:** Cualquier entrada inválida, cantidad fuera de rango, exceso de cupos o cancelación interrumpe la operación antes de actualizar cupos, ingresos o contadores.

## Especificaciones Técnicas

### HTML5

* Documento base con codificación UTF-8 (`<meta charset="UTF-8" />`) encargado de cargar el script principal.
* Inclusión del archivo JavaScript mediante `<script src="js/app.js"></script>`.

### JavaScript Nativo (ES6+)

* Uso de `const` y `let` con control de alcance de variables.
* Estructuras de control `do...while`, `switch`, `if / else if` y operadores aritméticos, de comparación y lógicos.
* Validación numérica con `Number()`, `Number.isNaN()`, `Number.isInteger()` y formateo monetario con `.toFixed(2)`.
* Interacción mediante `prompt()`, `alert()`, `console.log()` y `console.warn()`.

## Repositorio en GitHub

Puedes consultar el código fuente y el historial de commits en el siguiente enlace:

https://github.com/edwinandrango06-ops/ANDRANGO_EDWIN_JS

## Datos del Estudiante

* **Estudiante:** Edwin Lenin Andrango Sosapanta
* **Carrera:** Ingeniería de Software
* **Institución:** Universidad de las Fuerzas Armadas ESPE
