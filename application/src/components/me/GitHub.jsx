import { Card, Link, Typography } from "@mui/material";

import classes from "./GitHub.module.css";

const GitHub = (props) => {
  const data = props.data;
  return (
    <>
      <Card className={classes.card} sx={{ boxShadow: 3 }}>
        <Typography variant="h5" align="center" marginBottom="30px">
          <Link
            href="https://github.com/chaxun/mywebsite-react"
            underline="none"
          >
            {data.item1}
          </Link>
        </Typography>
        <Typography variant="h7" align="center">
          {data.item1_line1}
        </Typography>
      </Card>
      {/* <Card className={classes.card}>
        <div className="w3-container">
          <a className={classes.hover} href="https://github.com/chaxun/bookkeeper-app">
          <p className={classes.title}>{data.item2}</p>
          </a>
          <p className={classes.text}>{data.item2_line1}</p>
        </div>
      </Card> */}
    </>
  );
};

export default GitHub;
