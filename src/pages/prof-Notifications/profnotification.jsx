import React, { useState } from "react";
import Sidebar from "../component/profsidebar";

const ProfNotificationPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const notifications = [
    {
      id: 1,
      name: "Zeldrick Jesus Delos Santos",
      comment: "Okay na po, Sir Jober",
      activity: "Week 8 Activity in Operating System Space",
      date: "Oct 20",
      unread: true,
      image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
    {
      id: 2,
      name: "Zeldrick Jesus Delos Santos",
      comment: "Okay na po, Sir Jober",
      activity: "Week 8 Activity in Operating System Space",
      date: "Oct 20",
      unread: false,
      image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
    {
      id: 3,
      name: "Zeldrick Jesus Delos Santos",
      comment: "Okay na po, Sir Jober",
      activity: "Week 8 Activity in Operating System Space",
      date: "Oct 20",
      unread: true,
      image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
  ];

  const filteredNotifications =
    activeTab === "unread"
      ? notifications.filter((n) => n.unread)
      : notifications;

  return (
    <div className="flex min-h-screen bg-[#161A20] text-white font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold font-grotesque mb-8 text-center">
          Notifications
        </h1>

        {/* Tabs */}
        <div className="w-full">
          <div className="flex justify-start gap-10 border-b border-gray-600 pb-3 mb-6 text-gray-300 text-sm">
            <button
              className={`${
                activeTab === "all" ? "text-white font-semibold" : ""
              } bg-transparent hover:text-white`}
              onClick={() => setActiveTab("all")}
            >
              All Notifications
            </button>
            <button
              className={`${
                activeTab === "unread" ? "text-white font-semibold" : ""
              } bg-transparent hover:text-white`}
              onClick={() => setActiveTab("unread")}
            >
              Unread Notifications
            </button>
          </div>

          {/* Notification List */}
          <div className="space-y-4">
            {filteredNotifications.map((notif) => (
              <div
                key={notif.id}
                className="flex items-start justify-between border-b border-gray-700 pb-4"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={notif.image}
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm">
                      <span className="font-semibold">
                        {notif.name}
                      </span>{" "}
                      commented in{" "}
                      <span className="font-semibold text-white">
                        {notif.activity}
                      </span>
                    </p>
                    <p className="text-gray-400 text-sm mt-1">{notif.comment}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <span>{notif.date}</span>
                  {notif.unread && (
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfNotificationPage;
