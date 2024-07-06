import "./BuyProduct.css";
import tshirt from "../assets/tshirt.png";
import { useState } from "react";
import ProductWrapper from "../hoc/ProductWrapper";

function BuyTShirt(props) {
  const { quantity, decrease, increase } = props;

  const buy = () => {
    console.log(`${quantity} Camisetas compradas`);
  };

  return (
    <div className="product-container">
      <h3 className="product-name">Compra camisetas</h3>
      <img className="img" src={tshirt} alt="t-shirt" />
      <div className="quantity">
        <button onClick={decrease}>-</button>
        <h3>{quantity}</h3>
        <button onClick={increase}>+</button>
      </div>
      <button onClick={buy}>Comprar</button>
    </div>
  );
}

export default ProductWrapper(BuyTShirt);
