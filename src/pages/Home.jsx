
function Home() {
  return (
    <div style={{ maxWidth: 700, margin: "2rem auto", background: "var(--color-card)", borderRadius: 12, boxShadow: "0 2px 8px #e5e7eb", padding: 32, textAlign: "center" }}>
      <h1 style={{ fontSize: 32, marginBottom: 16, color: "var(--color-primario)" }}>Bienvenido al E-commerce</h1>
      <p style={{ fontSize: 18, color: "#64748b" }}>
        Descubrí los mejores productos y viví la experiencia de compra online.
      </p>
    </div>
  );
}

export default Home;
