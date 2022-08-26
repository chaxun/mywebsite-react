import "./Gwen.css";

import a1 from "../photos/a1.jpg";
import a2 from "../photos/a2.jpg";
import a3 from "../photos/a3.jpg";
import a4 from "../photos/a4.jpg";
import a5 from "../photos/a5.jpg";
import a6 from "../photos/a6.jpg";
import b1 from "../photos/b1.jpg";
import b2 from "../photos/b2.jpg";
import b3 from "../photos/b3.jpg";
import b4 from "../photos/b4.jpg";
import b5 from "../photos/b5.jpg";
import b6 from "../photos/b6.jpg";
import c1 from "../photos/c1.jpg";
import c2 from "../photos/c2.jpg";
import c3 from "../photos/c3.jpg";
import c4 from "../photos/c4.jpg";
import c5 from "../photos/c5.jpg";

const Gwen = () => {
  return (
    <div style={{ backgroundColor: "rgb(255,255,224,0.3)" }}>
      <div className="w3-content" style={{ maxWidth: "1500px" }}>
        <div className="w3-opacity" style={{ paddingTop: "64px" }}>
          <div className="w3-clear"></div>
          <header className="w3-center w3-margin-botton">
            <h1 className="font-link-gwen">
              <b>Gwen</b>
            </h1>
            <h2>
              <b>格猫的日常</b>
            </h2>
          </header>
        </div>

        <div
          className="w3-row-padding"
          style={{ paddingTop: "64px", paddingBottom: "128px" }}
        >
          <div className="w3-third">
            <img className="img-third" src={a1} alt="Gwen" />
            <img className="img-third" src={a2} alt="Gwen" />
            <img className="img-third" src={a3} alt="Gwen" />
            <img className="img-third" src={a4} alt="Gwen" />
            <img className="img-third" src={a5} alt="Gwen" />
            <img className="img-third" src={a6} alt="Gwen" />
          </div>
          <div className="w3-third">
            <img className="img-third" src={b1} alt="Gwen" />
            <img className="img-third" src={b2} alt="Gwen" />
            <img className="img-third" src={b3} alt="Gwen" />
            <img className="img-third" src={b4} alt="Gwen" />
            <img className="img-third" src={b5} alt="Gwen" />
            <img className="img-third" src={b6} alt="Gwen" />
          </div>
          <div className="w3-third">
            <img className="img-third" src={c1} alt="Gwen" />
            <img className="img-third" src={c2} alt="Gwen" />
            <img className="img-third" src={c3} alt="Gwen" />
            <img className="img-third" src={c4} alt="Gwen" />
            <img className="img-third" src={c5} alt="Gwen" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gwen;
