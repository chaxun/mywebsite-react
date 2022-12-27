import { useNavigate } from "react-router-dom";

import Panorama from "../components/UI/Panorama/Panorama";
import panoPhoto from "../photos/johnson_park.jpg";

const JohnsonParkPano = () => {
  const navigate = useNavigate();
  const returnHome = () => {
    navigate("/");
  };
  return <Panorama panoPhoto={panoPhoto} returnHome={returnHome} />;
};

export default JohnsonParkPano;
