import { useState } from "react";

function ProductWrapper(props) {
  const [quantity, setQuantity] = useState(0);

  const decrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return <>{props.render(quantity, decrease, increase)}</>;
}

export default ProductWrapper;
