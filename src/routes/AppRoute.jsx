import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "../components/About";
import { AboutEng } from "../components/AboutEng";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<About />} />
        <Route path="/en" element={<AboutEng />} />
      </Routes>
    </BrowserRouter>
  );
};
