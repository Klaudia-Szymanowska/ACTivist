import React from "react";
//import logo from './img/logo 1.png';
import { Link } from "react-router-dom";
import "./App.css";
import CheckboxContainerTransportation from "./components/checkboxcontainerTransportation";
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
            {/*} <CheckboxContainerTransportation />*/}
            <TransportationCO2 />
          </div>
        </div>
        );
      </div>
    </main>
  );
};
