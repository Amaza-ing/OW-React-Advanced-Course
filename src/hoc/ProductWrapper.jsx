import { useState } from "react";

function ProductWrapper(ProductComponent) {
  function NewComponent() {
    const [quantity, setQuantity] = useState(0);

    const decrease = () => {
      if (quantity > 0) setQuantity(quantity - 1);
    };

    const increase = () => {
      setQuantity(quantity + 1);
    };

    return (
      <ProductComponent
        quantity={quantity}
        decrease={decrease}
        increase={increase}
      ></ProductComponent>
    );
  }

  return NewComponent;
}

export default ProductWrapper;
