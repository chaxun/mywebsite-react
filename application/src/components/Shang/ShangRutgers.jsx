import { useNavigate } from "react-router-dom";

import Panorama from "../UI/Panorama/Panorama";
import panoPhoto from "../../photos/rutgers.jpg";

const RutgersPano = () => {
  const navigate = useNavigate();
  const returnHome = () => {
    navigate("/shangren");
  };
  return <Panorama panoPhoto={panoPhoto} returnHome={returnHome} />;
};

export default RutgersPano;
