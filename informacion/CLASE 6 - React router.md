### Instalación de React Router
En la raíz del proyecto (donde está `package.json`):
```bash
npm install react-router-dom
```

---
## React Router
React Router es la biblioteca más usada para manejar **rutas y navegación** en aplicaciones de React.  
Sirve para crear una **SPA (Single Page Application)**: una app que **no recarga toda la página** al navegar, sino que cambia solo lo necesario en el DOM.

- Permite **definir las rutas principales** de la aplicación.
- Navegación entre páginas **sin recargar**.
- Mantiene el **estado global** (ejemplo: carrito de compras).
- Hace que la app se sienta rápida y fluida, como una aplicación de escritorio.

---
### Problema con `<a>` tradicional
Ya no vamos a usar tanto el enlace directo [`<a href="/producto/1">`] ya que vuelve tosca la navegación ya que recarga todo el DOM.
- El navegador **recarga toda la página**.
- Se **reinicia el estado** (ej: carrito vacío).
- Se **descargan de nuevo** todos los archivos (CSS, JS, imágenes).
- La experiencia de SPA se rompe.

```jsx
//--- antes
<a href="/product/1">Ver producto</a>

//--- ahora con React Router
import { Link } from "react-router-dom";

<Link to="/product/1">Ver producto</Link>
```
#### Manejo del historial
- Con `<a>`, al usar el botón **Atrás** del navegador, se recarga toda la página anterior.
- Con React Router:
    - El historial se maneja en memoria.
    - Podes navegar entre rutas sin perder el estado de la app. (conservando sesión, carrito, filtros)

---
### Rutas dinámicas y parámetros

- Podes crear URLs **limpias y semánticas** como:
    - `/product/1`
    - `/checkout`        
    - `/user/profile`

Ejemplo con parámetros (`useParams`):
```jsx
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  return <h2>Detalle del producto {id}</h2>;
}
```
Si la URL es `/product/10`, `id = 10`.

---
### Navegación programática (`useNavigate`) 

Sirve para redirigir al usuario después de una acción. A su vez es un hooks.

Ejemplo: cuando agregas un producto al carrito → redirigir a `/cart`.
```jsx
import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const navigate = useNavigate();

  const agregarAlCarrito = () => {
    // lógica para agregar producto
    navigate("/cart"); // redirige al carrito
  };
  return <button onClick={agregarAlCarrito}>Agregar al carrito</button>;
}
```

### Rutas protegidas
- Algunas páginas no deben ser accesibles si el usuario no está logueado (ej: pagar en el carrito).
- Se crea un **componente de ruta protegida** que chequea si hay usuario autenticado.
Ejemplo:
```jsx
import { Navigate } from "react-router-dom";

function RutaProtegida({ children }) {
  const logueado = false; // acá iría la lógica real
  return logueado ? children : <Navigate to="/login" />;
}


// Uso
<Route path="/checkout" element={<RutaProtegida><Checkout /></RutaProtegida>} />
```

---

### Configuracion basica de rutas con R-R:
```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h2>Inicio</h2>; }
function About() { return <h2>Acerca de</h2>; }
```

---
## Renderizado Condicional, Listas, Estados de carga y Formularios (parte 2)

#### Renderizado condicional:
Permite mostrar o no componentes según una condición. Es como usar `if/else` en Java, pero en JSX.

### Operadores:

#### a) Operador lógico `&&`
- Muestra algo **solo si la condición es verdadera**.
```jsx
{ carrito.length > 0 && <Cart items={carrito} /> }
```
Si `carrito.length > 0` → se renderiza `<Cart />`.  
Si no, no muestra nada.

#### b) Operador lógico `||`
- Sirve para mostrar un valor alternativo cuando la condición es **falsa** (null, undefined, false, 0, "").
```jsx
{ productos.length || <p>No hay productos disponibles</p> }
```

#### c) Operador ternario (`cond ? x : y`)
- Permite elegir entre dos elementos.
```jsx
{ logueado ? <Dashboard /> : <Login /> }
```

---
## Renderizado de listas con `.map()`

- Transforma un array en elementos JSX.
- Declarativo → vos decís _“transforma esta lista en componentes”_ y React se encarga del resto.

```jsx
const productos = ["Campera", "Mochila", "Billetera"];

<ul>
  {productos.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
```
Diferencia con `for`:
- `map` es **declarativo** → “qué hacer”.
- `for` es **imperativo** → “cómo hacerlo”.

---
### Manejo de estados de carga y error

>Muy común al hacer peticiones a APIs.

```jsx
function ProductList() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/products")
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {productos.map(p => <li key={p.id}>{p.nombre}</li>)}
    </ul>
  );
}
```

Patrón:
- **Cargando** → spinner o texto.
- **Error** → mensaje de error.
- **Éxito** → mostrar la data.
### Conceptos clave de APIs
- **API (Application Programming Interface):**  
    Reglas que permiten que diferentes programas se comuniquen.

- **API REST:**
    - Arquitectura para APIs.
    - Escalable, simple, fácil de entender.        
    - **Stateless** → cada petición lleva toda la info necesaria, el servidor no recuerda estados anteriores.  
	    Ejemplo: cada vez que pedís algo al mozo, le decís TODO (plato, bebida, postre).

- **Endpoint:**
    - Una URL específica dentro de una API que representa un recurso.        
    - Ej: `/usuarios`, `/productos/123`, `/ordenes`.

- **Métodos HTTP:**
    - **GET:** leer datos.
    - **POST:** crear un recurso.
    - **PUT/PATCH:** actualizar.
    - **DELETE:** eliminar.

---
## **Formularios en React**
### a) Componentes controlados
- El valor del input se guarda en un **estado** (`useState`).
- El componente React controla el input → por eso se llaman “controlados”.
```jsx
function Formulario() {
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre enviado:", nombre);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### b) Validación de datos
- Se puede validar manualmente con `if` o usar bibliotecas.
```jsx
if (!nombre) {
  alert("El campo nombre es obligatorio");
}
```

### c) React Hook Form.
- biblioteca que facilita el manejo de formularios, validaciones y errores.
Ventajas:
- Menos código.
- Validaciones automáticas.
- Manejo fácil de errores y feedback.

Primero se instala:
```bash
npm install react-hook-form
```

Ejemplo de uso simple:
```jsx
import { useForm } from "react-hook-form";

function Formulario() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nombre", { required: "El nombre es obligatorio" })} />
      {errors.nombre && <p>{errors.nombre.message}</p>}

      <button type="submit">Enviar</button>
    </form>
  );
}
```

---
# Resumen Express

- **React Router = navegación en apps React sin recargar la página.**  

- Problema con `<a>` → recarga y rompe la SPA.

- `<Link>` → navegación fluida, mantiene el estado.

- **useParams** → obtener valores de la URL.

- **useNavigate** → redirigir después de una acción.

- **Rutas protegidas** → acceso solo si hay sesión activa.

- Componentes clave: 
    - `BrowserRouter` → envuelve toda la app.
    - `Routes` → agrupa las rutas.
    - `Route` → define ruta + componente.
    - `Link` → reemplaza `<a>`.
### Segunda parte:
- **Renderizado condicional:**    
    - `&&` → muestra si la condición es true.
    - `||` → valor alternativo si es false.
    - `?:` → ternario para dos opciones.

- **Listas:** con `.map()` declarativo.
- **Estados de carga y error:** patrón de UI para `loading/error/success`.
- **API REST:** stateless, endpoints, métodos HTTP.

- **Formularios en React:**    
    - Controlados → manejados con `useState`.
    - Validación manual o con **React Hook Form**.
