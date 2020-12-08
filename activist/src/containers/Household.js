import React from "react";
import "./App.css";
import ContainerHomeSettings from "./components/containerHomeSettings";
import HouseholdCO2 from "./components/HouseholdCO2";

export const Household = () => {
  return (
    <main>
      <div>
        <div id="navbuttons">
          <ContainerHomeSettings />
        </div>
        <div className="text">
          <h3>Household</h3>
          <div className="center">
            <HouseholdCO2 />
          </div>
        </div>
        );
      </div>
    </main>
  );
};
