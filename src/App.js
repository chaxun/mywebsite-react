import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

import Main from "./routes/Main";
import Me from "./routes/Me";
import Gwen from "./routes/Gwen";
import Shang from "./routes/Shang";

const titles = {
  "/me": "Xun's Homepage",
  "/gwen": "Gwen's Homepage",
  "/shangren": "Shang's Homepage",
};

export default function App() {
  let location = useLocation();
  useEffect(() => {
    document.title = titles[location.pathname] ?? "Chaxun";
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/me" element={<Me />} />
      <Route path="/gwen" element={<Gwen />} />
      <Route path="/shangren" element={<Shang />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
}
