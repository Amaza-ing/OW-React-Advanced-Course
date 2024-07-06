import "./BuyProduct.css";
import cup from "../assets/cup.jpg";

function BuyCup(props) {
  const { quantity, decrease, increase } = props;

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
