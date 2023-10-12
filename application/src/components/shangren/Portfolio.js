import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Portfolio.module.css";
import FontIcon from "../UI/FontIcon/FontIcon";
import shang1 from "../../photos/shang.jpg";

export default function Portolio() {
  const navigate = useNavigate();

  const breakpoint = 1200;
  const [width, setWidth] = useState(window.innerWidth);
  const [cvUrl, setCvUrl] = useState(null);

  const readCvUrl = async () => {
    const res = await axios
      .get("https://api.chaxuniverse.com/cv/get", {
        headers: { Accept: "application/octet-stream" },
      })
      .catch((error) => console.log(error));
    const bytes = atob(res.data);
    let length = bytes.length;
    let out = new Uint8Array(length);
    while (length--) {
      out[length] = bytes.charCodeAt(length);
    }
    let blob = new Blob([out], { type: "application/pdf" });
    let fileURL = window.URL.createObjectURL(blob);
    setCvUrl(fileURL);
  };

  useEffect(() => {
    if (width < breakpoint) {
      readCvUrl();
    }
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [width]);

  const handleClick = () => {
    navigate("/shangren/cv");
  };

  const [isBaby, setIsBaby] = useState(false);
  const [isNie, setIsNie] = useState(false);
  const [isPangFan, setIsPangFan] = useState(false);
  const [isPangCafe, setIsPangCafe] = useState(false);
  return (
    <div className="w3-white w3-text-grey w3-card-4">
      <div className="w3-display-container">
        <img style={{ width: "100%" }} src={shang1} alt="Shang" />
        <div className="w3-display-bottomleft w3-container">
          <h2 style={{ color: "white" }}>Shang Ren</h2>
        </div>
      </div>
      <div className="w3-container">
        <p>
          <FontIcon
            icon="fa-baby"
            onClick={() => {
              setIsBaby(!isBaby);
            }}
            shake={isBaby}
          />
          PhD Candidate in Physics
        </p>
        <p>
          <FontIcon icon="fa-house" />
          New Jersey, USA
        </p>
        <p>
          <FontIcon icon="fa-envelope" />
          <a
            href="mailto:shangren@physics.rutgers.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            shangren@physics.rutgers.edu
          </a>
        </p>
        <hr />

        <p className="w3-large w3-text-theme">
          <b>
            <FontIcon icon="fa-gears" />
            Skills
          </b>
        </p>
        <p>
          Physics
          <FontAwesomeIcon
            icon="fa-hand-lizard"
            onClick={() => {
              setIsNie(!isNie);
            }}
            spinPulse={isNie}
            className={classes.nie}
          />
        </p>
        <div className="w3-light-grey w3-round-xlarge">
          <div
            className="w3-round-xlarge w3-blue"
            style={{ height: "24px", width: "10%" }}
          />
        </div>
        <p>
          Eating
          <FontAwesomeIcon
            icon="fa-bowl-rice"
            onClick={() => {
              setIsPangCafe(!isPangCafe);
            }}
            bounce={isPangFan}
            className={classes.pang}
          />
          <FontAwesomeIcon
            icon="fa-mug-hot"
            onClick={() => {
              setIsPangFan(!isPangFan);
            }}
            bounce={isPangCafe}
            className={classes.pang}
          />
        </p>
        <div className="w3-light-grey w3-round-xlarge">
          <div
            className="w3-round-xlarge w3-blue"
            style={{ height: "24px", width: "90%" }}
          />
        </div>
        <br />

        <p className="w3-large w3-text-theme">
          <b>
            <FontIcon icon="fa-earth-asia" />
            Languages
          </b>
        </p>
        <p>Chinese</p>
        <div className="w3-light-grey w3-round-xlarge">
          <div
            className="w3-round-xlarge w3-blue"
            style={{ height: "24px", width: "80%" }}
          />
        </div>
        <p>English</p>
        <div className="w3-light-grey w3-round-xlarge">
          <div
            className="w3-round-xlarge w3-blue"
            style={{ height: "24px", width: "20%" }}
          />
        </div>
        <hr />

        <p className="w3-large w3-text-theme">
          {width > breakpoint ? (
            <span className="hover" onClick={handleClick}>
              <b>
                <FontIcon icon="fa-eye" />
                View My CV
              </b>
            </span>
          ) : (
            <b>
              <FontIcon icon="fa-eye" />
              <a href={cvUrl} download="cv">
                Download My CV
              </a>
            </b>
          )}
        </p>
      </div>

      <hr />
    </div>
  );
}
