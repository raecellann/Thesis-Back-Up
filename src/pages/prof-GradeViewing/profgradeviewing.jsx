import React, { useState } from "react";
import Sidebar from "../component/profsidebar";

const ProfGradeRecordPage = () => {
  const [yearLevel, setYearLevel] = useState("1ST YEAR");
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Mock data grouped by year level
  const subjectsByYear = {
    "1ST YEAR": [
      "BIOLOGY-1SY2025-2026",
      "MMW (2025-2026)",
      "INTRO TO PROGRAMMING (2025-2026)",
    ],
    "2ND YEAR": [
      "DATAStruct (2025-2026)",
      "OOP (2025-2026)",
      "DISCRETE MATH (2025-2026)",
    ],
    "3RD YEAR": [
      "CS ELEC1 - 1SY2025-2026",
      "OPERATING SYSTEMS (2025-2026)",
      "BUSINTEG-1SY2025-2026",
    ],
    "4TH YEAR": [
      "THESIS 1 (2025-2026)",
      "CAPSTONE (2025-2026)",
      "IT PRACTICUM (2025-2026)",
    ],
  };

  // Mock student grade data
  const studentGrades = [
    { name: "Abesamis, Aaron", prelim: 90, midterm: 89, preFinal: 85, final: 90 },
    { name: "Adriano, Mary Ann", prelim: 85, midterm: 87, preFinal: 80, final: 90 },
    { name: "Abesamis, Aaron", prelim: 90, midterm: 89, preFinal: 85, final: 90 },
    { name: "Adriano, Mary Ann", prelim: 85, midterm: 87, preFinal: 80, final: 90 },
  ];

  return (
    <div className="flex min-h-screen bg-[#161A20] text-white font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-center">Grade Record</h1>
            {selectedSubject && (
              <p className="text-gray-300 text-center mt-1 text-sm">
                Subject Name: <span className="font-semibold">{selectedSubject}</span>
              </p>
            )}
          </div>

          {/* Top Bar with Back Button and Year Level Dropdown */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1">
              {selectedSubject && (
                <button
                  onClick={() => setSelectedSubject(null)}
                  className="text-gray-300 text-sm flex items-center gap-1 hover:text-white transition bg-transparent border-none"
                >
                  ← Back
                </button>
              )}
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-300">Year Level:</label>
              <select
                value={yearLevel}
                onChange={(e) => {
                  setYearLevel(e.target.value);
                  setSelectedSubject(null); // reset when year changes
                }}
                className="bg-[#1F242D] border border-gray-600 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 text-white appearance-none"
              >
                <option>1ST YEAR</option>
                <option>2ND YEAR</option>
                <option>3RD YEAR</option>
                <option>4TH YEAR</option>
              </select>
            </div>
          </div>
          
          {/* Horizontal Line */}
          <div className="border-t border-gray-700"></div>
        </div>

        {/* Folder View */}
        {!selectedSubject && (
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-5">
              {subjectsByYear[yearLevel].map((subject, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSubject(subject)}
                  className="w-56 bg-[#1F242D] hover:bg-[#2A2E36] text-left px-4 py-3 rounded-md flex items-center gap-3 transition-all shadow-md"
                >
                  <span className="text-yellow-400 text-xl">📁</span>
                  <span className="font-semibold text-sm">{subject}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Grade Table View */}
        {selectedSubject && (
          <div className="mt-4">

            <table className="w-full border-collapse text-center text-sm">
              <thead>
                <tr className="border-b border-gray-600 text-gray-300">
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4">Prelim</th>
                  <th className="py-3 px-4">Midterm</th>
                  <th className="py-3 px-4">Pre-Final</th>
                  <th className="py-3 px-4">Final</th>
                  <th className="py-3 px-4">Details</th>
                </tr>
              </thead>
              <tbody>
                {studentGrades.map((student, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-700 hover:bg-[#1F242D] transition"
                  >
                    <td className="py-2 px-4 text-left">{student.name}</td>
                    <td>{student.prelim}</td>
                    <td>{student.midterm}</td>
                    <td>{student.preFinal}</td>
                    <td>{student.final}</td>
                    <td>
                      <button className="text-blue-400 hover:text-blue-300 text-sm bg-transparent border-none p-0">
                        Edit Grade
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfGradeRecordPage;