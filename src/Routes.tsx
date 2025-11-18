import React from "react";
import { Routes as ReactRoutes, Route } from "react-router";

import LandingPage from "./pages/Landing/landingPage.jsx";
import ChatList from "./pages/User_chats/user_chats";
import LoginPage from "./pages/SignIn/signInPage.jsx"; // Import the LoginPage component
import SpaceCreationPage from "./pages/SpaceCreation/spacecreation.jsx";
import InitialInvitePage from "./pages/SpaceCreation/inviteteam.jsx";
import HomePage from "./pages/HomePage/homepage.jsx";
import ProfilePage from "./pages/AccSettings/accsettingspage.jsx";
import GradeViewing from "./pages/GradeViewing/gradeViewing.jsx";
import TaskPage from "./pages/Task/task.jsx";
import NotificationPage from "./pages/Notifications/notification.jsx";
import LecturesPage from "./pages/Lectures/lecture.jsx";
import SpacePage from "./pages/Space/SpacePage.jsx";
import TaskViewPage from "./pages/Task-View/TaskViewPage.jsx";
import TaskViewPageAdmin from "./pages/Task-view Admin/Task-View-Admin.jsx";
import TaskViewAll from "./pages/Task-view Admin/Task-View-All.jsx";

import ProfProfilePage from "./pages/prof-AccSettings/profaccsettingspage.jsx";
import ProfNotificationPage from "./pages/prof-Notifications/profnotification.jsx";
import ProfListActivityPage from "./pages/prof-ListActivities/proflistactivitypage.jsx";
import ProfFilePage from "./pages/prof-Files/proffiles.jsx";
import ProfGradeRecordPage from "./pages/prof-GradeViewing/profgradeviewing.jsx";
import ProfHomePage from "./pages/prof-HomePage/profhomepage.jsx";
import CreateSpaceAdmin from "./pages/CreateSpace-Admin/CreateSpace-Admin.jsx";

export default function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/chatlist" element={<ChatList />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-space" element={<SpaceCreationPage />} />
      <Route path="/create-space-admin" element={<CreateSpaceAdmin />} />
      <Route path="/initial-invite" element={<InitialInvitePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/accsettings" element={<ProfilePage />} />
      <Route path="/grade-viewing" element={<GradeViewing />} />
      <Route path="/task" element={<TaskPage />} />
      <Route path="/notifications" element={<NotificationPage />} />
      <Route path="/lectures" element={<LecturesPage />} />
      <Route path="/space" element={<SpacePage />} />
      <Route path="/task-view" element={<TaskViewPage />} />
      <Route path="/task-view-admin" element={<TaskViewPageAdmin />} />
      <Route path="/task-view-all" element={<TaskViewAll />} />
      <Route path="/prof-acc-settings" element={<ProfProfilePage />} />
      <Route path="/prof-notifications" element={<ProfNotificationPage />} />
      <Route path="/prof-list-activity" element={<ProfListActivityPage />} />
      <Route path="/prof-file" element={<ProfFilePage />} />
      <Route path="/prof-grade-viewing" element={<ProfGradeRecordPage />} />
      <Route path="/prof-home" element={<ProfHomePage />} />

    </ReactRoutes>
  );
}
 