import "./BuyProduct.css";
import cup from "../assets/cup.jpg";
import React, { useState } from "react";

function BuyCup() {
  const [quantity, setQuantity] = useState(0);

  const decrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const buy = () => {
    console.log(`${quantity} tazas compradas`);
  }

  return (
    <div className="product-container">
      <h3 className="product-name">Compra tazas</h3>
      <img className="img" src={cup} alt="t-shirt" />
      <div className="quantity">
        <button onClick={decrease}>-</button>
        <h3>{quantity}</h3>
        <button onClick={increase}>+</button>
      </div>
      <button onClick={buy}>Comprar</button>
    </div>
  );
}

export default BuyCup;
