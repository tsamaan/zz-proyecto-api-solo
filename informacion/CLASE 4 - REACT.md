
### Branch

Las **ramas (branches) en Git/GitHub** son como **líneas de desarrollo paralelas** dentro de un mismo proyecto.
 Te permiten avanzar, probar, y después unir los cambios cuando estén listos, sin arruinar lo que ya funciona.

1. **Separar funcionalidades**
    - Cada nueva función (ej: login, carrito de compras, dark mode) se puede desarrollar en una rama independiente.
    - Así no rompes el código principal (`main` o `master`).
2. **Trabajar en equipo sin pisarse**
    - Cada persona puede tener su rama → trabaja tranquilo sin interferir con el resto.
    - Después se integran los cambios.
3. **Probar ideas sin riesgo**
    - Podes experimentar en una rama y, si no funciona, simplemente borrarla.
    - El código estable en `main` queda intacto.
4. **Corrección de errores (hotfixes)**
    - Si hay un bug, podes arreglarlo en una rama específica y luego fusionarlo con la rama principal.

git branch (nombre) --> para crear 
git branch para listar las ramas
git switch (nombre) --> para posicionarte en el branch

# Introducción a React


### 1. Instalación de Node.js y NPM
- **Node.js:** entorno de ejecución de JavaScript en el servidor.
- **NPM (Node Package Manager):** viene incluido con Node.js y sirve para instalar librerías y frameworks (como React)
- React se instala a través de NPM, por eso primero hay que tener Node.js.

Comandos básicos:
```bash
node -v   # ver versión de Node.js
npm -v    # ver versión de npm
```


### 2. ¿Qué es React?
- **React:** biblioteca de JavaScript desarrollada por Facebook (Meta) para construir **interfaces de usuario dinámicas e interactivas**.    
- **React Native:** permite reutilizar la lógica y los componentes de React para crear **aplicaciones móviles nativas** (Android/iOS).

Diferencia clave:
- React → Web.
- React Native → Móvil.


### 3. Framework vs Biblioteca.
- **Biblioteca (ej. React):**
    - Es flexible.    
    - Te da herramientas, pero vos decidís cómo usarlas y organizarlas.
    - Ejemplo: podes combinar React con otras librerías (Redux, Axios, etc.).

- **Framework (ej. Angular):**  
    - Viene con una estructura predefinida y reglas claras.
    - Menos flexibilidad, pero más control y estandarización.

En resumen:  
**“La biblioteca te deja elegir el camino, el framework te marca el camino.”**


### 4. Ventajas de React
1. **Reutilización de componentes**
    - Un componente se puede usar varias veces en distintas partes de la aplicación.
    - Facilita cambios masivos: si modifico el componente, se actualiza en todos lados.

2. **Virtual DOM**    
    - El navegador usa el DOM (árbol de elementos HTML).
    - React introduce el **Virtual DOM**, que es una copia en memoria del DOM real.
    - Cuando hay cambios, React compara el Virtual DOM con el real (**diffing**) y actualiza **solo lo necesario** en lugar de recargar toda la página.
    - Esto mejora mucho el rendimiento.

3. **HMR (Hot Module Replacement)**    
    - Permite actualizar solo el módulo (archivo/componente) que cambió, sin recargar toda la app.
    - Ahorra tiempo en el desarrollo.


## Componentes en React
- Un **componente** es una **función de JavaScript** que devuelve JSX.
- JSX = **JavaScript + XML**.
    - XML acá es básicamente una mezcla de HTML con la sintaxis de React.
    - Permite escribir estructura HTML dentro del JS.

Componentes
```jsx
function Saludo() {
  return <h1>Hola, soy un componente de React</h1>;
}
```

Prop
```jsx
function Saludo(props) {
  return <h1>Hola {props.nombre}</h1>;
}

<Saludo nombre="Teo" />  // renderiza: Hola Teo
```

### props y childrens

#### Props
- **Props** = propiedades.
- Son la forma en que los componentes se comunican: el padre le pasa datos al hijo.
- Los props son **inmutables** (el hijo no puede modificarlos).

Props con funciones:
```jsx
function Boton(props) {
  return <button onClick={props.onClick}>{props.texto}</button>;
}
<Boton texto="Clic aquí" onClick={() => alert("Hola!")} />
```
#### Children
- `children` es un prop especial que representa el contenido que se pasa **entre las etiquetas del componente**.
- Permite enviar cualquier cosa: texto, HTML o incluso otros componentes.
- Principal ventaja: Nos da **flexibilidad total**, porque el componente padre puede decidir qué contenido poner dentro de la card.

Ejemplo:
```jsx
function Card(props) {
  return <div className="card">{props.children}</div>;
}
<Card>
  <h2>Título</h2>
  <p>Esto es un párrafo dentro de la card</p>
  <Boton texto="Aceptar" onClick={() => alert("OK")} />
</Card>
```

---
# Resumen Express
- **React** = biblioteca JS para interfaces web.
- **React Native** = versión para móviles.
- **Framework != Biblioteca** → el framework te da estructura rígida, la biblioteca es flexible.
- **Ventajas de React:** Virtual DOM, componentes reutilizables, HMR.
- **Componentes:** funciones que devuelven JSX.
- **Props:** datos que viajan de padre -> hijo.
- **Children:** prop especial que permite pasar contenido libre entre etiquetas.