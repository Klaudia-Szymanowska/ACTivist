import React from "react";
import { Link } from "react-router-dom";
//import logo from './img/logo 1.png';
import "./App.css";
import CheckboxContainer from "./components/checkboxcontainer";
import Settingbutton from "./components/Settingsbutton";
import Homebutton from "./components/homebutton";

export const MyChallenges = () => {
  return (
    <main>
      <div id="navbuttons">
        <Settingbutton />
        <Homebutton />
      </div>
      <div className="text">
        <h3>Food</h3>
        <CheckboxContainer />
      </div>
      );
    </main>
  );
};

/*to be changed by Louise as a component 
<div>
<Link to="/settings">
  <img
    className="column"
    src={set}
    style={{ width: "5%", float: "right" }}
    alt="set"
  />
</Link>
<div>
  <Link to="/home">
    <img
      className="column"
      src={home2}
      style={{ width: "5%", float: "left" }}
      alt="set"
    />
  </Link>
</div>
</div>

<div className="text">
<h3>Food</h3>
<div>
  <button id="challbutton">
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
      />
      <label className="form-check-label" htmlFor="defaultCheck1">
        No beef!
        <br /> <b id="challtext">Can save CO2: 160 kg/day</b>
      </label>
    </div>{" "}
  </button>
</div>

<div>
  <button id="challbutton">
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
      />
      <label className="form-check-label" htmlFor="defaultCheck1">
        Go pescatarian!
        <br /> <b id="challtext">Can save CO2: 200 kg/day </b>
      </label>
    </div>{" "}
  </button>
</div>

<div>
  <button id="challbutton">
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
      />
      <label className="form-check-label" htmlFor="defaultCheck1">
        Go vegetarian!
        <br /> <b id="challtext">Can save CO2: 250 kg/day </b>
      </label>
    </div>
  </button>
</div>

<div>
  <button id="challbutton">
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
      />
      <label className="form-check-label" htmlFor="defaultCheck1">
        Go vegan!
        <br />
        <b id="challtext">Can save CO2: 300 kg/day </b>
      </label>
    </div>
  </button>
</div>

<div>
  <button className="button2"> Pledge </button>
</div>
</div>
*/
