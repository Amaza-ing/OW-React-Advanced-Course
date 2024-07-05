import { useEffect, useRef, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
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
