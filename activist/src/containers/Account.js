import React, { useState } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {HashLink as Link} from "react-router-hash-link";
import './App.css';
import "./Login.css";
import home2 from "./img/home2.png";
import set from "./img/set.png";

export function Account() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  function validateForm() {
    return username.length > 0 && name.length > 0 && email.length > 0;
  }
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
    <FormGroup controlId="username" bsSize="large">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            autoFocus
            type="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>

        <FormGroup controlId="name" bsSize="large">
          <ControlLabel>Name</ControlLabel>
          <FormControl
            value={name}
            onChange={e => setName(e.target.value)}
            type="name"
          />
        </FormGroup>

        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
          />
        </FormGroup>    
        </form>
        </div> 

    <div><Link to="/changepassword"><button className="button2" > Change password </button></Link></div>
    </body>
    );
} 