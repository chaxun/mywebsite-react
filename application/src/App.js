import { useState, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import axios from "axios";

import Main from "./routes/Main";
import Xun from "./routes/Xun";
import Gwen from "./routes/Gwen";
import Shang from "./routes/Shang";

import Json1 from "./components/me/wo.json";
import Json2 from "./components/me/me.json";

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
      <Route path="/" element={<Main />} />
      <Route
        path="/me"
        element={
          <Xun
            lanToggle={lanToggle}
            data={data}
            toggleOnClick={toggleOnClick}
          />
        }
      />
      <Route path="/gwen" element={<Gwen />} />
      <Route path="/shangren" element={<Shang />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
}
