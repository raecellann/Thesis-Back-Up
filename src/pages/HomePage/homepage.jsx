import React from "react";
import Sidebar from "../component/sidebar";

const HomePage1 = () => {
  return (
    <div className="flex font-sans min-h-screen bg-[#161A20]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Your main content will go here */}
        <div className="text-white">
          <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>
          {/* Add your dashboard content here */}
        </div>
      </div>
    </div>
  );
};

export default HomePage1;
