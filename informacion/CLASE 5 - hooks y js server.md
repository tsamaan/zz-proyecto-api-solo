
Instalar json-server: (Sugerido)  
entrar el directorio del proyecto cd hola-react  
npm install json-server  
crear un dir json-server, dentro un archivo db.json  
levantarlo    
npx json-server db.json

**Crear carpeta y archivo de datos**

- Carpeta: `json-server`
- Archivo: `db.json` (el archivo db que paso el profe)
dicho archivo tiene que estar en la carpata en la que se va a levantar el servidor local.

**Levantar el servidor**
```bash
npx json-server db.json
```

---

hooks =>Funciones especiales de React que permiten **usar características avanzadas** (estado, ciclo de vida, contexto, etc.) dentro de **componentes funcionales**.

### -> useState 
- Sirve para **crear estados internos** en un componente.
- Cuando el estado cambia, **React vuelve a renderizar** el componente automáticamente.
- Un estado puede ser un número, String, booleano, objeto o incluso pueden ser un array de estados.
```jsx
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
}
```

### -> useEffect 
Se ejecuta
1. **Después del primer renderizado**.
2. **Cada vez que cambien las dependencias** que le pasamos en el array.

Permite ejecutar **efectos secundarios** en un componente: 
- llamadas a **fetch** (APIs)
- **subscribirse** a eventos
- manipular el DOM directamente

```jsx
import { useEffect } from "react";

function MiComponente() {
  useEffect(() => {
    console.log("El componente se montó");
  }, []); // [] => no hay dependencias, solo se ejecuta al inicio

  return <p>Bienvenido</p>;
}
```

### -> useContext
Muchos componentes de la aplicación van a necesitar los mismos datos (por ejemplo los datos personales)
- Sirve para **compartir datos entre múltiples componentes** sin tener que pasarlos manualmente como props.
- Se crea un **contexto** con la información común (ej: datos de usuario, idioma, tema oscuro, etc.
- Cualquier componente dentro del `Provider` puede acceder a esos datos con `useContext`.

entonces setContext sirve para solucionar esto de manera que pones la info dentro de un contexto y todos los componentes pueden acceder a esa información sin que sea necesario enviarlo como parámetro 

```jsx
import { createContext, useContext } from "react";

// 1. Crear el contexto
const UsuarioContext = createContext();

// 2. Proveedor de datos
function App() {
  const usuario = { nombre: "Teo", edad: 20 };

  return (
    <UsuarioContext.Provider value={usuario}>
      <Perfil />
    </UsuarioContext.Provider>
  );
}

// 3. Consumir el contexto en un componente hijo
function Perfil() {
  const usuario = useContext(UsuarioContext);
  return <h2>Bienvenido {usuario.nombre}, edad: {usuario.edad}</h2>;
}
```

Con `useContext` evitamos el **“prop drilling”** (pasar props manualmente de un componente a otro en cadena).

---
## *Resumen de hooks*

- **useState** → manejar estados dentro de un componente.
- **useEffect** → ejecutar efectos secundarios (APIs, eventos, etc.).
- **useContext** → compartir datos entre muchos componentes sin props.

