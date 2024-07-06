import BuyCup from "../components/BuyCup";
import BuyTShirt from "../components/BuyTShirt";
import HeaderComponent from "../components/HeaderComponent";
import { Link } from "react-router-dom";
import ProductWrapper from "../hoc/ProductWrapper";

function HomePage() {
  const getBuyTShirt = (quantity, decrease, increase) => {
    return (
      <BuyTShirt
        quantity={quantity}
        decrease={decrease}
        increase={increase}
      ></BuyTShirt>
    );
  };

  const getBuyCup = (quantity, decrease, increase) => {
    return (
      <BuyCup
        quantity={quantity}
        decrease={decrease}
        increase={increase}
      ></BuyCup>
    );
  };

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div
        style={{
          margin: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Bienvenido a tu lista de tareas</h2>
        <div>
          <Link to="/tasks" className="link">
            Ver Tareas
          </Link>
        </div>
      </div>
      <h2 style={{ textAlign: "center" }}>Apoya la página</h2>
      <section
        style={{
          margin: "30px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <ProductWrapper render={getBuyTShirt} />
        <ProductWrapper render={getBuyCup} />
      </section>
    </>
  );
}

export default HomePage;
