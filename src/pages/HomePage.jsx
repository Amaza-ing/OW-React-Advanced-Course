import { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { Link } from "react-router-dom";

function HomePage() {
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount(renderCount + 1);
  })

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <h2>{renderCount}</h2>
      <div
        style={{
          marginTop: "150px",
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
    </>
  );
}

export default HomePage;
