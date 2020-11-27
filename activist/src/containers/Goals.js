import React from "react";
import "./App.css";
import Piechart from "./components/Piechart";
import ContainerHomeSettings from "./components/containerHomeSettings";

const foodCount = Number(localStorage.getItem("foodCount"));
const householdCount = Number(localStorage.getItem("householdCount"));
const transportationCount = Number(localStorage.getItem("transportCount"));
const shoppingCount = Number(localStorage.getItem("shoppingCount"));
const totalCount =
  foodCount + householdCount + transportationCount + shoppingCount;

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
          with {totalCount} kg of CO2 saved!
        </h4>
      </div>
    </main>
  );
};
