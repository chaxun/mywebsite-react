import { useState } from "react";
import {
  Box,
  Backdrop,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  CssBaseline,
  Grid2,
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

const imageDict = {
  1: a1,
  2: a2,
  3: a3,
  4: a4,
  5: a5,
  6: a6,
  7: b1,
  8: b2,
  9: b3,
  10: b4,
  11: b5,
  12: b6,
  13: c1,
  14: c2,
  15: c3,
  16: c4,
  17: c5,
};

const col1 = [1, 2, 3, 4, 5, 6];
const col2 = [7, 8, 9, 10, 11, 12];
const col3 = [13, 14, 15, 16, 17];

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

const ClickableImage = ({ imageIdx, setOpen, setImageIdx }) => {
  const handleClick = () => {
    setImageIdx(imageIdx);
    setOpen(true);
  };

  return (
    <Card sx={{ mt: 1, borderRadius: 3 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" image={imageDict[imageIdx]} alt="Image" />
      </CardActionArea>
    </Card>
  );
};

const ImageBackdrop = ({ setOpen, open, imageIdx }) => {
  const [width, setWidth] = useState(0);
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={open}
      onClick={() => {
        setOpen(false);
      }}
    >
      <Box
        component="img"
        src={imageDict[imageIdx]}
        onLoad={(e) => {
          setWidth(e.target.naturalWidth * 1.2);
        }}
        sx={{
          borderRadius: 3,
          width: { width },
          maxWidth: "100%",
        }}
      />
    </Backdrop>
  );
};

const Gwen = () => {
  const [open, setOpen] = useState(false);
  const [imageIdx, setImageIdx] = useState(1);

  return (
    <>
      <ImageBackdrop setOpen={setOpen} open={open} imageIdx={imageIdx} />

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
            >
              <b>格猫的日常</b>
            </Typography>
          </Container>
        </Box>
        <Box sx={{ bgcolor: "yellow.light" }}>
          <Container maxWidth="xl" style={{ paddingBottom: "100px" }}>
            <Grid2
              container
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid2 size="grow" className={classes.column}>
                {col1.map((item, index) => (
                  <ClickableImage
                    key={index}
                    imageIdx={item}
                    setOpen={setOpen}
                    setImageIdx={setImageIdx}
                  />
                ))}
              </Grid2>
              <Grid2 size="grow" className={classes.column}>
                {col2.map((item, index) => (
                  <ClickableImage
                    key={index}
                    imageIdx={item}
                    setOpen={setOpen}
                    setImageIdx={setImageIdx}
                  />
                ))}
              </Grid2>
              <Grid2 size="grow" className={classes.column}>
                {col3.map((item, index) => (
                  <ClickableImage
                    key={index}
                    imageIdx={item}
                    setOpen={setOpen}
                    setImageIdx={setImageIdx}
                  />
                ))}
              </Grid2>
            </Grid2>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Gwen;
