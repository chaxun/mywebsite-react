import React from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

import classes from "./Panorama.module.css";

const Panorama = (props) => {
  const panoPhoto = props.panoPhoto;
  const returnHome = props.returnHome;
  const photoSphereRef = React.createRef();
  return (
    <ReactPhotoSphereViewer
      ref={photoSphereRef}
      src={panoPhoto}
      littlePlanet={true}
      height={"100vh"}
      width={"100%"}
      autorotateSpeed={"2rpm"}
      navbar={[
        {
          id: "my-button",
          content: "Home",
          className: classes.customButton,
          onClick: returnHome,
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
