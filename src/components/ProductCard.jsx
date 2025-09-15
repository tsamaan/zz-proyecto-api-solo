

import { Link } from "react-router-dom";

function ProductCard({ producto }) {
  return (
  <div style={{ border: "1px solid var(--color-borde)", background: "var(--color-card)", borderRadius: 12, boxShadow: "0 2px 8px #e5e7eb", padding: 16, width: 240, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 8, marginBottom: 8 }}
      />
  <h3 style={{ margin: "8px 0", fontSize: 20 }}>{producto.nombre}</h3>
  <p style={{ color: "#64748b", fontSize: 15 }}>{producto.descripcion}</p>
  <p style={{ fontWeight: 700, fontSize: 18, color: "var(--color-primario)" }}>${producto.precio}</p>
  <p style={{ fontSize: 13, color: "#64748b" }}>Stock: {producto.stock}</p>
      <Link to={`/producto/${producto.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
}

export default ProductCard;
