import { Outlet, Link } from "react-router-dom";
import { Box, Container, CssBaseline, Grid, alpha } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import classes from "./Main.module.css";

const green = "#7cfc00";
const orange = "#ff8c00";
const defaultTheme = createTheme({
  palette: {
    green: {
      light: alpha(green, 0.1),
    },
    orange: {
      light: alpha(orange, 0.1),
    },
    text: {
      primary: orange,
    },
  },
});

const Main = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Box sx={{ bgcolor: "green.light" }} className={classes.outer}>
          <Container maxWidth="md">
            <Grid
              container
              direction="column"
              className={`font-effect-fire-animation ${classes.grid}`}
            >
              <Grid item xs>
                <Container>
                  <Link to="/me">Me</Link>
                </Container>
              </Grid>
              <Grid item xs>
                <Container>
                  <Link to="/gwen">My Cat</Link>
                </Container>
              </Grid>
              <Grid item xs>
                <Container>
                  <Link to="/shangren">My Roommate</Link>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>

      <Outlet />
    </>
  );
};

export default Main;
