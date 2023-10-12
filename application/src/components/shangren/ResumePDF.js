import React, { useState, useEffect } from "react";
import axios from "axios";

import classes from "./ResumePDF.module.css";

const ResumePDF = () => {
  const [cv, setCv] = useState(null);

  const readCv = async () => {
    const res = await axios
      .get("https://api.chaxuniverse.com/cv/get", {
        headers: { Accept: "application/octet-stream" },
      })
      .catch((error) => console.log(error));
    setCv("data:application/pdf;headers=filename%3Dcv.pdf;base64," + res.data);
  };

  useEffect(() => {
    readCv();
  }, []);

  return <iframe title="cv" src={cv} className={classes.pdf} />;
};

export default ResumePDF;
