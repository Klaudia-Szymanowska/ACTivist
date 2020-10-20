import React from 'react';
//import logo from './img/logo 1.png';
import './App.css';
import set from "./img/set.png";
import home2 from "./img/home2.png";

export const MyChallenges = () => {
    return (
      <body>
 {/* 2 page*/ }

 <div>
        <img class="column" src={home2} style={{width: "10%"}} alt="home2"/>
    </div>

    <div>
        <img class="column" src={set} style={{width: "10%", float: "right"}} alt="set"/>
    </div>

    <div className="text">
    <h3>My challenges </h3>
    <div><button style={{fontSize: "220%", textAlign: "left"}}>  

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label" for="defaultCheck1">
                No beef!<br/> <b style= {{color: "#000000", fontSize: "75%", float: "left"}}>Can save CO2: 160 kg/day</b>
            </label></div>  </button></div>


            <div><button style={{fontSize: "220%", textAlign: "left"}}>  
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label class="form-check-label" for="defaultCheck1">
            Go cycling to work<br/> <b style={{color: "#000000", fontSize: "75%", float: "left"}}>Can save CO2: 200 kg/day </b>
        </label>
      </div> </button></div>

      <div><button style={{fontSize: "220%", textAlign: "left"}}>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label class="form-check-label" for="defaultCheck1">
            Turn off  lights<br/> <b style={{color: "#000000", fontSize: "75%", float: "left"}}>Can save CO2: 120 kg/day </b>
        </label>
      </div></button></div>

      <div><button style={{fontSize: "220%", textAlign: "left"}}>  
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label class="form-check-label" for="defaultCheck1">
            Use reusable bags<br/><b style={{color: "#000000", fontSize: "75%", float: "left"}}>Can save CO2: 140 kg/day </b>
        </label>
      </div></button></div>

      <div><button class="button2" style={{color: "#000000", fontSize: "220%"}}> Delete </button></div>

    </div>  


      </body>
    );
  }
  