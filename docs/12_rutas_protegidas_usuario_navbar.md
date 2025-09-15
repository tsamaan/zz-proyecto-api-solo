# Informe de rutas protegidas y usuario en Navbar

## Objetivo
Proteger rutas sensibles (ej: checkout) y mostrar información del usuario logueado en la interfaz, mejorando la experiencia y seguridad.

## Acciones realizadas
- Se creó el componente `RutaProtegida` para proteger rutas que requieren autenticación.
- Se protegió la ruta `/checkout` para que solo usuarios logueados puedan acceder.
- Se actualizó el Navbar para mostrar el nombre del usuario logueado y un botón de logout.
- Si no hay usuario, se muestran los enlaces a login y registro.

## Relación con las clases
- **Clase 4:** Uso de props, children y componentes reutilizables.
- **Clase 5:** Uso de contextos y hooks personalizados para estado global.
- **Clase 6:** Rutas protegidas, renderizado condicional y navegación SPA.

## Próximos pasos
- Mejorar la experiencia visual y navegación.
- Integrar el flujo de compra (checkout) y finalizar la documentación.

---

> Sugerencia: Realizar commit tras verificar la protección de rutas y la visualización del usuario en el Navbar.
