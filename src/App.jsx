import React from "react";
import MainRouter from "./routes/MainRouter";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <MainRouter />
    </CartProvider>
  );
}

export default App;
