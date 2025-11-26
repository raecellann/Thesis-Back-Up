import React, { useState } from "react";
import { encryptData, decryptData } from "../../hooks/useLocalStorage";
import Button from "@/pages/component/Button";

const LandingPage = () => {
  const [showMainPage, setShowMainPage] = useState(false);

  const run = async () => {
    const encrypted = await encryptData({ hello: "world" });
    const decrypted = await decryptData(encrypted);
    console.log({ encrypted, decrypted });
  };

  run();

  return (
    <div className="font-sans min-h-screen relative overflow-hidden bg-[#FDFBEE]">

      {/* Top Blue Navbar with curve */}
      <div className="w-full text-white py-4 px-10 relative overflow-hidden z-10">

        {/* Navbar Content */}
        <header className="flex justify-between items-center w-full relative z-20">
          {/* Logo */}
          <div className="flex items-center gap-2 mt-2">
            <img src="/src/assets/LandingPage/LOGO.png" alt="Logo" className="w-[80px] h-[60px]"/>
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex gap-10 font-medium text-white absolute left-1/2 transform -translate-x-1/2">
            <a href="#about" className="text-white hover:text-[#ffffff]">About</a>
            <a href="#feature" className="text-white hover:text-[#ffffff]">Feature</a>
            <a href="#contact" className="text-white hover:text-[#ffffff]">Contact Us</a>
          </nav>

          {/* Log In Button */}
          <Button
            className="px-5 py-2"
            style={{
              background: "linear-gradient(180deg, #6366f1 0%, #4f46e5 100%)",
              borderRadius: "10px",
              fontSize: "15px",
            }}
          >
            Log In
          </Button>
        </header>

        {/* Header Wave on Navbar */}
        <img
          src="/src/assets/LandingPage/header wave.png"
          alt="Header Wave"
          className="absolute bottom-[1px] left-0 w-full z-10 h-full"
        />
      </div>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row justify-between items-center px-10 lg:px-28 mt-2 relative z-20">

        {/* Left Side */}
        <div className="w-full md:w-1/2 max-w-[550px]">
          <h1 className="text-5xl md:text-4xl font-extrabold leading-tight">
            <span className="text-[#1D4ED8]">Wherever</span>
            <span className="text-black"> you are,</span>
            <br />
            <span className="text-[#3B82F6]">Learn Together!</span>
          </h1>

          <p className="mt-6 text-gray-800 text-lg leading-relaxed">
            ImmacuLearn transforms the way you experience education by offering a seamless,
            engaging, and collaborative platform designed for both students and educators.
          </p>

          <div className="mt-6">
            <Button
              onClick={() => setShowMainPage(true)}
              className="px-7 py-3 shadow-lg"
              style={{
                background: "linear-gradient(180deg, #6366f1 0%, #4f46e5 100%)",
                borderRadius: "10px",
                fontSize: "1.1rem",
              }}
            >
              Explore Now
            </Button>
          </div>
        </div>

        {/* Right Side with Figma elements */}
        <div className="relative w-full md:w-1/2 flex justify-end mt-5 md:mt-0">
          {/* Main Interactive Image */}
          <img
            src="/src/assets/LandingPage/sample.svg"
            alt="Students"
            className="relative w-[600px] z-10"
          />
        </div>
      </main>

      {/* School Image Section */}
      <div className="w-full mt-5">
        <img
          src="/src/assets/LandingPage/school.svg"
          alt="School"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Popup for Explore Now */}
      {showMainPage && (
        <div className="fixed inset-0 z-50 bg-white">
          <h1 className="text-center mt-20 text-3xl">Main Page Content Here</h1>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
