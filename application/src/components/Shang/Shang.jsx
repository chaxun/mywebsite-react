import Background from "./Background";
import Portolio from "./Portfolio";
import Interests from "./Interests";
import Education from "./Education";
import Publications from "./Publications";
import classes from "./Shang.module.css";

const Shang = () => {
  return (
    <div className={classes.container}>
      <Background />
      <div className={classes.divContent}>
        <div className={classes.divContentInner}>
          <div className="w3-content" style={{ maxWidth: "1500px" }}>
            <div
              className="w3-row-padding"
              style={{ paddingTop: "10px", paddingBottom: "10px" }}
            >
              <div className="w3-third">
                <Portolio />
              </div>
              <div className="w3-twothird">
                <Interests />
                <Education />
                <Publications />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shang;
