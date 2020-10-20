import React from "react";
import { HashLink as Link } from "react-router-hash-link";
//import logo from './img/logo 1.png';
import "./App.css";
import set from "./img/set.png";
import home2 from "./img/home2.png";

export const MyChallenges = () => {
  return (
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

      <div className="text">
        <h3>Food</h3>
        <div>
          <button style={{ fontSize: "220%", textAlign: "left" }}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" for="defaultCheck1">
                No beef!
                <br />{" "}
                <b style={{ color: "#000000", fontSize: "75%", float: "left" }}>
                  Can save CO2: 160 kg/day
                </b>
              </label>
            </div>{" "}
          </button>
        </div>

        <div>
          <button style={{ fontSize: "220%", textAlign: "left" }}>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Go pescatarian!
                <br />{" "}
                <b style={{ color: "#000000", fontSize: "75%", float: "left" }}>
                  Can save CO2: 200 kg/day{" "}
                </b>
              </label>
            </div>{" "}
          </button>
        </div>

        <div>
          <button style={{ fontSize: "220%", textAlign: "left" }}>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Go vegetarian!
                <br />{" "}
                <b style={{ color: "#000000", fontSize: "75%", float: "left" }}>
                  Can save CO2: 250 kg/day{" "}
                </b>
              </label>
            </div>
          </button>
        </div>

        <div>
          <button style={{ fontSize: "220%", textAlign: "left" }}>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Go vegan!
                <br />
                <b style={{ color: "#000000", fontSize: "75%", float: "left" }}>
                  Can save CO2: 300 kg/day{" "}
                </b>
              </label>
            </div>
          </button>
        </div>

        <div>
          <button
            class="button2"
            style={{ color: "#000000", fontSize: "220%" }}
          >
            {" "}
            Pledge{" "}
          </button>
        </div>
      </div>
    </body>
  );
};
