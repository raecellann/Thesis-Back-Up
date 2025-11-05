import React from "react";
import { Routes as ReactRoutes, Route } from "react-router";

import LandingPage from "./pages/Landing/landingPage.jsx";
import ChatList from "./pages/User_chats/user_chats";
import LoginPage from "./pages/SignIn/signInPage.jsx"; // Import the LoginPage component
import SpaceCreationPage from "./pages/SpaceCreation/spacecreation.jsx";
import InitialInvitePage from "./pages/SpaceCreation/inviteteam.jsx";
import HomePage from "./pages/HomePage/homepage.jsx";

export default function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/chatlist" element={<ChatList />} />
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/create-space" element={<SpaceCreationPage />} />
      <Route path="/initial-invite" element={<InitialInvitePage />} />
      <Route path="/home" element={<HomePage />} />
    </ReactRoutes>
  );
}
 