import React, { useState, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import axios from "axios";

import Json1 from "./jsons/Me/wo.json";
import Json2 from "./jsons/Me/me.json";
import MainPage from "./pages/MainPage";
const MePage = React.lazy(() => import("./pages/MePage"));
const GwenPage = React.lazy(() => import("./pages/GwenPage"));
const ShangPage = React.lazy(() => import("./pages/ShangPage"));
const ShangRutgersPage = React.lazy(() => import("./pages/ShangRutgersPage"));
const ShangCVPage = React.lazy(() => import("./pages/ShangCVPage"));

const titles = {
  "/me": "My Homepage",
  "/gwen": "Gwen's Homepage",
  "/shangren": "Shang's Homepage",
};

export default function App() {
  const location = useLocation();
  useEffect(() => {
    document.title = titles[location.pathname] ?? "Chaxun";
  }, [location]);

  const [lanToggle, setLanToggle] = useState(
    sessionStorage.getItem("lan") === "1" ? 1 : 2
  );
  const [data, setData] = useState(
    sessionStorage.getItem("lan") === "1" ? Json1 : Json2
  );
  const getCountry = async () => {
    const res = await axios.get("https://api.country.is");
    if (res.data.country === "US") {
      sessionStorage.setItem("lan", 2);
      setLanToggle(2);
      setData(Json2);
    } else {
      sessionStorage.setItem("lan", 1);
      setLanToggle(1);
      setData(Json1);
    }
    const path = window.location.pathname || "/";
    const body = { ip: res.data.ip, path: path };
    await axios.post("https://api.chaxuniverse.com/location/save", body);
  };
  useEffect(() => {
    const lanStorage = sessionStorage.getItem("lan");
    if (lanStorage === undefined || lanStorage === null) {
      getCountry();
    }
  }, []);
  const toggleOnClick = () => {
    if (lanToggle === 1) {
      sessionStorage.setItem("lan", 2);
      setLanToggle(2);
      setData(Json2);
    } else {
      sessionStorage.setItem("lan", 1);
      setLanToggle(1);
      setData(Json1);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/me"
        element={
          <MePage
            lanToggle={lanToggle}
            data={data}
            toggleOnClick={toggleOnClick}
          />
        }
      />
      <Route path="/gwen" element={<GwenPage />} />
      <Route path="/shangren" element={<ShangPage />} />
      <Route path="/shangren/rutgers" element={<ShangRutgersPage />} />
      <Route path="/shangren/cv" element={<ShangCVPage />} />
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
}
