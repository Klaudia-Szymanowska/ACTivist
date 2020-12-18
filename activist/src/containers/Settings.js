import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "firebase/auth";
import firebase from "firebase/app";
import Popup from "./components/Popup";
import Homebutton from "./components/homebutton";

export const Settings = () => {
  // Initialize the popup window
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const user = firebase.auth().currentUser;
  let name;
  let email;
  //let photoUrl;

  // photoUrl are seemingly correctly retrieved, but I am not sure how to display a url af a file at the moment - to-do
  if (user != null) {
    name = user.displayName;
    email = user.email;
    //photoUrl = user.photoURL;
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
        console.log(error);
        // var errorCode = error.code;
        // var errorMessage = error.message;
      });
  }

  function handleDelete(event) {
    user
      .delete()
      .then(function () {
        // Delete successful
        localStorage.clear();
        console.log("Account deleted!");
      })
      .catch(function (error) {
        console.log(error);
        // var errorCode = error.code;
        // var errorMessage = error.message;
      });
  }

  return (
    <main>
      <div>
        <Link to="/home">
          <Homebutton />
        </Link>
      </div>

      <div className="text">
        <h3>
          {name} {/* {nameFirestore} */}{" "}
        </h3>
        <h4>{email}</h4>
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

        {/* Once click on the delete account button, trigger the popup window asking for confirmation*/}
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
