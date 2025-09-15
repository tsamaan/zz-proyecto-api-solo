
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
    <div style={{
      position: "fixed",
      top: 100,
      right: 40,
      width: 380,
      background: "#fff",
      borderRadius: 18,
      boxShadow: "0 8px 32px #22223b99",
      padding: 32,
      zIndex: 1000,
      border: "2px solid #e11d48"
    }}>
      <h1 style={{ marginBottom: 24, color: "#e11d48", fontSize: 26, fontWeight: 700 }}>Carrito de Compras</h1>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {carrito.map((item) => (
          <li key={item.id} style={{ marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fafc", borderRadius: 8, padding: "8px 12px" }}>
            <span style={{ fontWeight: 600 }}>{item.nombre} x {item.cantidad}</span>
            <span style={{ fontWeight: 700, color: "#e11d48" }}>${item.precio * item.cantidad}</span>
            <button onClick={() => quitarDelCarrito(item.id)} style={{ marginLeft: 8, background: "#e11d48", color: "#fff", border: "none", borderRadius: 6, padding: "4px 10px", fontWeight: 600 }}>Quitar</button>
          </li>
        ))}
      </ul>
      <p style={{ fontWeight: 700, fontSize: 20, color: "#22223b", marginTop: 16 }}>Total: ${total}</p>
      <button onClick={vaciarCarrito} style={{ background: "#22223b", color: "#fff", border: "none", borderRadius: 6, padding: "8px 16px", fontWeight: 600, marginTop: 12 }}>Vaciar carrito</button>
    </div>
  );
}

export default Carrito;
