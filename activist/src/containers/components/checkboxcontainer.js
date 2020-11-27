import React, { Component } from "react";
import Checkbox from "./Checkbox";
import "./App.css";

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
                  className="button2"
                  id="pledge"
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
