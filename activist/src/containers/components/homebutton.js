import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import home2 from "../img/home2.png";
import "src/App.css";

export default class Homebutton extends Component {
  render() {
    return (
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
    );
  }
}
