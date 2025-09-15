
import { useCarrito } from "../context/CarritoContext";

function CartWidget() {
  const { carrito } = useCarrito();
  const cantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <span role="img" aria-label="carrito">🛒</span>
      <span>{cantidad}</span>
    </div>
  );
}

export default CartWidget;
