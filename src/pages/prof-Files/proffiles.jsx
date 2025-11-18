import React, { useState } from "react";
import Sidebar from "../component/profsidebar";
import Button from "../component/Button";

const ProfFilePage = () => {
  const [showModal, setShowModal] = useState(false);

  const files = [
    {
      status: "Posted",
      fileName: "LPS CS Thesis 1 – Week 6",
      datePosted: "July 24",
      spaceName: "CS THESIS 1 - 1SY2025-2026",
      button: "View File",
      posted: true,
    },
    {
      status: "To be Uploaded",
      fileName: "Data Mining-Lecture",
      datePosted: "Oct 30",
      spaceName: "BUSINTEG - 1SY2025-2026",
      button: "View File",
      posted: false,
    },
    {
      status: "Posted",
      fileName: "Basic File and Access Concepts-2021",
      datePosted: "Oct 10",
      spaceName: "BUSINTEG - 1SY2025-2026",
      button: "View File",
      posted: true,
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#161A20] text-white font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">
        {/* Header Section */}
        <div className="mb-10 relative">
        {/* Centered Header */}
        <h1 className="text-4xl font-bold text-center mb-3">Files</h1>

        {/* Right-aligned Smaller Button Below Header */}
        <div className="absolute right-5 top-full mt-4">
            <Button
                onClick={() => setShowModal(true)}
                style={{
                    padding: "0.35rem 1rem", // smaller padding
                    fontSize: "0.8rem", // smaller text
                    borderRadius: "0.375rem",
                    backgroundColor: "#3B82F6",
                    borderColor: "#3B82F6",
                }}
                >
                Create or Upload File
                </Button>
            </div>
        </div>

        {/* Table */}
        <table className="w-full text-center border-collapse mt-8">
          <thead>
            <tr className="border-b border-gray-600 text-gray-300 text-sm">
              <th className="py-3 px-4 font-medium text-center">Status</th>
              <th className="py-3 px-4 font-medium text-center">File Name</th>
              <th className="py-3 px-4 font-medium text-center">Date Posted</th>
              <th className="py-3 px-4 font-medium text-center">Space Name</th>
              <th className="py-3 px-4 font-medium text-center"></th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr
                key={index}
                className="border-b border-gray-700 hover:bg-[#1F242D] transition"
              >
                <td
                  className={`py-3 px-4 text-center ${
                    file.posted ? "text-green-400" : "text-blue-400"
                  }`}
                >
                  {file.status}
                </td>
                <td className="py-3 px-4 text-center">{file.fileName}</td>
                <td className="py-3 px-4 text-center">{file.datePosted}</td>
                <td className="py-3 px-4 text-center">{file.spaceName}</td>
                <td className="py-3 px-4 text-center">
                  <button className="bg-[#3B82F6] hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                    {file.button}
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
                Upload New File
              </h2>

              <form className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="File Name"
                  className="p-2 bg-[#2A2E36] rounded-md text-white outline-none"
                />
                <input
                  type="text"
                  placeholder="Date Posted (e.g. Oct 30)"
                  className="p-2 bg-[#2A2E36] rounded-md text-white outline-none"
                />
                <input
                  type="text"
                  placeholder="Space Name"
                  className="p-2 bg-[#2A2E36] rounded-md text-white outline-none"
                />
                <select className="p-2 bg-[#2A2E36] rounded-md text-white outline-none">
                  <option>To be Uploaded</option>
                  <option>Posted</option>
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

export default ProfFilePage;
