

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCarrito } from "../context/CarritoContext";

function Detalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/productos/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Producto no encontrado");
        return res.json();
      })
      .then((data) => setProducto(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);


  const { agregarAlCarrito } = useCarrito();

  if (loading) return <p>Cargando detalle...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!producto) return <p>No se encontró el producto.</p>;

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", border: "1px solid #ccc", padding: 24 }}>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: 300, height: 200, objectFit: "cover" }}
      />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p><b>Precio: ${producto.precio}</b></p>
      <p>Stock: {producto.stock}</p>
      <p>Categoría: {producto.categoria}</p>
      <button onClick={() => agregarAlCarrito(producto, 1)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default Detalle;
