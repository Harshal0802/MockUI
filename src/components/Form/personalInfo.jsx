import React from "react";
import InputField from "./inputField.jsx";

const PersonalInfo = () => {
  return (
    <>
      <InputField name="Full Name" type="text" placeholder="Steve Jobs"/>
      <InputField name="Display Name" type="text" placeholder="Steve"/>
    </>
  );
};

export default PersonalInfo;
