import React  from 'react';
//import logo from './img/logo 1.png';
import {Link} from "react-router-dom";
import './App.css';
import CheckboxContainerTransportation from "./components/checkboxcontainerTransportation"
import ContainerHomeSettings from "./components/containerHomeSettings"


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
            <CheckboxContainerTransportation />
          </div>
        </div>
        );
      </div>
    </main>
  );
};

