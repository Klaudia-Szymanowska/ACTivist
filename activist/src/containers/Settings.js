import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './App.css';
import Switch from "./Switch"

import home2 from "./img/home2.png";

 export const Settings = () => {
    const [value, setValue] = useState(false);
    return(
        <main> 
          {/*to be changed by Louise as a component */}

       {/*added id and changed style*/}
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
        <button id= "notifications" style={{ fontSize: "200%" }}>
        {/* <div class="form-check">
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
             
            </div> */}
          <Switch
            isOn = {value}
            handleToggle={() => setValue(!value)}
            />
            <h6 id= "textswitch">Notifications</h6>{" "}
          </button>
        </div>

    <div className="text">
    <div>
      <Link to ='/account'>
        <button className="button2" > 
          {" "}My account{" "} 
      </button>
    </Link>
  </div>
    
    <div> 
      <Link to ='/'>
        <button  className="button2" > 
            {" "}Delete account{" "}
            </button>
          </Link>
        </div>
    
    <div> 
      <Link to ='/'>
        <button  className="button2" > 
            {" "}Log out{" "}
            </button>
          </Link>
        </div>
    </div>
  </main>
    );
};
