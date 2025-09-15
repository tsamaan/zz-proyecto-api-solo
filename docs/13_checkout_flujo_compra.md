# Informe de integración del flujo de compra (checkout)

## Objetivo
Permitir a los usuarios finalizar la compra, registrar la orden en la API y vaciar el carrito tras la compra.

## Acciones realizadas
- Se implementó el resumen de compra y formulario de dirección en la vista de checkout.
- Al enviar el formulario, se registra la orden en la API (`/ordenes`) y se vacía el carrito.
- Se muestra un mensaje de éxito tras la compra.
- Se valida que el usuario esté logueado y que el carrito no esté vacío.

## Relación con las clases
- **Clase 4:** Uso de props, children y componentes reutilizables.
- **Clase 5:** Uso de hooks personalizados y contextos para estado global.
- **Clase 6:** Formularios controlados, validación, rutas protegidas y manejo de estados.

## Próximos pasos
- Mejorar la experiencia visual y navegación.
- Finalizar la documentación y checklist.

---

> Sugerencia: Realizar commit tras verificar el flujo de compra y registro de órdenes.
