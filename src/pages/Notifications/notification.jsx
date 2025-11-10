import React from "react";
import Sidebar from "../component/sidebar";

const NotificationPage = ({ notifications = [] }) => {
  // Default notifications for demo
  const defaultNotifications = [
    { id: 1, type: "invite", sender: "Zeldrick", message: "Zeldrick invited you to join their space" },
    { id: 2, type: "file", sender: "Nathaniel", message: "Nathaniel shared a file with you" },
    { id: 3, type: "task", sender: "Wilson", message: "Wilson assigned you a task in their space" },
    { id: 4, type: "invite", sender: "Zeldrick", message: "Zeldrick invited you to join their space" },
    { id: 5, type: "file", sender: "Nathaniel", message: "Nathaniel shared a file with you" },
    { id: 6, type: "task", sender: "Wilson", message: "Wilson assigned you a task in their space" },
  ];

  const notificationList = notifications.length > 0 ? notifications : defaultNotifications;

  const getIconEmoji = (type) => {
    switch (type) {
      case "invite": return "👥";
      case "file": return "📁";
      case "task": return "📋";
      default: return "🔔";
    }
  };

  const handleAcceptInvitation = (id) => console.log("Accepted", id);
  const handleDecline = (id) => console.log("Declined", id);
  const handleOpenFile = (id) => console.log("Opened file", id);
  const handleOpenTask = (id) => console.log("Opened task", id);

  return (
    <div className="flex font-sans min-h-screen bg-[#161A20] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center p-10">
        <h1 className="text-3xl font-bold mb-10 font-grotesque">Notifications</h1>

        <div className="w-full max-w-3xl space-y-4">
          {notificationList.map((notif) => (
            <div
              key={notif.id}
              className="flex justify-between items-center bg-[#1E242E] p-4 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{getIconEmoji(notif.type)}</span>
                <span>{notif.message}</span>
              </div>

              <div className="flex gap-3 text-sm">
                {notif.type === "invite" ? (
                  <>
                    <button
                      className="text-red-500 bg-transparent border border-transparent hover:border-red-500 hover:text-red-400 px-3 py-1 rounded-md transition"
                      onClick={() => handleDecline(notif.id)}
                    >
                      Decline
                    </button>
                    <button
                      className="text-green-400 bg-transparent border border-transparent hover:border-green-400 hover:text-green-300 px-3 py-1 rounded-md transition"
                      onClick={() => handleAcceptInvitation(notif.id)}
                    >
                      Accept Invitation
                    </button>
                  </>
                ) : notif.type === "file" ? (
                  <button
                    className="text-green-400 hover:underline bg-transparent"
                    onClick={() => handleOpenFile(notif.id)}
                  >
                    Open file
                  </button>
                ) : notif.type === "task" ? (
                  <button
                    className="text-green-400 hover:underline bg-transparent"
                    onClick={() => handleOpenTask(notif.id)}
                  >
                    Open task
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
