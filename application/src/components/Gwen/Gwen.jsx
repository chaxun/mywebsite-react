import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Typography,
  alpha,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import classes from "./Gwen.module.css";

import a1 from "../../photos/a1.jpg";
import a2 from "../../photos/a2.jpg";
import a3 from "../../photos/a3.jpg";
import a4 from "../../photos/a4.jpg";
import a5 from "../../photos/a5.jpg";
import a6 from "../../photos/a6.jpg";
import b1 from "../../photos/b1.jpg";
import b2 from "../../photos/b2.jpg";
import b3 from "../../photos/b3.jpg";
import b4 from "../../photos/b4.jpg";
import b5 from "../../photos/b5.jpg";
import b6 from "../../photos/b6.jpg";
import c1 from "../../photos/c1.jpg";
import c2 from "../../photos/c2.jpg";
import c3 from "../../photos/c3.jpg";
import c4 from "../../photos/c4.jpg";
import c5 from "../../photos/c5.jpg";

const yellow = "#ffffe0";
const black = "#000000";
const defaultTheme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Righteous"],
  },
  palette: {
    yellow: {
      light: alpha(yellow, 0.3),
    },
    text: {
      light: alpha(black, 0.6),
    },
  },
});

const Gwen = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "yellow.light", pt: 8, pb: 6 }}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.light"
            fontFamily="Righteous"
            gutterBottom
          >
            <b>Gwen</b>
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="text.light"
            fontFamily="Roboto"
            paragraph
          >
            <b>格猫的日常</b>
          </Typography>
        </Container>
      </Box>
      <Box sx={{ bgcolor: "yellow.light" }}>
        <Container maxWidth="xl" style={{ paddingBottom: "100px" }}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs className={classes.column}>
              <img src={a1} />
              <img src={a2} />
              <img src={a3} />
              <img src={a4} />
              <img src={a5} />
              <img src={a6} />
            </Grid>
            <Grid item xs className={classes.column}>
              <img src={b1} />
              <img src={b2} />
              <img src={b3} />
              <img src={b4} />
              <img src={b5} />
              <img src={b6} />
            </Grid>
            <Grid item xs className={classes.column}>
              <img src={c1} />
              <img src={c2} />
              <img src={c3} />
              <img src={c4} />
              <img src={c5} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Gwen;
