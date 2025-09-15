
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Registro() {
  const { register } = useAuth();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await register(nombre, email, password);
    } catch (err) {
      setError("Error al registrar usuario");
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: "4rem auto", background: "#fff", borderRadius: 18, boxShadow: "0 8px 32px #22223b99", padding: 32, border: "2px solid #e11d48" }}>
      <h1 style={{ color: "#e11d48", fontSize: 28, fontWeight: 700, marginBottom: 24, textAlign: "center" }}>Registro</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={{ fontWeight: 600, color: "#22223b" }}>Nombre</label>
          <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} required style={{ padding: "10px 12px", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 16 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={{ fontWeight: 600, color: "#22223b" }}>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{ padding: "10px 12px", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 16 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={{ fontWeight: 600, color: "#22223b" }}>Contraseña</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={{ padding: "10px 12px", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 16 }} />
        </div>
        {error && <p style={{ color: "#e11d48", fontWeight: 600, marginTop: 8 }}>{error}</p>}
        <button type="submit" disabled={loading} style={{ background: "#e11d48", color: "#fff", border: "none", borderRadius: 8, padding: "12px 0", fontWeight: 700, fontSize: 18, marginTop: 12, boxShadow: "0 2px 8px #e5e7eb" }}>Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
