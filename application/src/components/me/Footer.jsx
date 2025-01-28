import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid2, Link } from "@mui/material";

import classes from "./Footer.module.css";

const Footer = (props) => {
  const data = props.data;
  const lanToggle = props.lanToggle;
  return (
    <footer>
      {lanToggle === 1 ? (
        <Grid2 container order="row" sx={{ justifyContent: "space-around" }}>
          <Grid2>
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
          </Grid2>
          <Grid2>
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
          </Grid2>
        </Grid2>
      ) : (
        <Grid2 container sx={{ justifyContent: "center" }}>
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
        </Grid2>
      )}
    </footer>
  );
};

export default Footer;
