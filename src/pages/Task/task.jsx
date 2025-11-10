import React from "react";
import Sidebar from "../component/sidebar";

const TaskPage = () => {
  return (
    <div className="flex font-sans min-h-screen bg-[#161A20]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10 text-white">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-10">Task</h1>

        {/* To Do List Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            To Do Lists 📚
          </h2>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-600 text-left text-gray-400">
                  <th className="py-3 px-4 font-medium">Status</th>
                  <th className="py-3 px-4 font-medium">Task Name</th>
                  <th className="py-3 px-4 font-medium">Deadline</th>
                  <th className="py-3 px-4 font-medium">Space Name</th>
                </tr>
              </thead>
              <tbody>
                {/* Task 1 */}
                <tr className="border-b border-gray-700 hover:bg-[#1E222A] transition">
                  <td className="py-3 px-4">
                    <input type="checkbox" className="accent-blue-500 w-4 h-4" />
                  </td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    Thesis Paper 🧑‍🎓
                  </td>
                  <td className="py-3 px-4">April 12, 2025</td>
                  <td className="py-3 px-4">Zeldrick’s Space</td>
                </tr>

                {/* Task 2 */}
                <tr className="border-b border-gray-700 hover:bg-[#1E222A] transition">
                  <td className="py-3 px-4">
                    <input type="checkbox" className="accent-blue-500 w-4 h-4" />
                  </td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    OS Activity 🎓
                  </td>
                  <td className="py-3 px-4">April 12, 2025</td>
                  <td className="py-3 px-4">Your Space</td>
                </tr>

                {/* Task 3 */}
                <tr className="border-b border-gray-700 hover:bg-[#1E222A] transition">
                  <td className="py-3 px-4">
                    <input type="checkbox" className="accent-blue-500 w-4 h-4" />
                  </td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    Personal Reflection 📄
                  </td>
                  <td className="py-3 px-4">April 12, 2025</td>
                  <td className="py-3 px-4">Nathaniel’s Space</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
