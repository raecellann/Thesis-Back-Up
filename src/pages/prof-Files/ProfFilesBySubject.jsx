import React, { useState } from "react";
import ProfSidebar from "../component/profsidebar";
import Button from "../component/Button";
import { FolderIcon } from "@heroicons/react/24/outline";  

const ProfFilesBySubject = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedYear, setSelectedYear] = useState("");

  const subjectsData = {
    1: {
      "CS THESIS 1": [
        { status: "Posted", fileName: "Week 6 Thesis", datePosted: "July 24", spaceName: "CS THESIS 1 - 1SY2025-2026", posted: true },
        { status: "To be Uploaded", fileName: "Advanced Algorithms", datePosted: "Aug 15", spaceName: "CS THESIS 1 - 1SY2025-2026", posted: false },
      ],
      "BUSINTEG 1": [
        { status: "Posted", fileName: "Basic File Concepts", datePosted: "Oct 10", spaceName: "BUSINTEG - 1SY2025-2026", posted: true },
      ],
    },
    2: {
      "CS THESIS 2": [
        { status: "Posted", fileName: "Thesis Proposal", datePosted: "Sep 10", spaceName: "CS THESIS 2 - 2SY2025-2026", posted: true },
      ],
      "BUSINTEG 2": [
        { status: "Posted", fileName: "Integration Techniques", datePosted: "Nov 5", spaceName: "BUSINTEG - 2SY2025-2026", posted: true },
      ],
    },
    3: {
      "DATA STRUCTURES 3": [
        { status: "To be Uploaded", fileName: "Advanced Trees", datePosted: "Dec 1", spaceName: "DATA STRUCTURES - 3SY2025-2026", posted: false },
      ],
      "ANALYSIS 3": [
        { status: "Posted", fileName: "Fourier Transform Lecture", datePosted: "Sep 15", spaceName: "ANALYSIS - 3SY2025-2026", posted: true },
      ],
    },
    4: {
      "DATA STRUCTURES 4": [
        { status: "Posted", fileName: "Graphs & Hashing", datePosted: "Feb 20", spaceName: "DATA STRUCTURES - 4SY2025-2026", posted: true },
      ],
      "ML 4": [
        { status: "To be Uploaded", fileName: "Neural Networks Overview", datePosted: "Mar 10", spaceName: "ML - 4SY2025-2026", posted: false },
      ],
    },
  };

  const yearOptions = ["", "1", "2", "3", "4"];

  const getFilteredSubjects = () => {
    const yearNum = selectedYear ? parseInt(selectedYear) : null;
    if (yearNum && subjectsData[yearNum]) {
      return Object.keys(subjectsData[yearNum]);
    }
    return Object.values(subjectsData)
      .flatMap((subjObj) => Object.keys(subjObj));
  };

  const getFilesForSubject = () => {
    if (!selectedSubject) return [];
    const yearNum = selectedYear ? parseInt(selectedYear) : null;
    if (yearNum && subjectsData[yearNum]?.[selectedSubject]) {
      return subjectsData[yearNum][selectedSubject];
    }
    for (let y of Object.keys(subjectsData)) {
      if (subjectsData[y][selectedSubject]) {
        return subjectsData[y][selectedSubject];
      }
    }
    return [];
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  const handleBack = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="flex min-h-screen bg-[#0F1217] text-white">
      <ProfSidebar />

      <div className="flex-1 px-10 py-8">
        <div className="mb-4">
          <h1 className="text-4xl font-bold tracking-wide text-center font-grotesque">
            {selectedSubject ? `${selectedSubject} Files` : "Files"}
          </h1>
          {!selectedSubject && (
            <div className="flex justify-end mt-2">
              <div className="flex items-center gap-2">
                <label className="text-gray-300 text-sm">Year Level:</label>
                <select
                  value={selectedYear}
                  onChange={(e) => {
                    setSelectedYear(e.target.value);
                    setSelectedSubject(null); 
                  }}
                  className="px-3 py-1 bg-[#1C2027] rounded-md text-white text-sm outline-none"
                >
                  <option value="">All Years</option>
                  {yearOptions.slice(1).map((y) => (
                    <option key={y} value={y}>
                      {y} Year
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        <hr className="border-gray-700 mb-8" />

        {!selectedSubject ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredSubjects().map((subject) => (
              <div
                key={subject}
                onClick={() => handleSubjectClick(subject)}
                className="bg-[#1A1F26] hover:bg-[#242A33] p-6 rounded-xl cursor-pointer flex items-center gap-3 transition shadow-sm"
              >
                <FolderIcon className="h-5 w-5 text-gray-400" />
                <p className="text-sm font-inter font-bold">{subject}</p>
              </div>
            ))}
          </div>
        ) : (
          <>
            <Button
              onClick={handleBack}
              style={{
                padding: "0.35rem 1rem",
                fontSize: "0.8rem",
                borderRadius: "0.4rem",
                backgroundColor: "#6B7280",
              }}
            >
              ← Back to Subjects
            </Button>

            <table className="w-full text-left border-collapse mt-2">
              <thead>
                <tr className="border-b border-gray-700 text-gray-300 text-sm">
                  <th className="py-3">Status</th>
                  <th className="py-3">File Name</th>
                  <th className="py-3">Date Posted</th>
                  <th className="py-3">Space Name</th>
                  <th className="py-3"></th>
                </tr>
              </thead>
              <tbody>
                {getFilesForSubject().map((file, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-800 hover:bg-[#1A1F26] transition"
                  >
                    <td
                      className={`py-4 ${
                        file.posted ? "text-green-400" : "text-blue-400"
                      }`}
                    >
                      {file.status}
                    </td>
                    <td className="py-4">{file.fileName}</td>
                    <td className="py-4">{file.datePosted}</td>
                    <td className="py-4">{file.spaceName}</td>
                    <td className="py-4 text-right">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
                        {file.status === "Posted" ? "View File" : "Upload"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfFilesBySubject;
