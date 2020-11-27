import React from "react";
import "./App.css";
import Piechart from "./components/Piechart";
import ContainerHomeSettings from "./components/containerHomeSettings";

const count = localStorage.getItem("count");

export const Goals = () => {
  return (
    <main>
      <div id="navbuttons">
        <ContainerHomeSettings />
      </div>
      <div className="text">
        <h3>Congratulations</h3>
      </div>
      <div className="chartsize">
        <div className="container2">
          <Piechart />
        </div>
      </div>
      <div className="text">
        <h4>
          You have insisted 1 day
          <br />
          with {count} kg of CO2 saved!
        </h4>
      </div>
    </main>
  );
};
