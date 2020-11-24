import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import set from "../img/set.png";

export default class Settingbutton extends Component {
  render() {
    return (
      <div>
        <Link to="/settings">
          <div className="settbar">
            <img src={set} alt="set" />
          </div>
        </Link>
      </div>
    );
  }
}
