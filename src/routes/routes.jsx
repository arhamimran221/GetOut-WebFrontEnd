import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/home-page";
import LoginPage from "../pages/auth/login-page";
import SignupPage from "../pages/auth/signup-page";
import OtpPage from "../pages/auth/otp-page";
import ResetPasswordPage from "../pages/auth/reset-password-page";
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
import Search from "../pages/Search/Search";
import EventsDetails from "../pages/DetailPages/EventDetails";
import HostDetails from "../pages/DetailPages/HostDetails";
import AboutUs from "../pages/AboutUs/AboutUs";
import Notifications from "../pages/Notifications/Notifications";

const RouterComponent = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/directory" element={<Events />}/>
        <Route path="/saved-events" element={<SavedEvents />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/event-details" element={<EventsDetails />}/>
        <Route path="/host-details" element={<HostDetails />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route
          path="/host-protocol"
          element={
            <ProtectedRoute allowedRole="role">
              <MainpageLayout>
                <Dasboard />
              </MainpageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/host-protocol/notification"
          element={
            <ProtectedRoute allowedRole="role">
              <MainpageLayout>
                <Notifications />
              </MainpageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRole="superAdmin">
              <MainpageLayout>
                <SuDashboard />
              </MainpageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/host-manage"
          element={
            <ProtectedRoute allowedRole="superAdmin">
              <MainpageLayout>
                <HostManage />
              </MainpageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/manage-events"
          element={
            <ProtectedRoute allowedRole="superAdmin">
              <MainpageLayout>
                <EventManage />
              </MainpageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/host-protocol/create-event"
          element={
            <ProtectedRoute allowedRole="role">
              <MainpageLayout>
                <CreateEvent />
              </MainpageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/host-protocol/manage-events"
          element={
            <ProtectedRoute allowedRole="role">
              <MainpageLayout>
                <ManageEvent />
              </MainpageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/host-protocol/profile-settings"
          element={
            <ProtectedRoute allowedRole="role">
              <MainpageLayout>
                <AccountSettings />
              </MainpageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/host-protocol/subscription"
          element={
            <ProtectedRoute allowedRole="role">
              <MainpageLayout>
                <Subscription />
              </MainpageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/login-host"
          element={
              <LoginPage />
          }
        />
        <Route
          path="/signup"
          element={
              <SignupPage />
          }
        />
        <Route
          path="/otp-verify"
          element={
              <OtpPage />
          }
        />
        <Route
          path="/reset-password"
          element={
              <ResetPasswordPage />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
