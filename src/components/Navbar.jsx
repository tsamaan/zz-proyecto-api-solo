
import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";
import { useAuth } from "../context/AuthContext";


function Navbar() {
  const { usuario, logout } = useAuth();
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 32px",
      height: 72,
      background: "#18181b",
      color: "#fff",
      borderBottom: "4px solid #e11d48",
      boxShadow: "0 2px 8px #22223b"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <Link to="/">
          <img src="/logo192.png" alt="Logo" style={{ height: 48, borderRadius: 8, background: "#fff", padding: 4 }} />
        </Link>
        <Link to="/productos" style={{ fontSize: 18, color: "#fff", fontWeight: 500 }}>Productos</Link>
        <Link to="/carrito" style={{ fontSize: 18, color: "#fff", fontWeight: 500 }}>Carrito</Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <Link to="/carrito">
          <CartWidget />
        </Link>
        {usuario ? (
          <>
            <span style={{ fontWeight: 600, fontSize: 16, color: "#fff" }}>Hola, {usuario.nombre}</span>
            <button onClick={logout} style={{ background: "#e11d48", color: "#fff", border: "none", borderRadius: 6, padding: "8px 16px", fontWeight: 600, marginLeft: 8 }}>Salir</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ fontSize: 16, color: "#fff", fontWeight: 500 }}>Login</Link>
            <Link to="/registro" style={{ fontSize: 16, color: "#fff", fontWeight: 500 }}>Registro</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
