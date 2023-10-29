import Me from "../components/Me/Me";

const MePage = (props) => {
  return (
    <Me
      lanToggle={props.lanToggle}
      data={props.data}
      toggleOnClick={props.toggleOnClick}
    />
  );
};

export default MePage;
