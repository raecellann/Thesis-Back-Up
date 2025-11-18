import React, { useState } from "react";
import Sidebar from "../component/profsidebar";

const ProfSettingsPage = () => {
  const [activeAccount, setActiveAccount] = useState("Jober Reyes");

  const accounts = [
    {
      name: "Jober Reyes",
      status: "Signed In",
      role: "Professor",
      avatar: "/prof-avatar-1.png",
    },
    {
      name: "Aldrich Bernardo",
      status: "",
      role: "Professor",
      avatar: "/prof-avatar-2.png",
    },
  ];

  return (
    <div className="flex font-grotesque min-h-screen bg-[#161A20] text-white leading-[1.2] font-semibold">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10 flex flex-col items-center">
        <div className="w-full max-w-5xl">
          {/* Title Section */}
          <h1 className="text-4xl font-bold text-center mb-2">Settings</h1>
          <p className="text-gray-300 mb-10 text-center">
            Manage your professor profile, course settings, and account preferences.
          </p>

          {/* Profile Account */}
          <div className="bg-[#1E222A] rounded-2xl p-6 mb-10 border border-white shadow-lg">
            <h2 className="text-xl font-bold mb-4">Professor Profile</h2>

            <div className="flex items-center justify-between">
              <button className="px-4 py-2 bg-transparent rounded-lg border border-white text-white hover:bg-[#3A7BFF] hover:border-[#3A7BFF] transition-all">
                Edit Professor Profile
              </button>

              <button className="px-4 py-2 bg-transparent text-red-400 border border-red-500 rounded-lg hover:bg-red-600 hover:text-white hover:border-transparent transition-all">
                Delete Professor Account
              </button>
            </div>
          </div>

          {/* Switch Account Section (UPDATED) */}
          <div className="bg-[#1E222A] rounded-2xl p-6 border border-white shadow-lg">
            <h2 className="text-xl font-bold mb-4">Switch Professor Account</h2>

            <div className="space-y-4">
              {accounts.map((acc) => (
                <div
                  key={acc.name}
                  className="flex items-center justify-between p-4 border-b border-gray-700"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={acc.avatar}
                      alt="avatar"
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                    <div>
                      <p className="font-semibold">{acc.name}</p>
                      <p className="text-gray-400 text-xs">
                        {acc.role} {acc.status && `• ${acc.status}`}
                      </p>
                    </div>
                  </div>

                  {activeAccount !== acc.name ? (
                    <button
                      onClick={() => setActiveAccount(acc.name)}
                      className="px-3 py-1 bg-transparent border border-gray-400 text-gray-300 text-sm rounded-lg hover:bg-[#3A7BFF] hover:border-[#3A7BFF] hover:text-white transition-all"
                    >
                      Switch Account
                    </button>
                  ) : (
                    <span className="text-green-400 text-sm font-medium">
                      Active
                    </span>
                  )}
                </div>
              ))}

              {/* Add Account */}
              <button className="mt-2 flex items-center gap-2 px-4 py-2 bg-transparent border border-gray-400 text-gray-300 rounded-lg hover:bg-[#3A7BFF] hover:border-[#3A7BFF] hover:text-white transition-all w-full justify-center">
                <span className="text-2xl">+</span> Add Other Accounts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfSettingsPage;
