import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faCalendarDays,
  faPanorama,
  faFaceGrinStars,
  faBaby,
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

import "./index.css";
import App from "./App";

library.add(
  fab,
  faGraduationCap,
  faCalendarDays,
  faPanorama,
  faFaceGrinStars,
  faBaby,
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
