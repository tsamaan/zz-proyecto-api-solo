

import { Link } from "react-router-dom";

function ProductCard({ producto }) {
  return (
  <div style={{ border: "none", background: "#fff", borderRadius: 18, boxShadow: "0 6px 24px #22223b33", padding: 20, width: 260, display: "flex", flexDirection: "column", alignItems: "center", margin: "0 0 32px 0" }}>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 12, marginBottom: 12, boxShadow: "0 2px 8px #e5e7eb" }}
      />
  <h3 style={{ margin: "12px 0 4px 0", fontSize: 22, fontWeight: 700, color: "#22223b" }}>{producto.nombre}</h3>
  <p style={{ color: "#64748b", fontSize: 15, marginBottom: 8 }}>{producto.descripcion}</p>
  <p style={{ fontWeight: 700, fontSize: 20, color: "#e11d48", marginBottom: 8 }}>${producto.precio}</p>
  <p style={{ fontSize: 13, color: "#64748b", marginBottom: 12 }}>Stock: {producto.stock}</p>
      <Link to={`/producto/${producto.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
}

export default ProductCard;
