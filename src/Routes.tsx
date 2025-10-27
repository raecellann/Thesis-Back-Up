import React from "react";
import { Routes as ReactRoutes, Route } from "react-router";

import LandingPage from "./pages/Landing/landingPage.jsx";
import ChatList from "./pages/User_chats/user_chats";
// import LandingPage from '@/pages';

export default function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/chatlist" element={<ChatList/>} />
    </ReactRoutes>
  );
}
