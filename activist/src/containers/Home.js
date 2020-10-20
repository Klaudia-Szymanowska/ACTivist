import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./App.css";
import set from "./img/set.png";
import list from "./img/list.png";
import chall from "./img/chall.png";
import rew from "./img/rew.png";

export const Home = () => {
  return (
    <body>
      <div>
        <Link to="/settings">
          <img
            class="column"
            src={set}
            style={{ width: "10%", float: "right" }}
            alt="set"
          />
        </Link>
      </div>
      <div>
        <div className="container">
          <button className="circle">
            <h5>Your carbon savings are:</h5>
          </button>
        </div>
        <div>
          <div className="container2">
            <div>
              <Link to="/mychallenges">
                <button className="circleSmall">
                  <img src={list} alt="list" />
                </button>
              </Link>
            </div>
            <div>
              <Link to="/challenges">
                <button className="circleSmall">
                  <img src={chall} alt="chall" />
                </button>
              </Link>
            </div>
            <div>
              <button className="circleSmall">
                <img src={rew} alt="rew" />
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <button className="progressbox"></button>
        </div>
      </div>
    </body>
  );
};
