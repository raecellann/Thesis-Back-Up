import React, { useState } from "react";
import { 
  Home, Users, Bell, Calendar, Folder, FileText, 
  ClipboardList, User, Settings, LogOut 
} from "lucide-react";
import Logout from "./logout";

const Sidebar = () => {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col p-4">
      {/* Profile */}
      <div className="flex items-center justify-between mb-6">
        <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center font-bold">
          R
        </div>
        <span className="font-semibold">Racell Ann</span>
        <button className="ml-2 text-sm">✚</button>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-2">
        <SidebarItem icon={<Home size={18} />} label="Home" />
        <SidebarItem icon={<Users size={18} />} label="Spaces" />
        <SidebarItem icon={<Bell size={18} />} label="Notifications" />
        <SidebarItem icon={<Calendar size={18} />} label="Tasks" />
        <SidebarItem icon={<Folder size={18} />} label="Files" />
        <SidebarItem icon={<FileText size={18} />} label="Templates" />

        <div className="mt-6">
          <p className="text-gray-400 text-xs uppercase mb-2">Private</p>
          <SidebarItem icon={<ClipboardList size={18} />} label="Grade Viewing" />
        </div>
      </nav>

      {/* Footer */}
      <div className="space-y-2 mt-auto">
        <SidebarItem icon={<User size={18} />} label="Account" />
        <SidebarItem icon={<Settings size={18} />} label="Settings" />

        {/* Logout trigger */}
        <div
          onClick={() => setShowLogout(true)}
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer"
        >
          <LogOut size={18} />
          <span className="text-sm">Log Out Account</span>
        </div>
      </div>

      {/* Logout Modal/Popup */}
      {showLogout && <Logout onClose={() => setShowLogout(false)} />}
    </div>
  );
};

const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

export default Sidebar;
