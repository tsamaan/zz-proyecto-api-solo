import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  function login(email, password) {
    // Simulación: buscar usuario en la API
    return fetch(`http://localhost:3001/usuarios?email=${email}&password=${password}`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setUsuario(data[0]);
          return { ok: true };
        } else {
          return { ok: false, error: "Credenciales incorrectas" };
        }
      });
  }

  function logout() {
    setUsuario(null);
  }

  function register(nombre, email, password) {
    // Simulación: crear usuario en la API
    return fetch(`http://localhost:3001/usuarios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, password })
    })
      .then(res => res.json())
      .then(data => {
        setUsuario(data);
        return { ok: true };
      });
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
