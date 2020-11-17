import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import CheckboxContainer from "./components/checkboxcontainer";
import ContainerHomeSettings from "./components/containerHomeSettings";

export const Food = () => {
  return (
    <main>
      <div>
        <div id="navbuttons">
          <ContainerHomeSettings />
        </div>
        <div className="text">
          <h3>Food</h3>
          <div className="center">
            <CheckboxContainer />
          </div>
        </div>
        );
      </div>
    </main>
  );
};
