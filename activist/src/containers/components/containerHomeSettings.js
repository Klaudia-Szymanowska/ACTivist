import React, { Component } from "react";
import Settingbutton from "./Settingsbutton";
import Homebutton from "./homebutton";
import "../../App.css";

export default class ContainerHomeSettings extends Component {
  render() {
    return (
      <div>
        <div id="navbuttons">
          <Settingbutton />
          <Homebutton />
        </div>
      </div>
    );
  }
}
