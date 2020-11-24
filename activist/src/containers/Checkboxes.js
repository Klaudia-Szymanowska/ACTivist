import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import CheckboxTest from "./components/checkboxtest";
import CheckboxTest1 from "./components/checkboxtest1";

export const Checkboxes = () => {
  return (
    <main>
      <div className="center">
        {/*<CheckboxTest /> */}
        <CheckboxTest1 />
      </div>
      );
    </main>
  );
};
