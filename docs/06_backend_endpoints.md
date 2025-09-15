# Endpoints y estructura de datos del backend simulado

## Script para levantar el backend

```bash
npm run json-server
```
Esto levanta un servidor en http://localhost:3001 con los siguientes endpoints:

## Endpoints principales
- `GET /productos` — Lista todos los productos
- `GET /productos/:id` — Detalle de un producto
- `GET /usuarios` — Lista de usuarios
- `GET /ordenes` — Lista de órdenes
- `POST /ordenes` — Crear una nueva orden

## Estructura de datos
- **productos:** id, nombre, descripcion, precio, stock, imagen, categoria
- **usuarios:** id, nombre, email, password
- **ordenes:** id, usuarioId, productos (array de productoId y cantidad), total, fecha

## Relación con las clases
- **Clase 3:** Permite practicar asincronía, fetch y promesas desde el frontend.
- **Clase 5:** Se usará useEffect y useState para consumir estos endpoints.
- **Clase 6:** Los endpoints alimentan las rutas dinámicas y vistas del frontend.

---

> Sugerencia: Realizar commit tras probar el backend simulado y documentar endpoints.
