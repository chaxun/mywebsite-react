import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FontIcon.css";

function FontIcon(props) {
  const classes = "font-icon " + props.className;
  return (
    <FontAwesomeIcon
      icon={props.icon}
      onClick={props.onClick}
      shake={props.shake}
      bounce={props.bounce}
      pull={props.pull}
      className={classes}
      fixedWidth
    />
  );
}

export default FontIcon;
