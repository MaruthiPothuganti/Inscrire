import { Route, Routes } from "react-router-dom";
import {
  LandingPage,
  HomePage,
  Archive,
  Trash,
  Profile,
  Labels,
  Login,
  Signup,
} from "./index";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/Labels" element={<Labels />} />
      <Route path="/Archive" element={<Archive />} />
      <Route path="/Trash" element={<Trash />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
};
