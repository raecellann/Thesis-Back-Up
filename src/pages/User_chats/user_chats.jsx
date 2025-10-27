import React from "react";
import Sidebar from "../component/sidebar";

const ChatList = () => {

    // Replace Withe the actual data
  const chats = [
    {
      id: 1,
      name: "WEsmabe192O",
      message: "kumusta figma natin cel?",
      time: "1m",
      avatar: "https://via.placeholder.com/40", 
      isYou: false,
    },
    {
      id: 2,
      name: "NathanielF.",
      message: "Tapos na ba ung figma natin?",
      time: "2h",
      avatar: "https://via.placeholder.com/40",
      isYou: true,
    },
    {
      id: 3,
      name: "ZeldrickJesus25",
      message: "update sa chapter 2",
      time: "2w",
      avatar: "https://via.placeholder.com/40",
      isYou: false,
    },
    {
      id: 4,
      name: "Galvez Raecell",
      message: "yaw ko na mag figma",
      time: "2w",
      avatar: "https://via.placeholder.com/40",
      isYou: false,
    }
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Chat List */}
      <div className="flex-1 bg-gray-900 text-white flex flex-col">
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-lg font-semibold">Chats</h2>
          <button className="text-gray-400 hover:text-white">⤢</button>
        </div>

        {/* Chats */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className="flex items-center gap-3 p-4 border-b border-gray-800 hover:bg-gray-800 cursor-pointer"
            >
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <p className="font-semibold">{chat.name}</p>
                <p className="text-sm text-gray-400 truncate">
                  {chat.isYou ? "You: " : ""}
                  {chat.message}
                </p>
              </div>
              <span className="text-xs text-gray-500">{chat.time}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700 flex justify-end">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700">
            💬 Chats
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
