import React from "react";
import {
  ReactPhotoSphereViewer,
  // AutorotatePlugin,
} from "react-photo-sphere-viewer";

import classes from "./Panorama.module.css";

const Panorama = (props) => {
  const panoPhoto = props.panoPhoto;
  const returnHome = props.returnHome;
  const photoSphereRef = React.createRef();
  // const plugins = [[AutorotatePlugin, { autorotateSpeed: "2rpm" }]];
  return (
    <ReactPhotoSphereViewer
      ref={photoSphereRef}
      src={panoPhoto}
      height={"100vh"}
      width={"100%"}
      littlePlanet={true}
      // plugins={plugins}
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
