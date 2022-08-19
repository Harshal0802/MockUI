import React from 'react';
import {TiTick} from "react-icons/ti";
import "./Form.css";

const CongratulationPage = () => {
  return (
    <>
        <div className="congo-page">
            <div className="congo-logo"><TiTick /></div>
            <h1>Congratulations, Eren!</h1>
            <p>You have completed onboarding, you can start using the Eden!</p>
        </div>
    </>
  )
}

export default CongratulationPage;