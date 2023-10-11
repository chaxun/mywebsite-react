import React, { useState, useEffect } from "react";
import axios from "axios";

import classes from "./ResumePDF.module.css";

const ResumePDF = () => {
  const [cv, setCv] = useState(null);

  const readCv = async () => {
    const res = await axios.get("https://api.chaxuniverse.com/cv/get", {
      headers: { Accept: "application/octet-stream" },
    }).catch((error) => console.log(error));
    setCv("data:application/pdf;headers=filename%3Dcv.pdf;base64,"+res.data);
  };

  useEffect(() => {
    readCv();
  }, []);

  return (
    <object data={cv} type="application/pdf" className={classes.pdf}>
      <div>cv.pdf is not available. Either re-upload it or check if there is something wrong.</div>
    </object>
  );
};

export default ResumePDF;
