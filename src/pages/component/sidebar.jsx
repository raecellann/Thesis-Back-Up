import React, { useState } from "react";
import {
  Home,
  Users,
  Bell,
  Calendar,
  Folder,
  FileText,
  ClipboardList,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import Logout from "./logout";

const Sidebar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [activeItem, setActiveItem] = useState(null); // no item active initially

  const menuItems = [
    { icon: <Home size={20} />, label: "Home" },
    { icon: <Users size={20} />, label: "Spaces" },
    { icon: <Bell size={20} />, label: "Notifications" },
    { icon: <Calendar size={20} />, label: "Tasks" },
    { icon: <Folder size={20} />, label: "Files" },
    { icon: <FileText size={20} />, label: "Templates" },
  ];

  return (
    <div
      className="h-screen w-64 text-white flex flex-col p-5"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #4d9bef, #3d8ee8, #2c81e1, #1a73da, #0066d2)",
      }}
    >
      {/* Profile */}
      <div className="flex items-center justify-between mb-8">
        <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center font-bold">
          R
        </div>
        <span className="font-semibold">Racell Ann</span>
        <button className="ml-2 text-sm">✚</button>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
          />
        ))}

        <div className="mt-6">
          <p className="text-gray-200 text-xs uppercase mb-2">Private</p>
          <SidebarItem
            icon={<ClipboardList size={20} />}
            label="Grade Viewing"
            isActive={activeItem === "Grade Viewing"}
            onClick={() => setActiveItem("Grade Viewing")}
          />
        </div>
      </nav>

      {/* Footer */}
      <div className="space-y-2 mt-auto">
        <SidebarItem
          icon={<User size={20} />}
          label="Account"
          isActive={activeItem === "Account"}
          onClick={() => setActiveItem("Account")}
        />
        <SidebarItem
          icon={<Settings size={20} />}
          label="Settings"
          isActive={activeItem === "Settings"}
          onClick={() => setActiveItem("Settings")}
        />

        {/* Logout trigger */}
        <div
          onClick={() => setShowLogout(true)}
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-700/40 cursor-pointer transition"
        >
          <LogOut size={20} />
          <span className="text-sm">Log Out Account</span>
        </div>
      </div>

      {/* Logout Modal */}
      {showLogout && <Logout onClose={() => setShowLogout(false)} />}
    </div>
  );
};

const SidebarItem = ({ icon, label, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center space-x-3 px-5 py-2.5 cursor-pointer font-semibold transition-all duration-300 ${
      isActive
        ? "bg-black text-white rounded-full shadow-md w-full"
        : "text-white hover:opacity-90"
    }`}
    style={{
      minHeight: "45px",
    }}
  >
    {icon}
    <span className="text-base">{label}</span>
  </div>
);

export default Sidebar;
