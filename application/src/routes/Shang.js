import classes from "./Shang.module.css";
import Background from "../components/shangren/Background";
import ShangBody from "../components/shangren/ShangBody";

const Shang = () => {
  return (
    <div className={classes.container}>
      <Background />
      <ShangBody />
    </div>
  );
};

export default Shang;
