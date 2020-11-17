import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Switch from "./components/Switch";
import "firebase/auth";
import firebase from "firebase/app";
import home2 from "./img/home2.png";
import Popup from './components/Popup';
import { Login } from "./Login";

export const Settings = () => {
  const [value, setValue] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  function handleSignout(event) {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful
        console.log("User Signed Out!");
      })
      .catch(function (error) {
        // Handle Errors here.
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }

  return (
    <main>
      {/*to be changed by Louise as a component */}

      {/*added id and changed style*/}
      <div>
        <Link to="/home">
          <img
            class="column"
            src={home2}
            style={{ width: "5%", float: "left" }}
            alt="set"
          />
        </Link>
      </div>

      <div className="text">
        <button id="notifications" style={{ fontSize: "200%" }}>
          <Switch isOn={value} handleToggle={() => setValue(!value)} />
          <h6 id="textswitch">Notifications </h6>{" "}
        </button>
      </div>

      <div className="text">
        <div className="center2">
          <Link to="/account">
            <button className="button2"> My account </button>
          </Link>

          <Link to="/">
            <button className="button2" onClick={handleSignout}>
              {" "}
              Sign out{" "}
            </button>
          </Link>
        </div>

        <button className="button2" onClick={togglePopup}>Delete account</button>
          {isOpen && <Popup
          content={<>
            <b>Warning!</b>
            <p>Are you sure to cancel the account? Once the account is cancelled, your information will be deleted immediately, and the account can not be restored.</p>
            <Link to="/"><button id="popup_button">Yes, I am sure to cancel my account</button></Link>
          </>}
          handleClose={togglePopup}
          />}
      </div>


    </main>
  );
};
