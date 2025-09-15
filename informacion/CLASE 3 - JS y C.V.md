### TEMAS:
- Repaso.
- JAVA Script asincrónico.
- control de versiones.

*Ultima clase de repaso tipo aprender conceptos básicos antes de usar REACT*
### Repaso.

#### Callback
Un **callback** es una función que se pasa como argumento a otra función y que se ejecuta cuando esa otra función termina su tarea.
Permite **personalizar el comportamiento** de otra función, o esperar a que algo termine para ejecutar código.

**Qué tiene que ver con `.map()`?** 
El método `.map()` recibe un callback para transformar cada elemento de un array.

Se usa mucho en REACT para manejar eventos (`onClick={() => …}`) o renderizar listas (`array.map(...)`).

#### DOM
- **Ejemplo de acceso y modificación:**
```
document.getElementById("titulo").textContent = "Nuevo título";
```

Existen tres formas de programar eventos en el DOM:

- Inline: No se usa más (mezcla HTML con JS).
```
<button onclick="alert('Hola')">Click</button>
```

- Propiedades del DOM: No se recomienda usar, sobrescribe funciones previas.
```
boton.onclick = () => console.log("Click");
```

- addEventListener: Es una buena practica usar este forma Permite múltiples funciones y separa responsabilidades.
```
boton.addEventListener("click", () => console.log("Click 1"));
boton.addEventListener("click", () => console.log("Click 2"));
```

### JS Asincrónico

Se usa para llamar a las APIs y que cuando pido datos no me cuelga la pagina, y puedo hacer otra cosa hasta que me de la respuesta
- Permite ejecutar tareas que tardan (ej: pedir datos a una API) **sin colgar la página**.
- Mientras espero la respuesta, el resto del código sigue funcionando.

> Ejemplo real: pedir datos de usuarios a un servidor.

#### fetch | .then | .catch
El comando *'fetch'* se usa para enlazar APIs y endpoints a mi código en JS junto con *.then* y *.catch*
```
fetch("https://jsonplaceholder.typicode.com/users")
  .then(respuesta => respuesta.json())   // si sale bien
  .then(data => console.log(data))        // usamos los datos
  .catch(error => console.error(error));  // si hay error

```

Esto es una consulta asincrónica, las consultas asincrónicas devuelven una *"promesa"* 
#### Promesas
- Una **promesa** es el resultado futuro de una operación asíncrona.
- Estados posibles:
    - **Pending (pendiente):** aún no terminó.
    - **Fulfilled (resuelta):** terminó bien.
    - **Rejected (rechazada):** hubo un error.

entonces al usar fetch, puedo integrar una api o un endpoint para hacerle consultas y peticiones, que van a devolver promesas cuando se *'Resulva'* dicha promesa se mostraran los datos que devuelve esa api o endpoint.

Lo que vamos a usar es esta estructura:
```
async function obtenerUsuarios() {
  try {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await respuesta.json();  // espera la promesa y luego guarda el JSON
    console.log(data);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
  }
}

obtenerUsuarios();  // llamada a la funcion
```

#### Async / Await 
- `async` → se usa para declarar que una función es asíncrona. Esa función **siempre devuelve una Promesa**.
- `await` → se usa dentro de funciones `async` para **esperar** la resolución de una promesa, sin bloquear el resto del programa.
- `try/catch` → se usa junto a `await` para manejar errores de forma clara.

Ventaja: con `await` el código luce **secuencial (sin cadenas de .then)**, pero **la ejecución no congela la aplicación**.

COntrol de Vrersiones
Control de Versiones = Permite llevar un seguimiento, control, perite 

