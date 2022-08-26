import { Outlet, Link } from "react-router-dom";

import "./Main.css";

const Main = () => {
  return (
    <div className="font-link-main light-green">
      <div className="w3-content">
        <div className="w3-row-padding">

          <div className="center-box">
            <div className="w3-container font-effect-fire-animation center-text">
              <Link to="/me" className="a-shadow" style={{ backgroundColor: "rgb(255,140,0,0.1)" }}>
                Me
              </Link>
            </div>
            <div className="w3-container font-effect-fire-animation center-text">
              <Link to="/gwen" className="a-shadow" style={{ backgroundColor: "rgb(255,140,0,0.1)" }}>
                My Cat
              </Link>
            </div>
            <div className="w3-container font-effect-fire-animation center-text">
              <Link to="/shangren" className="a-shadow" style={{ backgroundColor: "rgb(255,140,0,0.1)" }}>
                My Roommate
              </Link>
            </div>
          </div>

          <Outlet />
          
        </div>
      </div>
    </div>
  );
};

export default Main;
