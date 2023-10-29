import FontIcon from "../UI/FontIcon/FontIcon";
import gwen1 from "../../photos/gwen1.jpg";
import gwen2 from "../../photos/gwen2.jpg";

export default function Interests() {
  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">
      <h2 className="w3-text-grey w3-padding-16">
        <FontIcon icon="fa-face-grin-stars" className="font-icon-large" />
        Research Interests
      </h2>
      <div className="w3-container">
        <div className="w3-half">
          <img className="center" src={gwen1} alt="Gwen 1" />
        </div>
        <div className="w3-half">
          <img className="center" src={gwen2} alt="Gwen 2" />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
