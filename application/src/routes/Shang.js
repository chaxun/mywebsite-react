import React, { useState } from "react";

import classes from "./Shang.module.css";
import ShangBody from "../components/shangren/ShangBody";
import Panorama from "../components/shangren/Panorama";

import background from "../photos/rutgers.gif";

const Shang = () => {
  const [showPano, setShowPano] = useState(false);
  return (
    <div className={classes.container}>
      {showPano ? (
        <Panorama setShowPano={setShowPano} />
      ) : (
        <>
          <div className={classes.divPlanet}>
            <img src={background} alt="" />
          </div>
          <div className={classes.divContent}>
            <div className={classes.divContentInner}>
              <ShangBody setShowPano={setShowPano} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Shang;
