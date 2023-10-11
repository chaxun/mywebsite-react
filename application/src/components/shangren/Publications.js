import React, { useState, useEffect } from "react";
import axios from "axios";

import FontIcon from "../UI/FontIcon/FontIcon";
import Paper from "../UI/Paper/Paper";

export default function Publications() {
  const [data, setData] = useState([]);
  const getPubs = async () => {
    const res = await axios.get(
      "https://api.chaxuniverse.com/publication/get_all"
    );
    setData(res.data.sort((a, b) => (a.id > b.id ? 1 : -1)));
  };
  useEffect(() => {
    getPubs();
  }, []);

  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">
      <h2 className="w3-text-grey w3-padding-16">
        <FontIcon icon="fa-pencil" className="font-icon-large" />
        Publications
      </h2>
      <div className="w3-container">
        <ol>
          {data.map((item) => (
            <Paper
              key={item.id}
              id={item.id}
              name={item.name}
              author={item.author}
              journal={item.journal}
              href={item.href}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}
