import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/home-page";
import LoginPage from "../pages/auth/login-page";
import SignupPage from "../pages/auth/signup-page";
import OtpPage from "../pages/auth/otp-page";
import ResetPasswordPage from "../pages/auth/reset-password-page";
import AuthLayout from "../components/auth-layout/auth-layout";
import Events from "../pages/Events/Events";
import MainpageLayout from "../components/MainPage/MainpageLayout";
import Dasboard from "../components/Dasboard/Dasboard";
import CreateEvent from "../components/CreateEvent/CreateEvent";
import ManageEvent from "../components/ManageEvent/ManageEvent";
import AccountSettings from "../components/AccountSettings/AccountSettings";
import Subscription from "../components/Subscription/Subscription";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute"; // Adjust the import path as needed
import SuDashboard from "../components/SuDashboard/SuDashboard";
import HostManage from "../components/HostManage/HostManage";
import EventManage from "../components/EventManage/EventManage";
import SavedEvents from "../pages/SavedEvents/SavedEvents";

const authContent = [
  {
    title: "Welcome Back!",
    desc: "We are glad to see you again! Get access to your Orders, Wishlist and Recommendations.",
  },
  {
    title: "Looks like you're new here!!",
    desc: "Join our group in few minutes! Sign up with your details to get started",
  },
  {
    title: "Don't worry,",
    desc: "We are here help you to recover your password.",
  },
  {
    title: "We care about your account Security.",
    desc: "We are here help you to recover your password. ",
  },
];

const RouterComponent = () => {
  const [role, setRole] = useState("admin");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/saved-events" element={<SavedEvents />}/>
        <Route
          path="/events-dashboard"
          element={
            <ProtectedRoute role={role} allowedRole="admin">
              <MainpageLayout>
                <Dasboard />
              </MainpageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute role={role} allowedRole="superAdmin">
              <MainpageLayout role={role}>
                <SuDashboard />
              </MainpageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/host-manage"
          element={
            <ProtectedRoute role={role} allowedRole="superAdmin">
              <MainpageLayout role={role}>
                <HostManage />
              </MainpageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/manage-events"
          element={
            <ProtectedRoute role={role} allowedRole="superAdmin">
              <MainpageLayout role={role}>
                <EventManage />
              </MainpageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/events-dashboard/create-event"
          element={
            <ProtectedRoute role={role} allowedRole="admin">
              <MainpageLayout role={role ? role : "admin"}>
                <CreateEvent />
              </MainpageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/events-dashboard/manage-events"
          element={
            <ProtectedRoute role={role} allowedRole="admin">
              <MainpageLayout role={role ? role : "admin"}>
                <ManageEvent />
              </MainpageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/events-dashboard/profile-settings"
          element={
            <ProtectedRoute role={role} allowedRole="admin">
              <MainpageLayout role={role ? role : "admin"}>
                <AccountSettings />
              </MainpageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/events-dashboard/subscription"
          element={
            <ProtectedRoute role={role} allowedRole="admin">
              <MainpageLayout role={role ? role : "admin"}>
                <Subscription />
              </MainpageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <AuthLayout content={authContent[0]}>
              <LoginPage />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout content={authContent[1]}>
              <SignupPage setRole={setRole} />
            </AuthLayout>
          }
        />
        <Route
          path="/otp-verify"
          element={
            <AuthLayout content={authContent[2]}>
              <OtpPage />
            </AuthLayout>
          }
        />
        <Route
          path="/reset-password"
          element={
            <AuthLayout content={authContent[3]}>
              <ResetPasswordPage />
            </AuthLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
