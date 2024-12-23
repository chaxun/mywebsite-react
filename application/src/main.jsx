import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faBuilding,
  faCalendarDays,
  faPanorama,
  faFaceGrinStars,
  faBaby,
  faChildReaching,
  faHouse,
  faEnvelope,
  faGears,
  faHandLizard,
  faBowlRice,
  faMugHot,
  faEarthAsia,
  faEye,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHandPeace,
  faFaceGrinSquintTears,
} from "@fortawesome/free-regular-svg-icons";

import "./index.css";
import App from "./App";

library.add(
  fab,
  faGraduationCap,
  faBuilding,
  faCalendarDays,
  faPanorama,
  faFaceGrinStars,
  faBaby,
  faChildReaching,
  faHandPeace,
  faFaceGrinSquintTears,
  faHouse,
  faEnvelope,
  faGears,
  faHandLizard,
  faBowlRice,
  faMugHot,
  faEarthAsia,
  faEye,
  faPencil
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Suspense fallback={<div>loading...</div>}>
      <App />
    </Suspense>
  </BrowserRouter>
);
