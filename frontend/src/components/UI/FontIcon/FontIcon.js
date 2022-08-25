import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FontIcon.css";

function FontIcon(props) {
  const classes = "font-icon " + props.className;
  return (
    <FontAwesomeIcon
      icon={props.icon}
      className={classes}
      fixedWidth
    />
  );
}

export default FontIcon;
