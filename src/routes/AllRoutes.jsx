import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AllRoutes;
