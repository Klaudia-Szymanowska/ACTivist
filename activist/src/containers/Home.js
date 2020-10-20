import React from "react";
import "./App.css";
import set from "./img/set.png";
import list from "./img/list.png";
import chall from "./img/chall.png";
import rew from "./img/rew.png";

export const Home = () => {
  return (
    <body>
      <div>
        <img
          class="column"
          src={set}
          style={{ width: "10%", float: "right" }}
          alt="set"
        />
      </div>
      <div>
        <div>
          <div className="container">
            <button className="circle">
              <h5>Your carbon savings are:</h5>
            </button>
          </div>
          <div>
            <div className="container2">
              <div>
                <button className="circleSmall">
                  <img src={list} alt="list" />
                </button>
              </div>
              <div>
                <button className="circleSmall">
                  <img src={chall} alt="chall" />
                </button>
              </div>
              <div>
                <button className="circleSmall">
                  <img src={rew} alt="rew" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <button className="progressbox">
            <h6>follow your progress - under construction</h6>
          </button>
        </div>
      </div>
    </body>
  );
};
