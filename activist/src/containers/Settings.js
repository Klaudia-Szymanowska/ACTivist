import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Switch from "./components/Switch";
import "firebase/auth";
import firebase from "firebase/app";
import home2 from "./img/home2.png";
import Popup from "./components/Popup";
import { Login } from "./Login";
import Homebutton from "./components/homebutton";

export const Settings = () => {
  const [value, setValue] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const user = firebase.auth().currentUser;
  let name;
  let email;

  if (user != null) {
    name = user.displayName;
    email = user.email;
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
      });
  }

  function handleDelete(event) {
    user
      .delete()
      .then(function () {
        // Delete successful
        console.log("Account deleted!");
      })
      .catch(function (error) {
        // Handle Errors here.
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

  return (
    <main>
      {/*to be changed by Louise as a component */}

      {/*added id and changed style*/}
      <div>
        <Link to="/home">
          <Homebutton />
        </Link>
      </div>

      <div className="text">
        <h3>
          {name} {/* {nameFirestore} */}{" "}
        </h3>
        <h2>{email}</h2>
      </div>

      <div className="text">
        <div className="center2">
          <Link to="/changepassword">
            <button className="button2"> Change password</button>
          </Link>

          <Link to="/">
            <button className="button2" onClick={handleSignout}>
              {" "}
              Sign out{" "}
            </button>
          </Link>
        </div>

        <button className="button2" onClick={togglePopup}>
          Delete account
        </button>
        {isOpen && (
          <Popup
            content={
              <>
                <b>Warning!</b>
                <p>
                  Are you sure to cancel the account? Once the account is
                  cancelled, your information will be deleted immediately, and
                  the account can not be restored.
                </p>
                <Link to="/">
                  <button id="popup_button" onClick={handleDelete}>
                    Yes, I am sure to cancel my account
                  </button>
                </Link>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
    </main>
  );
};
