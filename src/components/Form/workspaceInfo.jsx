import React from "react";
import InputField from "./inputField.jsx";

const WorkspaceInfo = () => {
  return (
    <>
      <InputField name="Workspace Name" type="text" placeholder="Eden" />
      <InputField name="Workspace URL(optional)" type="url" placeholder="www.Eden.com/"/>
    </>
  );
};

export default WorkspaceInfo;
