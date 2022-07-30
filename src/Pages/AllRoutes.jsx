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
import { RequireAuth } from "../Components";
import MockmanEs from "mockman-js";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/HomePage"
        element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        }
      />
      <Route
        path="/Labels"
        element={
          <RequireAuth>
            <Labels />
          </RequireAuth>
        }
      />
      <Route
        path="/Archive"
        element={
          <RequireAuth>
            <Archive />
          </RequireAuth>
        }
      />
      <Route
        path="/Trash"
        element={
          <RequireAuth>
            <Trash />
          </RequireAuth>
        }
      />
      <Route
        path="/Profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Mock" element={<MockmanEs />} />
    </Routes>
  );
};
