import { Route, Routes } from "react-router-dom";
import { LandingPage, HomePage, Archive, Trash, Profile } from "./index";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/Archive" element={<Archive />} />
      <Route path="/Trash" element={<Trash />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
};
