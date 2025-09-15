
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/productos")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar productos");
        return res.json();
      })
      .then((data) => setProductos(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ background: "var(--color-fondo)", minHeight: "100vh", padding: "32px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", background: "var(--color-card)", borderRadius: 16, boxShadow: "0 4px 24px #22223b33", padding: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: "#e11d48", marginBottom: 24 }}>Productos</h1>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "32px",
          justifyContent: "center"
        }}>
          {productos.map((prod) => (
            <ProductCard key={prod.id} producto={prod} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Productos;
