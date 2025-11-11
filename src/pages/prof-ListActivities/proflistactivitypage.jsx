import React, { useState } from "react";
import Sidebar from "../component/profsidebar";
import Button from "../component/Button";

const ProfListActivityPage = () => {
  const [showModal, setShowModal] = useState(false);

  const activities = [
    {
      id: 1,
      status: "On Going",
      name: "Week 8 Personal Reflection",
      dueDate: "October 30",
      space: "Operating System",
    },
    {
      id: 2,
      status: "To be Deployed",
      name: "OJT Final Output",
      dueDate: "N/A",
      space: "OJT Batch 2025-2026",
    },
    {
      id: 3,
      status: "Already Ended",
      name: "Week 5 Individual Activity",
      dueDate: "September 12",
      space: "Businteg",
    },
    {
      id: 4,
      status: "To be Deployed",
      name: "OJT Final Output",
      dueDate: "N/A",
      space: "OJT Batch 2025-2026",
    },
    {
      id: 5,
      status: "Already Ended",
      name: "Week 5 Individual Activity",
      dueDate: "September 12",
      space: "Businteg",
    },
    {
      id: 6,
      status: "On Going",
      name: "Week 8 Personal Reflection",
      dueDate: "October 30",
      space: "Operating System",
    },
    {
      id: 7,
      status: "To be Deployed",
      name: "OJT Final Output",
      dueDate: "N/A",
      space: "OJT Batch 2025-2026",
    },
  ];

  const getStatusColor = (status) => {
    if (status === "On Going") return "text-green-400";
    if (status === "To be Deployed") return "text-blue-400";
    if (status === "Already Ended") return "text-red-400";
    return "text-gray-400";
  };

  return (
    <div className="flex min-h-screen bg-[#161A20] text-white font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">
        {/* Header */}
        <div className="mb-10 relative">
          {/* Centered Header */}
          <h1 className="text-4xl font-bold text-center mb-3">
            List of Activities
          </h1>
          <div className="absolute right-7 top-full mt-4">
            <Button
              onClick={() => setShowModal(true)}
              style={{
                padding: "0.35rem 1rem", 
                fontSize: "0.8rem",
                borderRadius: "0.375rem",
                backgroundColor: "#3B82F6",
                borderColor: "#3B82F6",
              }}
            >
              Create Activity
            </Button>
          </div>
        </div>


        {/* Table */}
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="border-b border-gray-600 text-gray-300 text-sm">
              <th className="py-3 px-4 font-medium text-center">Status</th>
              <th className="py-3 px-4 font-medium text-center">Activity Name</th>
              <th className="py-3 px-4 font-medium text-center">Due Date</th>
              <th className="py-3 px-4 font-medium text-center">Space Name</th>
              <th className="py-3 px-4 font-medium text-center"></th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr
                key={activity.id}
                className="border-b border-gray-700 hover:bg-[#1F242D] transition"
              >
                <td className={`py-3 px-4 text-center ${getStatusColor(activity.status)}`}>
                  {activity.status}
                </td>
                <td className="py-3 px-4 text-center">{activity.name}</td>
                <td className="py-3 px-4 text-center">{activity.dueDate}</td>
                <td className="py-3 px-4 text-center">{activity.space}</td>
                <td className="py-3 px-4 text-center">
                  <button className="bg-[#3B82F6] hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                    View Activity
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-[#1F242D] p-6 rounded-lg w-[400px] shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Create New Activity
              </h2>

              <form className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Activity Name"
                  className="p-2 bg-[#2A2E36] rounded-md text-white outline-none"
                />
                <input
                  type="text"
                  placeholder="Due Date (e.g. October 30)"
                  className="p-2 bg-[#2A2E36] rounded-md text-white outline-none"
                />
                <input
                  type="text"
                  placeholder="Space Name"
                  className="p-2 bg-[#2A2E36] rounded-md text-white outline-none"
                />
                <select className="p-2 bg-[#2A2E36] rounded-md text-white outline-none">
                  <option>To be Deployed</option>
                  <option>On Going</option>
                  <option>Already Ended</option>
                </select>
              </form>

              <div className="flex justify-end mt-5 gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 bg-gray-600 rounded-md hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfListActivityPage;
