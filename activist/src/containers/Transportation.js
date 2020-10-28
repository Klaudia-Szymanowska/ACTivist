import React from 'react';
//import logo from './img/logo 1.png';
import { HashLink as Link } from "react-router-hash-link";
import './App.css';
import set from "./img/set.png";
import home2 from "./img/home2.png";

export const Transportation = () => {
    return (
      <body>

{/* changed navbar */}
<div>
        <Link to="/settings">
          <img
            class="column"
            src={set}
            style={{ width: "5%", float: "right" }}
            alt="set"
          />
        </Link>
        <div>
        <Link to="/home">
          <img
            class="column"
            src={home2}
            style={{ width: "5%", float: "left" }}
            alt="set"
          />
        </Link>
      </div>

      </div>

    <div className="text">
    <h3>Transportation</h3>
    <div><button id="challbutton">  

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label" for="defaultCheck1">
                Go cycling to work!<br/> <b id="challtext">Can save CO2: 160 kg/day</b>
            </label></div>  </button></div>


            <div><button id="challbutton">  
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label class="form-check-label" for="defaultCheck1">
            Car share!<br/> <b id="challtext">Can save CO2: 200 kg/day </b>
        </label>
      </div> </button></div>

      <div><button id="challbutton">
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label class="form-check-label" for="defaultCheck1">
            Public transport!<br/> <b id="challtext">Can save CO2: 250 kg/day </b>
        </label>
      </div></button></div>

      <div><button id="challbutton">  
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label class="form-check-label" for="defaultCheck1">
            Work from home!<br/><b id="challtext">Can save CO2: 300 kg/day </b>
        </label>
      </div></button></div>

      <div><button class="button2" style={{color: "#000000", fontSize: "220%"}}> Pledge </button></div>

    </div>  


      </body>
    );
  }