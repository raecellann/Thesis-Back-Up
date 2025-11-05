import React, { useState } from "react";
import useSocket from "@/hooks/useSocket.js";
import ChatList from "../User_chats/user_chats";
import LandingPage2 from "./landingPage2";
import TopFeatures from "./topFeatures";
import { encryptData, decryptData } from "../../hooks/useLocalStorage";
import AnimatedBackground from "@/pages/component/AnimatedBackground";
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
    <div className="font-sans min-h-screen relative overflow-hidden overflow-x-hidden">
      <AnimatedBackground />

      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6 relative z-10">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2">
            <img src="/src/assets/book.png" alt="" className="w-8 h-8" />
            <span className="text-xl font-bold">ImmacuLearn</span>
          </span>
        </div>

        <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-8">
          <a href="#about" className="text-black hover:text-blue-800">
            About
          </a>
          <a href="#feature" className="text-black hover:text-blue-800">
            Feature
          </a>
          <a href="#contact" className="text-black hover:text-blue-800">
            Contact Us
          </a>
        </nav>

        <Button
          className="px-4 py-2"
          style={{
            background: "linear-gradient(180deg, #6366f1 0%, #4f46e5 100%)",
            borderRadius: "8px",
            width: "auto",
          }}
        >
          Log In
        </Button>
      </header>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row items-center justify-between px-8 lg:px-20 relative z-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-green-500">Wherever</span>
            <span className="text-black"> you are,</span>
            <br />
            <span className="text-green-500">Learn Together!</span>
          </h1>

          <p className="mt-8 text-gray-800 text-lg">
            ImmacuLearn transforms the way you experience education by offering
            a seamless, engaging, and collaborative platform designed for both
            students and educators.
          </p>

          <div className="mt-5">
            <Button
              onClick={() => setShowMainPage(true)}
              className="px-6 py-3"
              style={{
                background: "linear-gradient(180deg, #6366f1 0%, #4f46e5 100%)",
                borderRadius: "8px",
                width: "auto",
                fontSize: "1rem",
              }}
            >
              Explore Now
            </Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 relative flex justify-end items-start mt-0 md:mt-0">
          {/* Blob background — flush to top edge, aligned right */}
          <img
            src="/src/assets/Blob.png"
            alt="Background Blob"
            className="absolute right-0 top-0 w-[600px] max-w-full"
            style={{
              filter: "blur(0px)",
              opacity: 0.9,
              marginTop: "0px",
              paddingTop: "0px",
              top: "0",
            }}
          />

          {/* Heroes image — aligned to right, slightly above bottom */}
          <img
            src="/src/assets/heroes.png"
            alt="Students Learning"
            className="w-[550px] relative z-10 max-w-full"
          />
        </div>
      </main>

      {/* Popups */}
      {showMainPage && (
        <div className="fixed inset-0 z-50 bg-white">
          {/* <LandingPage2 /> */}
          <TopFeatures />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
