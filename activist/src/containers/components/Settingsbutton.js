import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import set from "../img/set.png";

export default class Settingbutton extends Component {
  render() {
    return (
      <div>
        <Link to="/settings">
          <img
            className="column"
            src={set}
            style={{ width: "5%", float: "right" }}
            alt="set"
          />
        </Link>
      </div>
    );
  }
}
