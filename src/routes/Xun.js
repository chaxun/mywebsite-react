import { useEffect, useState } from "react";
import axios from "axios";

import classes from "./Xun.module.css";
import Education from "../components/me/Education";
import GitHub from "../components/me/GitHub";
import Toggle from "../components/UI/Toggle/Toggle";
import Card from "../components/UI/Card/Card";
import Button from "../components/UI/Button/Button";

import Json1 from "../components/me/wo.json";
import Json2 from "../components/me/me.json";
import photo from "../gifs/gwen.gif";

const Xun = () => {
  const [lanToggle, setLanToggle] = useState(true);
  const [data, setData] = useState(Json1);
  const toggleOnClick = () => {
    if (lanToggle) {
      setLanToggle(false);
      setData(Json2);
    } else {
      setLanToggle(true);
      setData(Json1);
    }
  };

  const [country, setCountry] = useState("");
  // const [ip, setIP] = useState("");
  // const [date, setDate] = useState("");
  const getData = async () => {
    const res = await axios.get("https://api.country.is");
    // const resDate = await axios.get("https://api.country.is/version")
    setCountry(res.data.country);
    // setIP(res.data.ip)
    // setDate(resDate.data.updatedOn)
  };
  useEffect(() => {
    getData();
    if (country === "US") {
      setLanToggle(false);
      setData(Json2);
    }
  }, [country]);


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
                <img className={classes.animatedGif} src={photo} alt="Gwen" />
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
                {data.education}
              </Button>
            </div>
            <div className="w3-half">
              <Button onClick={toggleOnSelectGitHub}>GitHub</Button>
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
        {lanToggle ? (
          <>
            <div className="w3-half">
              <div className="w3-container" style={{ color: "white" }}>
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
