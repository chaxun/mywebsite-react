import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Grid, Link } from "@mui/material";

import classes from "./Footer.module.css";

const Footer = (props) => {
  const data = props.data;
  const lanToggle = props.lanToggle;
  return (
    <footer>
      {lanToggle === 1 ? (
        <Grid container order="row">
          <Grid item xs={5} container justifyContent="center">
            <FontAwesomeIcon icon="fa-envelope" className={classes.icon} />
            {data.email}
            <Link
              className={classes.hover}
              href="mailto:chaxuniverse@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              chaxuniverse@gmail.com
            </Link>
          </Grid>
          <Grid item xs={2} container justifyContent="center">
            <Divider orientation="vertical" />
          </Grid>
          <Grid item xs={5} container justifyContent="center">
            <FontAwesomeIcon
              icon={["fab", "bilibili"]}
              className={classes.icon}
            />
            {data.bilibili}
            <Link
              className={classes.hover}
              href="https://space.bilibili.com/447241521"
            >
              lalala2046
            </Link>
          </Grid>
        </Grid>
      ) : (
        <Grid container justifyContent="center">
          <FontAwesomeIcon icon="fa-envelope" className={classes.icon} />
          {data.email}
          <Link
            className={classes.hover}
            href="mailto:chaxuniverse@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            chaxuniverse@gmail.com
          </Link>
        </Grid>
      )}
    </footer>
  );
};

export default Footer;
