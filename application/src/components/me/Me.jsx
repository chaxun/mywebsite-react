import React, { useState } from "react";
import { Box, Container, CssBaseline, Grid2, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import classes from "./Me.module.css";
import Portfolio from "./Portfolio";
import Education from "./Education";
import GitHub from "./GitHub";
import Footer from "./Footer";
import Toggle from "../UI/Toggle/Toggle";

const defaultTheme = createTheme({
  palette: {
    grey: {
      light: "#f1f1f1",
    },
  },
});

const Me = (props) => {
  const data = props.data;
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

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "grey.light" }} className={classes.outer}>
        <Container maxWidth="xxl" className={classes.header}>
          {pageToggle !== "main" ? (
            <Grid2 container sx={{ justifyContent: "space-between" }}>
              <Grid2>
                <Toggle className={classes.toggle} onClick={toggleOnSelectMain}>
                  {data.mainpage}
                </Toggle>
                <Toggle
                  className={classes.toggle}
                  disabled={pageToggle === "education"}
                  onClick={toggleOnSelectEducation}
                >
                  {data.education}
                </Toggle>
                <Toggle
                  className={classes.toggle}
                  disabled={pageToggle === "github"}
                  onClick={toggleOnSelectGitHub}
                >
                  {data.github}
                </Toggle>
              </Grid2>
              <Grid2>
                <Toggle className={classes.toggle} onClick={toggleOnClick}>
                  {data.language}
                </Toggle>
              </Grid2>
            </Grid2>
          ) : (
            <Grid2 container sx={{ justifyContent: "flex-end" }}>
              <Toggle className={classes.toggle} onClick={toggleOnClick}>
                {data.language}
              </Toggle>
            </Grid2>
          )}
        </Container>
        <Container maxWidth="md" className={classes.main}>
          {pageToggle === "main" && (
            <Portfolio
              data={data}
              toggleOnSelectEducation={toggleOnSelectEducation}
              toggleOnSelectGitHub={toggleOnSelectGitHub}
            />
          )}
          {pageToggle === "education" && <Education data={data.page1} />}
          {pageToggle === "github" && <GitHub data={data.page2} />}
        </Container>

        <Footer data={data} lanToggle={props.lanToggle} />
      </Box>
    </ThemeProvider>
  );
};

export default Me;
