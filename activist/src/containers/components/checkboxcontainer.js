import React, { Component } from "react";
import Checkbox from "./Checkbox";
import "../../App.css";

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

//const OPTIONS = ["No beef", "Go pescatarian!", "Go vegetarian!", "Go vegan!"];

//hardcoding the CO2
const OPTIONS = [
  {
    name: "No beef",
    id: 1,
    CO2: 50,
  },
  {
    name: "Go pescatarian!",
    id: 2,
    CO2: 100,
  },
  {
    name: "Go vegetarian!",
    id: 3,
    CO2: 150,
  },
  {
    name: "Go vegan!",
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

class CheckboxContainer extends Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false,
      }),
      {}
    ),
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
                  //onClick={handlePledge}
                >
                  Pledge
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckboxContainer;

/*import React from "react";
import PropTypes from "prop-types";
import checkboxes from "./checkboxes";
import Checkbox from "./Checkbox";

class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState((prevState) => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }));
  }

  render() {
    return (
      <React.Fragment>
        {checkboxes.map((item) => (
          <label key={item.key}>
            {item.name}
            <Checkbox
              name={item.name}
              checked={this.state.checkedItems.get(item.name)}
              onChange={this.handleChange}
            />
          </label>
        ))}
      </React.Fragment>
    );
  }
}

export default CheckboxContainer;
*/
