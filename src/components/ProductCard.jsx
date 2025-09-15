

import { Link } from "react-router-dom";

function ProductCard({ producto }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 16, width: 220 }}>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: "100%", height: 120, objectFit: "cover" }}
      />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p><b>${producto.precio}</b></p>
      <p>Stock: {producto.stock}</p>
      <Link to={`/producto/${producto.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
}

export default ProductCard;
