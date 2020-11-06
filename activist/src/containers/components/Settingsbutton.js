import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import set from "../img/set.png";

export default class Settingbutton extends Component {
  render() {
    return (
      <div>
        <Link to="/settings">
          <button className="button3">
            <img
              class="column"
              src={set}
              style={{ width: "100%", float: "right" }}
              alt="set"
            />
          </button>
        </Link>
      </div>
    );
  }
}
