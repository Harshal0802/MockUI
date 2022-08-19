import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import SelectBox from "./selectBox";
import "./Form.css";

const OtherInfo = () => {
  const [selected, setSelected] = useState(true);
  return (
    <>
      {selected ? (
        <div className="boxes">
          <div className="select-box border-box">
            <SelectBox
              logo={<FaUserAlt />}
              name="For myself"
              substring="Write better.Think more clearly. Stay organized."
            />
          </div>

          <div className="select-box" onClick={() => setSelected(!selected)}>
            <SelectBox
              logo={<RiTeamFill />}
              name="With my team"
              substring={`Wikis, docs, tasks & projects, all in one place.`}
            />
          </div>
        </div>
      ) : (
        <div className="boxes">
          <div className="select-box" onClick={() => setSelected(!selected)}>
            <SelectBox
              logo={<FaUserAlt />}
              name="For myself"
              substring="Write better.Think more clearly. Stay organized."
            />
          </div>

          <div className="select-box border-box">
            <SelectBox
              logo={<RiTeamFill />}
              name="With my team"
              substring={`Wikis, docs, tasks & projects, all in one place.`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default OtherInfo;
