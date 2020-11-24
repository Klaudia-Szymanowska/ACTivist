import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import CheckboxContainerHousehold from "./components/checkboxcontainerHousehold";
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
            {/*<CheckboxContainerHousehold />*/}
            <HouseholdCO2 />
          </div>
        </div>
        );
      </div>
    </main>
  );
};