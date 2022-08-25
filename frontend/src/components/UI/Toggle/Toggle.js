import classes from "./Toggle.module.css";

const Button = (props) => {
  return (
    <div className={`${props.className}`}>
      <button
        type={props.type || "button"}
        className={`${classes.button} ${props.className}`}
        style={props.style}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
