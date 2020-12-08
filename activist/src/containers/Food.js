import React from "react";
import "./App.css";
import FoodCO2 from "./components/FoodCO2";
import ContainerHomeSettings from "./components/containerHomeSettings";

export const Food = () => {
  return (
    <main>
      <div id="navbuttons">
        <ContainerHomeSettings />
      </div>
      <div className="text">
        <h3>Food</h3>
        <div className="center">
          {/*<CheckboxContainer />*/}
          <FoodCO2 />
        </div>
      </div>
      );
    </main>
  );
};
