
import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";
import { useAuth } from "../context/AuthContext";


function Navbar() {
  const { usuario, logout } = useAuth();
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16, borderBottom: "1px solid #ccc" }}>
      <div style={{ display: "flex", gap: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/carrito">Carrito</Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Link to="/carrito">
          <CartWidget />
        </Link>
        {usuario ? (
          <>
            <span>Hola, {usuario.nombre}</span>
            <button onClick={logout}>Salir</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/registro">Registro</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
