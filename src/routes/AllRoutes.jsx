import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import LoginWrapper from "../auth/LoginWrapper";
import DashboardWrapper from "../components/DashboardWrapper";
import Home from "../pages/Home";
import Analytics from "../pages/Analytics";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/login"
        element={
          <LoginWrapper>
            <Login />
          </LoginWrapper>
        }
      />
      <Route
        path="/signup"
        element={
          <LoginWrapper>
            <SignUp />
          </LoginWrapper>
        }
      />
      <Route
        path="/dashboard"
        element={
          <DashboardWrapper>
            <Home />
          </DashboardWrapper>
        }
      />
      <Route
        path="/analytics"
        element={
          <DashboardWrapper>
            <Analytics />
          </DashboardWrapper>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
