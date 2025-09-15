# Informe de integración de carrito de compras

## Objetivo
Implementar la funcionalidad de carrito global, permitiendo agregar, quitar y vaciar productos, y visualizar el total.

## Acciones realizadas
- Se creó el contexto global `CarritoContext` usando createContext y useContext.
- Se envolvió la app con `CarritoProvider` para acceso global al carrito.
- Se integró el botón "Agregar al carrito" en la vista de detalle de producto.
- Se implementó la vista de carrito mostrando productos, cantidades, total y botones para quitar/vaciar.

## Relación con las clases
- **Clase 4:** Uso de props, children y componentes reutilizables.
- **Clase 5:** Uso de hooks personalizados y contextos para estado global.
- **Clase 6:** Renderizado condicional, manejo de listas y lógica de negocio.

## Próximos pasos
- Mejorar la experiencia visual y navegación.
- Integrar el widget de carrito en el Navbar.
- Continuar con login, registro y checkout.

---

> Sugerencia: Realizar commit tras verificar la funcionalidad del carrito y su integración global.
