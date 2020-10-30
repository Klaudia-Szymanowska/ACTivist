import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import set from "../img/home2.png";

export default class Homebutton extends Component {
  render() {
    return (
      <div>
        <Link to="/home">
          <button className="button3">
            <img
              class="column"
              src={set}
              style={{ width: "100%", float: "left" }}
              alt="home2"
            />
          </button>
        </Link>
      </div>
    );
  }
}
