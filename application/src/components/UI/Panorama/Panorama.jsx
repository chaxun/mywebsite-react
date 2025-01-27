import { createRef } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { AutorotatePlugin } from "@photo-sphere-viewer/autorotate-plugin";

import classes from "./Panorama.module.css";

const Panorama = (props) => {
  const panoPhoto = props.panoPhoto;
  const returnHome = props.returnHome;
  const photoSphereRef = createRef();
  const plugins = [[AutorotatePlugin, { autorotateSpeed: "1rpm" }]];
  return (
    <ReactPhotoSphereViewer
      src={panoPhoto}
      ref={photoSphereRef}
      littlePlanet={true}
      height={"100vh"}
      width={"100%"}
      plugins={plugins}
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
