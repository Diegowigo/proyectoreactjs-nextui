import React from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "@nextui-org/react";

const Cart = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart } =
    React.useContext(CartContext);

  const handleRemoveOne = (item) => {
    removeFromCart(item, 1);
  };

  const handleAddOne = (item) => {
    addToCart(item, 1);
  };

  const handleDeleteItem = (item) => {
    deleteFromCart(item);
  };

  return (
    <div>
      <h1
        style={{
          fontWeight: "500",
          fontSize: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Carrito de Compras
      </h1>
      {cart.length > 0 ? (
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: "10px" }}>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  margin: "10px",
                  border: "1px solid gray",
                  padding: "10px",
                }}
              >
                <h3 style={{ fontWeight: "500", fontSize: "20px" }}>
                  {item.title}
                </h3>
                <p>{item.description}</p>
                <p>Precio:</p>
                <p style={{ color: "green", fontWeight: "500" }}>
                  ${item.price}
                </p>
                <p>Cantidad: {item.quantity}</p>
                <Button onClick={() => handleRemoveOne(item)}>-</Button>
                <Button onClick={() => handleAddOne(item)}>+</Button>
                <Button onClick={() => handleDeleteItem(item)}>Eliminar</Button>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{ margin: "10px", padding: "10px", textAlign: "right" }}
              >
                <p style={{ fontWeight: "500", fontSize: "20px" }}>
                  Total: ${item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p
          style={{
            fontWeight: "500",
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Tu carrito está vacío
        </p>
      )}
    </div>
  );
};

export default Cart;
