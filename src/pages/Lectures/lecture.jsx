import React from "react";
import Sidebar from "../component/sidebar";

const LecturesPage = () => {
  return (
    <div className="flex font-sans min-h-screen bg-[#161A20] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center p-10">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-10 font-grotesque">Lectures</h1>

        {/* Lecture Card */}
        <div className="w-full max-w-3xl bg-[#1E242E] rounded-xl p-8 shadow-lg">
          {/* Lecture Info */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-white">
              Calculus: Lecture 3
            </h2>
            <div className="grid grid-cols-2 text-sm text-gray-400 mb-4">
              <div>
                <p>
                  <span className="font-medium text-gray-300">File Posted:</span>{" "}
                  April 05, 2025
                </p>
                <p>
                  <span className="font-medium text-gray-300">Uploaded By:</span>{" "}
                  Zeldrick Delos Santos
                </p>
              </div>
            </div>

            {/* File Button */}
            <button className="flex items-center gap-2 bg-[#2E3440] hover:bg-[#3A4250] text-white px-4 py-2 rounded-md text-sm">
              <img
                src="/src/assets/lectures/pdf-icon.svg"
                alt="PDF Icon"
                className="w-5 h-5"
              />
              Lecture.pdf <span className="text-gray-400 text-xs">(5mb)</span>
            </button>
          </div>

          {/* Abstract Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-200">Abstract</h3>
            <div className="text-gray-300 text-sm leading-relaxed space-y-3">
              <p>
                Today we covered integration by parts. The formula for integration
                by parts is given by:
              </p>
              <p className="font-mono text-center text-white">
                ∫u dv = uv − ∫v du
              </p>
              <p>
                Where <span className="font-semibold">u</span> and{" "}
                <span className="font-semibold">v</span> are functions of{" "}
                <span className="font-semibold">x</span>. The process involves
                choosing <span className="font-semibold">u</span> and{" "}
                <span className="font-semibold">dv</span> such that the integral on
                the right-hand side is easier to solve than the original integral.
              </p>
              <p>
                We also discussed the method of partial fractions, which allows us
                to break down complex fractions into simpler ones, making them
                easier to integrate.
              </p>

              {/* Example */}
              <div className="mt-4">
                <p className="font-semibold text-gray-200">Example:</p>
                <p className="font-mono text-center text-white">
                  ∫(3x² − 2x + 1) / (x³ − x² + x − 1) dx
                </p>
                <p>
                  To integrate this, we would first decompose the fraction into
                  partial fractions and then integrate each one individually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturesPage;
