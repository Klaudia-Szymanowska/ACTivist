import React, { useState }  from 'react';
//import logo from './img/logo 1.png';
import {Link} from "react-router-dom";
import './App.css';
import set from "./img/set.png";
import home2 from "./img/home2.png";
import Popup from './components/Popup';

export const Transportation = () => {

  const [isOpen, setIsOpen] = useState(false); 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
      <main>

{/*to be changed by Louise as a component */}
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
    <h3>Transportation</h3>
    <div><button id="challbutton">  

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label" htmlFor="defaultCheck1">
                Go cycling to work!<br/> <b id="challtext">Can save CO2: 160 kg/day</b>
            </label></div>  </button></div>


            <div><button id="challbutton">  
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
            Car share!<br/> <b id="challtext">Can save CO2: 200 kg/day </b>
        </label>
      </div> </button></div>

      <div><button id="challbutton">
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
            Public transport!<br/> <b id="challtext">Can save CO2: 250 kg/day </b>
        </label>
      </div></button></div>

      <div><button id="challbutton">  
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
            Work from home!<br/><b id="challtext">Can save CO2: 300 kg/day </b>
        </label>
      </div></button></div>

      {/* <button className="button2"> Pledge </button> */}
      <button className="button2" onClick={togglePopup}>
          {" "}
          Pledge{" "}
          </button>
          {isOpen && <Popup
          content={<>
            <b>Congratulations!</b>
            <p>Your pledge has been successfully registered!</p>
          </>}
          handleClose={togglePopup}
        />}

    </div>  


      </main>
    );
  }