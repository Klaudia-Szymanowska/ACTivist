import React from 'react';
import {HashLink as Link} from "react-router-hash-link";
import './App.css';

import home2 from "./img/home2.png";

export const Settings = () => {
    return(

      <body> {/*added id and changed style*/}
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

    
    <div className='text'>
        <button id= "notifications" style={{ fontSize: "150%" }}>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              /> 
              
            <label class="form-check-label" for="defaultCheck1">
                Notifications
                <br />
              </label>
             
            </div>{" "}
        </button>

      <div> <Link to ='/account'><button className="button2" > My account </button></Link></div>
      <div> <Link to ='/'><button  className="button2" > Delete account </button></Link></div>
      <div> <Link to ='/'><button  className="button2" > Log out </button></Link></div>

    </div>
  </body>
  );
}
