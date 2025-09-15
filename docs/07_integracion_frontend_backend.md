# Informe de integración inicial frontend-backend

## Objetivo
Integrar el frontend con el backend simulado para mostrar productos reales desde la API en la vista de Productos.

## Acciones realizadas
- Se implementó el consumo de la API REST (`/productos`) usando fetch, useEffect y useState en `Productos.jsx`.
- Se maneja el estado de carga y error según buenas prácticas vistas en clase 6.
- Se actualizó el componente `ProductCard` para recibir props y mostrar los datos del producto (nombre, imagen, descripción, precio, stock).
- Se respeta la estructura y lógica sugerida en la documentación y mockup.

## Relación con las clases
- **Clase 3:** Uso de fetch, asincronía y promesas para consumir la API.
- **Clase 4:** Uso de props y componentes reutilizables.
- **Clase 5:** Uso de hooks (useState, useEffect) para manejar estado y efectos.
- **Clase 6:** Renderizado condicional, manejo de estados de carga/error, y renderizado de listas con .map().

## Próximos pasos
- Integrar navegación al detalle de producto.
- Mejorar estilos y estructura visual según el mockup.
- Continuar integrando funcionalidades (carrito, login, etc.) y documentar cada avance.

---

> Sugerencia: Realizar commit tras verificar la integración y visualización de productos.
