import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Card, Grid2, Typography } from "@mui/material";

import classes from "./Portfolio.module.css";
import gwen from "../../photos/gifs/gwen.gif";
import gwen1 from "../../photos/gifs/gwen1.gif";
import gwen2 from "../../photos/gifs/gwen2.gif";

const Portfolio = (props) => {
  const data = props.data;
  const [width, setWidth] = useState(window.innerWidth);
  const breakwidth = 800;

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [gif, setGif] = useState(gwen);
  useEffect(() => {
    setGif(gwen1);
    setTimeout(() => {
      setGif(gwen);
    }, 0);
  }, []);

  return (
    <Grid2 container direction="column" spacing={width > breakwidth ? 8 : 4}>
      <Grid2>
        <Card className={classes.card} sx={{ boxShadow: 3 }}>
          <Grid2 container direction={width > breakwidth ? "row" : "column"}>
            <Grid2 size={width > breakwidth ? 4 : "grow"}>
              <img
                className={classes.gif}
                src={gif}
                alt="Gwen"
                onMouseOver={() => {
                  setGif(gwen2);
                }}
                onMouseOut={() => {
                  setGif(gwen1);
                }}
              />
            </Grid2>
            <Grid2 size={width > breakwidth ? 8 : "grow"}>
              <Box className={classes.box}>
                <Typography variant="h4" gutterBottom>
                  {data.name}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {data.position}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {data.company}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {data.experience}
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
        </Card>
      </Grid2>

      <Grid2 marginBottom={2}>
        <Grid2
          container
          direction={width > breakwidth ? "row" : "column"}
          spacing={width > breakwidth ? 2 : 0}
        >
          <Grid2 size="grow">
            <Card
              onClick={props.toggleOnSelectEducation}
              className={classes.smallCard}
              sx={{ boxShadow: 3 }}
            >
              <FontAwesomeIcon
                icon="fa-graduation-cap"
                style={{ marginRight: "5px" }}
              />
              {data.education}
            </Card>
          </Grid2>
          <Grid2 size="grow">
            <Card
              onClick={props.toggleOnSelectGitHub}
              className={classes.smallCard}
              sx={{ boxShadow: 3 }}
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                style={{ marginRight: "5px" }}
              />
              GitHub
            </Card>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Portfolio;
