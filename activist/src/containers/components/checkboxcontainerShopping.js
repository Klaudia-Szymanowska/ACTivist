import React, { Component } from "react";
import Checkbox from "./Checkbox";
import "../../App.css";
import Popup from './Popup';

//Import to make firebase work
/*
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firebaseAppAuth, database } from "./firebase";
*/

//import {db} from './src/config';
/*
componentDidMount() {
  db.ref('/todos').on('value', querySnapShot => {
    let data = querySnapShot.val() ? querySnapShot.val() : {};
    let todoItems = {...data};
    this.setState({
      todos: todoItems,
    });
  });
}
*/

//hardcoding the CO2
const OPTIONS = [
  {
    name: "Buy Eco products",
    id: 1,
    CO2: 50,
  },
  {
    name: "Go package free",
    id: 2,
    CO2: 100,
  },
  {
    name: "No plastic bags",
    id: 3,
    CO2: 150,
  },
  {
    name: "Buy from local suppliers",
    id: 4,
    CO2: 200,
  },
];

//data base
/*
const COLLECTION = "Challenges"

const addData = (id, CO2) => {
  const id = id();
  database
    .collection(COLLECTION)
    .add({
      id: id,
      CO2: CO2,
      timestamp_start: today
      timestand_stop: empty
      savedCO2: none
    })
    .then((newDocument) => {
      // This will run if adding data was successful
      console.log("New document created with ID: ", newDocument.id);
    })
    .catch((error) => {
      // If saving data failed, this will run and we will log an error to the console.
      // Here you should give a message to users as well!
      console.error(error.message);
    });
};
*/

class CheckboxContainerShopping extends Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false,
      }),
      {}
    ),
    isOpen: false
  };

  togglePopup = () => {
    this.setState({isOpen: !this.state.isOpen})
  };

  handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;

    this.setState((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };

  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter((checkbox) => this.state.checkboxes[checkbox])
      .forEach((checkbox) => {
        console.log(checkbox, "is selected.");
      });
  };

  //Add data to firebase:
  /*
  handlePledge = () => {
    addData(options.id, options.CO2);
  };
  */

  createCheckbox = (option) => (
    <Checkbox
      label1={option.name}
      label2={option.CO2}
      isSelected={this.state.checkboxes[option.id]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <div>
          <div>
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}
              <div className="form-group mt-2">
                <button
                  type="submit"
                  className="button4"
                  onClick={this.togglePopup}
                  //onClick={handlePledge}
                >
                  Pledge
                </button>
                {this.state.isOpen && <Popup
                  content={<>
                    <b>Congratulations!</b>
                    <p>Your pledge has been successfully registered!</p>
                  </>}
                  handleClose={this.togglePopup}
                  />} 
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckboxContainerShopping;