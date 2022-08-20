import React, { useState } from "react";

//Components
import PersonalInfo from "./personalInfo";
import WorkspaceInfo from "./workspaceInfo";
import OtherInfo from "./otherInfo";
import CongratulationPage from "./congratulationPage";
import PageStep from "./pageStep";

//CSS
import "./Form.css";

const Form = () => {
  const [page, setPage] = useState(0);
  const formTitle = [
    "Welcome: First things first...",
    "Let's set up a home for all your work",
    "How are you planning to use Eden?",
  ];

  const formSubTitle = [
    "You can always change them later",
    "You can always create another workspace later.",
    "We'll streamline your setup experience accordingly.",
  ];

  const pages = [1,2,3,4];

  const handlePage = () => {
    setPage((prev) => prev + 1)
  }

  const pageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo />;
    } else if (page === 1) {
      return <WorkspaceInfo />;
    } else if (page === 2) {
      return <OtherInfo />;
    } else {
      return <CongratulationPage />;
    }
  };

  return (
    <>
      <div className="main">
        <div className="main-logo">
          <img
            src="https://i.pinimg.com/originals/b2/41/3e/b2413e664934ffe7a992331179cdcf84.png"
            alt="logo"
            className="logo"
            style={{ color: "darkviolet" }}
          />
          <h1>Eden</h1>
        </div>
        <div className="form">
          <div className="progressbar">
            <PageStep steps={pages} page={page}/>
          </div>
          <div className="form-container">
            <div className="header">
              <h1>{formTitle[page]}</h1>
              <p>{formSubTitle[page]}</p>
            </div>
            <div className="body">{pageDisplay()}</div>
            <div className="footer">
              <button
                disabled={page === formTitle.length}
                onClick={handlePage}
                className="btn"
              >
                {page === 3 ? "Launch Eden!" : "Create Workspace"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
