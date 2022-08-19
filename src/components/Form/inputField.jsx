import React from "react";
import "./Form.css";

const InputField = (props) => {
  return (
    <>
      <div className="inputFields">
        <label htmlFor="input-field" className="input-name">{props.name}</label>
        <br /><br />
        <input type={props.type} className="input-field" placeholder={props.placeholder}/>
        <br /><br />
      </div>
    </>
  );
};

export default InputField;
