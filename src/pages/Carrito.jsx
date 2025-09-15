
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
    <div style={{ maxWidth: 600, margin: "2rem auto", background: "var(--color-card)", borderRadius: 12, boxShadow: "0 2px 8px #e5e7eb", padding: 24 }}>
      <h1 style={{ marginBottom: 24 }}>Carrito</h1>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {carrito.map((item) => (
          <li key={item.id} style={{ marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span><b>{item.nombre}</b> x {item.cantidad}</span>
            <span style={{ fontWeight: 700 }}>${item.precio * item.cantidad}</span>
            <button onClick={() => quitarDelCarrito(item.id)} style={{ marginLeft: 8 }}>
              Quitar
            </button>
          </li>
        ))}
      </ul>
      <p style={{ fontWeight: 700, fontSize: 18 }}>Total: ${total}</p>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  );
}

export default Carrito;
