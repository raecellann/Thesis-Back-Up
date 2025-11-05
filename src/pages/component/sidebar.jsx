import React, { useState } from "react";
import {
  Home,
  Users,
  Bell,
  Calendar,
  Folder,
  ClipboardList,
  MessageCircle,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import Logout from "./logout";

const Sidebar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    { icon: <Home size={22} />, label: "Home" },
    { icon: <Users size={22} />, label: "Spaces" },
    { icon: <Bell size={22} />, label: "Notifications" },
    { icon: <Calendar size={22} />, label: "Tasks" },
    { icon: <Folder size={22} />, label: "Files" },
  ];

  return (
    <div
      className="h-screen w-72 text-white flex flex-col p-5 font-inter"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #4d9bef, #3d8ee8, #2c81e1, #1a73da, #0066d2)",
      }}
    >
      {/* Profile */}
      <div className="flex items-center justify-between mb-3">
        <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
          R
        </div>
        <span className="font-semibold text-sm">Racell Ann</span>
        <button className="ml-2 text-sm">✚</button>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-0.5">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
          />
        ))}

        {/* Private Section */}
        <div className="mt-5">
          <p className="text-gray-200 text-[11px] uppercase mb-2 tracking-wide">
            Private
          </p>

          <SidebarItem
            icon={<ClipboardList size={22} />}
            label="Grade Viewing"
            isActive={activeItem === "Grade Viewing"}
            onClick={() => setActiveItem("Grade Viewing")}
          />

          {/* Chats below Grade Viewing */}
          <SidebarItem
            icon={<MessageCircle size={22} />}
            label="Chats"
            isActive={activeItem === "Chats"}
            onClick={() => setActiveItem("Chats")}
          />
        </div>
      </nav>

      {/* Footer */}
      <div className="space-y-1 mt-auto pt-3 border-t border-blue-300/40">
        <SidebarItem
          icon={<User size={22} />}
          label="Account"
          isActive={activeItem === "Account"}
          onClick={() => setActiveItem("Account")}
        />
        <SidebarItem
          icon={<Settings size={22} />}
          label="Settings"
          isActive={activeItem === "Settings"}
          onClick={() => setActiveItem("Settings")}
        />

        {/* Logout trigger */}
        <div
          onClick={() => setShowLogout(true)}
          className="flex items-center space-x-3 px-5 py-3 rounded-md hover:bg-blue-700/40 cursor-pointer transition"
        >
          <LogOut size={22} />
          <span className="text-sm font-medium">Log Out</span>
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
    className={`flex items-center space-x-3 px-5 py-2 cursor-pointer font-semibold transition-all duration-100 ${
      isActive
        ? "bg-black text-white rounded-full shadow-md w-full"
        : "text-white hover:opacity-90"
    }`}
    style={{
      minHeight: "20px",
    }}
  >
    {icon}
    <span className="text-[13px]">{label}</span>
  </div>
);

export default Sidebar;
