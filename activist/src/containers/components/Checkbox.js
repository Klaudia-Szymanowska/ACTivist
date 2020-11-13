import React from "react";

const Checkbox = ({ label1, label2, isSelected, onCheckboxChange }) => (
  <button className="center" style={{ fontSize: "220%", textAlign: "left" }}>
    <div className="form-check">
      <label>
        <input
          type="checkbox"
          name={label1}
          CO2={label2}
          checked={isSelected}
          onChange={onCheckboxChange}
          className="form-check-input"
        />
        {label1}
        <br />
        <b style={{ color: "#000000", fontSize: "75%", float: "left" }}>
          {label2} kg saved CO2 per day{" "}
        </b>
      </label>
    </div>
  </button>
);

export default Checkbox;
