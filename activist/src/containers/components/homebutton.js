import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import home2 from "../img/home2.png";
import "./App.css";

export default class Homebutton extends Component {
  render() {
    return (
      <div>
        <Link to="/home">
          <div className="homebar">
            <img src={home2} alt="set" />
          </div>
        </Link>
      </div>
    );
  }
}
