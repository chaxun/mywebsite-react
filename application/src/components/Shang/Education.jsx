import { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Education.module.css";
import FontIcon from "../UI/FontIcon/FontIcon";

const Education = () => {
  const navigate = useNavigate();
  const [isHoverPano, setIsHoverPano] = useState(false);
  const [isTears, setIsTears] = useState(false);
  const handleClick = () => {
    navigate("/shangren/rutgers");
  };
  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">
      <h2 className="w3-text-grey w3-padding-16">
        <FontIcon icon="fa-graduation-cap" className="font-icon-large" />
        Education
      </h2>

      <div className="w3-container">
        <h5 className="w3-opacity">
          <b>Rutgers University</b>
          <span
            onClick={handleClick}
            onMouseEnter={() => {
              setIsHoverPano(true);
            }}
            onMouseLeave={() => {
              setIsHoverPano(false);
            }}
          >
            <FontIcon
              icon="fa-panorama"
              pull="right"
              shake={isHoverPano}
              className={classes.panorama}
            />
          </span>
        </h5>
        <h6 className="w3-text-blue">
          <FontIcon icon="fa-calendar-days" />
          2019.09 - 2024.07
        </h6>
        <p>抱紧范德彪的大腿</p>
        <hr />
      </div>

      <div className="w3-container">
        <h5 className="w3-opacity">
          <b>Iowa Sate University</b>
        </h5>
        <h6 className="w3-text-blue">
          <FontIcon icon="fa-calendar-days" />
          2016.08 - 2019.08
        </h6>
        <p>
          Became <strong>THE</strong> Master. Who?
        </p>
        <hr />
      </div>

      <div className="w3-container">
        <h5 className="w3-opacity">
          <b>Gap Year</b>
        </h5>
        <h6 className="w3-text-blue">
          <FontIcon icon="fa-calendar-days" />
          2015.07 - 2016.07
        </h6>
        <p>
          A <strong>MISERABLE</strong> year without any offer from graduate
          schools
          <FontIcon
            icon={["far", "fa-face-grin-squint-tears"]}
            onClick={() => setIsTears(!isTears)}
            bounce={isTears}
            className={classes.tears}
          />
        </p>
        <hr />
      </div>

      <div className="w3-container">
        <h5 className="w3-opacity">
          <b>University of Science and Technology of China</b>
        </h5>
        <h6 className="w3-text-blue">
          <FontIcon icon="fa-calendar-days" />
          2011.08 - 2015.06
        </h6>
        <p>
          Proudly spent 4 years in the special class and ended as a bachelor of
          science
        </p>
      </div>

      <br />

    </div>
  );
};

export default Education;
