import React from "react";
import "./App.css";
import ContainerHomeSettings from "./components/containerHomeSettings";
import TransportationCO2 from "./components/TransportationCO2";

export const Transportation = () => {
  return (
    <main>
      <div>
        <div id="navbuttons">
          <ContainerHomeSettings />
        </div>
        <div className="text">
          <h3>Transportation</h3>
          <div className="center">
            <TransportationCO2 />
          </div>
        </div>
        );
      </div>
    </main>
  );
};
