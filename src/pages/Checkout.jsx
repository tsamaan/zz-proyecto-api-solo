
import { useState } from "react";
import { useCarrito } from "../context/CarritoContext";
import { useAuth } from "../context/AuthContext";

function Checkout() {
  const { carrito, vaciarCarrito } = useCarrito();
  const { usuario } = useAuth();
  const [direccion, setDireccion] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensaje("");
    const orden = {
      usuarioId: usuario.id,
      productos: carrito.map(item => ({ productoId: item.id, cantidad: item.cantidad })),
      total,
      fecha: new Date().toISOString().slice(0, 10),
      direccion
    };
    await fetch("http://localhost:3001/ordenes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orden)
    });
    vaciarCarrito();
    setMensaje("¡Compra realizada con éxito!");
    setLoading(false);
  };

  if (carrito.length === 0) {
    return <p>No hay productos en el carrito.</p>;
  }

  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", border: "1px solid #ccc", padding: 24 }}>
      <h1>Checkout</h1>
      <h3>Resumen de compra</h3>
      <ul>
        {carrito.map(item => (
          <li key={item.id}>{item.nombre} x {item.cantidad} = ${item.precio * item.cantidad}</li>
        ))}
      </ul>
      <p><b>Total: ${total}</b></p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Dirección de entrega:</label>
          <input type="text" value={direccion} onChange={e => setDireccion(e.target.value)} required />
        </div>
        <button type="submit" disabled={loading}>Finalizar compra</button>
      </form>
      {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}
    </div>
  );
}

export default Checkout;
