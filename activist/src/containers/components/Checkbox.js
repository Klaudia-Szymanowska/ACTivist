import React from "react";

const Checkbox = ({ label1, label2, isSelected, onCheckboxChange }) => (
  <button style={{ fontSize: "220%", textAlign: "left" }}>
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

/*import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => (
  <input type={type} name={name} checked={checked} onChange={onChange} />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
*/
