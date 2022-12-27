import classes from "./Background.module.css";
import background from "../../photos/rutgers.gif";

const Background = () => {
  return (
    <div className={classes.divPlanet}>
      <img src={background} alt="" />
    </div>
  );
};

export default Background;
