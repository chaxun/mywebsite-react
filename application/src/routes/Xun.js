import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Xun.module.css";
import Education from "../components/me/Education";
import GitHub from "../components/me/GitHub";
import Toggle from "../components/UI/Toggle/Toggle";
import Card from "../components/UI/Card/Card";
import Button from "../components/UI/Button/Button";

import gwen from "../gifs/gwen.gif";
import gwen1 from "../gifs/gwen1.gif";
import gwen2 from "../gifs/gwen2.gif";

const Xun = (props) => {
  const data = props.data;
  const lanToggle = props.lanToggle;
  const toggleOnClick = props.toggleOnClick;

  const [pageToggle, setPageToggle] = useState("main");
  const toggleOnSelectMain = () => {
    setPageToggle("main");
  };
  const toggleOnSelectEducation = () => {
    setPageToggle("education");
  };
  const toggleOnSelectGitHub = () => {
    setPageToggle("github");
  };

  const [gif, setGif] = useState(gwen);
  const reloadGif = () => {
    setGif(gwen1);
    setTimeout(() => {
      setGif(gwen);
    }, 0);
  };
  useEffect(() => {
    reloadGif();
  }, []);

  return (
    <div className={classes.divBackground}>
      <div className={classes.divFrame}>
        {pageToggle !== "main" ? (
          <>
            <Toggle className={classes.alignLeft} onClick={toggleOnSelectMain}>
              {data.mainpage}
            </Toggle>
            <Toggle
              className={classes.alignLeft}
              disabled={pageToggle === "education" ? true : false}
              onClick={toggleOnSelectEducation}
            >
              {data.education}
            </Toggle>
            <Toggle
              className={classes.alignLeft}
              disabled={pageToggle === "github" ? true : false}
              onClick={toggleOnSelectGitHub}
            >
              {data.github}
            </Toggle>
          </>
        ) : null}
        <Toggle className={classes.alignRight} onClick={toggleOnClick}>
          {data.language}
        </Toggle>
      </div>

      {pageToggle === "main" ? (
        <div className="w3-content">
          <Card>
            <div className="w3-container">
              <div className="w3-third">
                <div className={classes.gif}>
                  <img
                    className={classes.animatedGif}
                    src={gif}
                    alt="Gwen"
                    onMouseOver={() => {
                      setGif(gwen2);
                    }}
                    onMouseOut={() => {
                      setGif(gwen1);
                    }}
                  />
                </div>
              </div>
              <div className="w3-twothird" style={{ padding: "10px" }}>
                <p style={{ fontSize: "30px" }}>{data.name}</p>
                <p>{data.position}</p>
                <p>{data.company}</p>
                <p>{data.experience}</p>
              </div>
            </div>
          </Card>

          <div className="w3-container">
            <div className="w3-half">
              <Button onClick={toggleOnSelectEducation}>
                <FontAwesomeIcon
                  icon="fa-graduation-cap"
                  style={{ marginRight: "5px" }}
                />

                {data.education}
              </Button>
            </div>
            <div className="w3-half">
              <Button onClick={toggleOnSelectGitHub}>
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  style={{ marginRight: "5px" }}
                />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      ) : null}
      {pageToggle === "education" ? <Education data={data.page1} /> : null}
      {pageToggle === "github" ? <GitHub data={data.page2} /> : null}

      <footer
        className="w3-container w3-light-green w3-center"
        style={{ padding: "5px" }}
      >
        {lanToggle === 1 ? (
          <>
            <div className="w3-half">
              <div className="w3-container" style={{ color: "white" }}>
                <FontAwesomeIcon
                  icon="fa-envelope"
                  style={{ marginRight: "5px" }}
                />

                {data.email}
                <a
                  className={classes.hover}
                  href="mailto:chaxuniverse@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  chaxuniverse@gmail.com
                </a>
              </div>
            </div>
            <div className="w3-half">
              <div className="w3-container" style={{ color: "white" }}>
                <FontAwesomeIcon
                  icon={["fab", "bilibili"]}
                  style={{ marginRight: "5px" }}
                />
                {data.bilibili}
                <a
                  className={classes.hover}
                  href="https://space.bilibili.com/447241521"
                >
                  lalala2046
                </a>
              </div>
            </div>
          </>
        ) : (
          <div className="w3-container" style={{ color: "white" }}>
            <FontAwesomeIcon
              icon="fa-envelope"
              style={{ marginRight: "5px" }}
            />
            {data.email}
            <a
              className={classes.hover}
              href="mailto:chaxuniverse@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              chaxuniverse@gmail.com
            </a>
          </div>
        )}
      </footer>
    </div>
  );
};

export default Xun;
