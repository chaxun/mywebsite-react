const Toggle = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${props.className}`}
      style={props.style}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Toggle;
