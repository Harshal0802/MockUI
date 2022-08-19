import React from "react";
import "./Form.css";

const SelectBox = (props) => {
  return (
    <>
      <div className="logo-page-3">{props.logo}</div>
      <h4>{props.name}</h4>
      <p>{props.substring}</p>
    </>
  );
};

export default SelectBox;
