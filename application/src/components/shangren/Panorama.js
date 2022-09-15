import React from "react";
import ReactPhotoSphereViewer from "react-photo-sphere-viewer";

import classes from "./Panorama.module.css"
import backgroundPano from "../../photos/rutgers_pano.jpg";

const Panorama = (props) => {
  const setShowPano = props.setShowPano;
  const photoSphereRef = React.createRef();
  return (
    <ReactPhotoSphereViewer
      ref={photoSphereRef}
      src={backgroundPano}
      littlePlanet={true}
      height={"100vh"}
      width={"100%"}
      autorotateSpeed={"2rpm"}
      navbar={[
        {
          id: "my-button",
          content: "Home",
          className: classes.customButton,
          onClick: () => {
            setShowPano(false);
          },
        },
        "autorotate",
        "zoom",
        "fullscreen",
        "download",
      ]}
    />
  );
};

export default Panorama;
