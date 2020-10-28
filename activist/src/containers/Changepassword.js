import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {HashLink as Link} from "react-router-hash-link";
import './App.css';
import "./Login.css";
import home2 from "./img/home2.png";
import set from "./img/set.png";

export function Changepassword() {
    const [currentpassword, enterPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [confirmpassword, confirmNewPassword] = useState("");

function handleSubmit(event) {
    event.preventDefault();
  }

  return(
    <body>
      <div id="navbuttons">
      <div>
          <Link to="/home">
            <button>
              <img
                class="column"
                src={home2}
                style={{ width: "100%" }}
                alt="home2"
              />
            </button>
          </Link>
        </div>
      <div>
          <Link to="/settings">
            <button>
              <img
                class="column"
                src={set}
                style={{ width: "100%", float: "right" }}
                alt="set"
              />
            </button>
          </Link>
        </div>
      </div>

    <div className = "Login"> 
    <form onSubmit={handleSubmit}>
    <FormGroup controlId="currentpassword" bsSize="large">
          <ControlLabel>Current password</ControlLabel>
          <FormControl
            autoFocus
            type="currentpassword"
            value={currentpassword}
            onChange={e => enterPassword(e.target.value)}
          />
        </FormGroup>

        <FormGroup controlId="newpassword" bsSize="large">
          <ControlLabel>New password</ControlLabel>
          <FormControl
            value={newpassword}
            onChange={e => setNewPassword(e.target.value)}
            type="newpassword"
          />
        </FormGroup>

        <FormGroup controlId="confirmpassword" bsSize="large">
          <ControlLabel>Confirm new password</ControlLabel>
          <FormControl
            value={confirmpassword}
            onChange={e => confirmNewPassword(e.target.value)}
            type="confirmpassword"
          />
        </FormGroup>    
        </form>
        </div> 

    <div><Link to="/"><button className="button2" > Submit and re-login </button></Link></div>
  </body>
    );
} 