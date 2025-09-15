
import { useCarrito } from "../context/CarritoContext";

function Carrito() {
  const { carrito, quitarDelCarrito, vaciarCarrito } = useCarrito();
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  if (carrito.length === 0) {
    return (
      <div>
        <h1>Carrito</h1>
        <p>El carrito está vacío.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {carrito.map((item) => (
          <li key={item.id} style={{ marginBottom: 16 }}>
            <b>{item.nombre}</b> x {item.cantidad} = ${item.precio * item.cantidad}
            <button onClick={() => quitarDelCarrito(item.id)} style={{ marginLeft: 8 }}>
              Quitar
            </button>
          </li>
        ))}
      </ul>
      <p><b>Total: ${total}</b></p>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  );
}

export default Carrito;
