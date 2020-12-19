import React from "react";
import "./App.css";
import Piechart from "./components/Piechart";
import ContainerHomeSettings from "./components/containerHomeSettings";

export const Goals = () => {
  const foodCount = Number(localStorage.getItem("foodCount"));
  const householdCount = Number(localStorage.getItem("householdCount"));
  const transportationCount = Number(localStorage.getItem("transportCount"));
  const shoppingCount = Number(localStorage.getItem("shoppingCount"));
  const totalCount =
    foodCount + householdCount + transportationCount + shoppingCount;

  return (
    <main>
      <div id="navbuttons">
        <ContainerHomeSettings />
      </div>

      <div className="text">
        <h3>Congratulations</h3>
      </div>
      <div className="login">
        <div className="chartsize">
          <div className="container2">
            <Piechart />
          </div>
          <div className="container">
            <div className="content">
              <h3>
                Your total CO2-savings are:
                <br />
                {totalCount.toFixed(1)} kg!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
