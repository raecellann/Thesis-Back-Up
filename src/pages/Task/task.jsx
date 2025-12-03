import React, { useState } from "react";
import Sidebar from "../component/sidebar";

const statusStyles = {
  Done: "border-green-400 text-green-400",
  "In Progress": "border-blue-400 text-blue-400",
  Missing: "border-red-400 text-red-400",
};

const TaskPage = () => {
  const [tasks, setTasks] = useState([
    {
      name: "Thesis Paper 🧑‍🎓",
      deadline: "April 12, 2025",
      space: "Zeldrick's Space",
      status: "Done",
    },
    {
      name: "OS Activity 🎓",
      deadline: "April 12, 2025",
      space: "Your Space",
      status: "In Progress",
    },
    {
      name: "Personal Reflection 📄",
      deadline: "April 12, 2025",
      space: "Nathaniel's Space",
      status: "Missing",
    },
  ]);

  const [openIndex, setOpenIndex] = useState(null);

  const handleStatusChange = (index, newStatus) => {
    const updated = [...tasks];
    updated[index].status = newStatus;
    setTasks(updated);
    setOpenIndex(null);
  };

  return (
    <div className="flex font-sans min-h-screen bg-[#161A20]">
      <Sidebar />

      <div className="flex-1 p-10 text-white">
        <h1 className="text-4xl font-bold text-center mb-10">Task</h1>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            To Do Lists 📚
          </h2>

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
              {tasks.map((task, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-[#1E222A] transition"
                >
                  <td className="py-3 px-4">
                    <div className="relative inline-block">
                      {/* BUTTON */}
                      <button
                        onClick={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }
                        className={`bg-black px-4 py-1 rounded-full border ${statusStyles[task.status]} flex items-center gap-2`}
                      >
                        {task.status}
                        <span className="text-xs">▼</span>
                      </button>

                      {/* DARK DROPDOWN */}
                      {openIndex === index && (
                        <div className="absolute left-0 mt-2 w-36 bg-black border border-gray-700 rounded-md z-50">
                          {Object.keys(statusStyles).map((st) => (
                            <button
                              key={st}
                              onClick={() => handleStatusChange(index, st)}
                              className="w-full text-left px-3 py-2 text-gray-200 hover:bg-[#2A303A] rounded-md"
                            >
                              {st}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </td>

                  <td className="py-3 px-4">
                    <a
                      href="/task-view"
                      className="text-blue-400 hover:text-blue-300 hover:underline flex items-center gap-2"
                    >
                      {task.name}
                    </a>
                  </td>

                  <td className="py-3 px-4">{task.deadline}</td>
                  <td className="py-3 px-4">{task.space}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;