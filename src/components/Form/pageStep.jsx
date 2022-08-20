import * as React from "react";
import {Box,Step,StepLabel,Stepper} from "@mui/material";
import "./Form.css";

const PageStep = (props)  => {
  return (
    <Box sx={{ width: "30%" }} className="step-box">
      <Stepper activeStep={props.page}>
        {props.steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel></StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}

export default PageStep;