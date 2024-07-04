import React from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {
  const { cart } = React.useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div>
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} className="iconStyles" />
        <span className="iconStyles">{totalItems}</span>
      </Link>
    </div>
  );
};

export default CartWidgetComponent;
