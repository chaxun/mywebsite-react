import { useState } from "react";

import classes from "./Education.module.css";
import FontIcon from "../UI/FontIcon/FontIcon";

const Employment = () => {
  const [isTears, setIsTears] = useState(false);
  
  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">
      <h2 className="w3-text-grey w3-padding-16">
        <FontIcon icon="fa-building" className="font-icon-large" />
        Employment
      </h2>

      <div className="w3-container">
        <h5 className="w3-opacity">
          <b>Lawrence Berkeley National Laboratory</b>
        </h5>
        <h6 className="w3-text-blue">
          <FontIcon icon="fa-calendar-days" />
          2024.08 - current
        </h6>
        <p>
          请叫我Dr. Ren 
          <FontIcon
            icon={["far", "fa-hand-peace"]}
            onClick={() => setIsTears(!isTears)}
            shake={isTears}
            className={classes.tears}
          />
        </p>
        <hr />
      </div>
      
      <br />

    </div>
  );
};

export default Employment;
