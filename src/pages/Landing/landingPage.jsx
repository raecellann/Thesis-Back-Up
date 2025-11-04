import React, { useState } from "react";
import useSocket from "@/hooks/useSocket.js";
import ChatList from "../User_chats/user_chats"; // import Sidebar/MainPage
import LandingPage2 from "./landingPage2";
import TopFeatures from "./topFeatures";
import { encryptData, decryptData } from "../../hooks/useLocalStorage";

const LandingPage = () => {
  const [showMainPage, setShowMainPage] = useState(false);

  // app = useLocalStorage("sample", {"name": "wilson"}, "secrets")
  
  // encryptData({"sample":"hello world"}, "secrets")

  const run = async () => {
    const encrypted = await encryptData({ hello: "world" });
    const decrypted = await decryptData(encrypted);
    console.log({ encrypted, decrypted });
  };

  run();

  return (
    <div className="max-w-full font-sans bg-gradient-to-r from-white to-[#fef6ff] min-h-screen relative overflow-hidden">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center gap-2">
          <img src="./src/assets/book.png" alt="ImmacuLearn" className="w-8 h-8" />
          <span className="text-xl font-bold">ImmacuLearn</span>
        </div>

        <nav className="flex gap-8 text-lg font-medium">
          <a href="#about" className="text-black hover:text-blue-800">About</a>
          <a href="#feature" className="text-black hover:text-blue-800">Feature</a>
          <a href="#contact" className="text-black hover:text-blue-800">Contact Us</a>
        </nav>

        <a href="" className="relative z-10 text-white font-medium hover:underline">
          Log In
        </a>
      </header>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row items-center justify-between px-8 lg:px-20 mt-10">
        {/* Left Content */}
        <div className="max-w-lg">
          <h1 className="text-[3rem] font-bold leading-snug">
            <span className="text-green-600">Wherever</span> you are, <br />
            <span className="p-16 text-green-600">Learn Together!</span>
          </h1>

          {/* Sign Up Button */}
          {/* <button className="mt-6 px-6 py-2 bg-white border border-black rounded-full shadow-md hover:bg-gray-100 flex items-center gap-2">
            Sign Up <span className="text-green-600 font-bold">→</span>
          </button> */}

          {/* Dashboard Trigger */}
          {/* <button
            onClick={() => setShowMainPage(true)}
            className="mt-6 px-6 py-3 bg-indigo-700 text-white rounded-lg shadow-md hover:bg-indigo-800"
          >
            Go to Dashboard
          </button> */}

          <p className="mt-6 text-gray-800 font-bold">
            ImmacuLearn transforms the way you experience education by offering a seamless, engaging, and collaborative platform designed for both students and educators.
          </p>
          <div className="relative inline-block mt-6">
            <button
              onClick={() => setShowMainPage(true)}
              className="relative ml-2 z-10 px-6 py-3 bg-indigo-700 text-white rounded-lg shadow-md
                    border-[3px] border-black shadow-[6px_6px_0_0_#000]
                    "
            >
              Explore Now
            </button>
            
          </div>
        </div>

        {/* Right Image */} 
        <div className="mt-10 md:mt-0 relative z-10"> 
          <img src="./src/assets/heroes.png" alt="Students Learning" className="w-[600px] max-w-full" /> 
        </div> 
        <div className="absolute right-0 z-0"> 
          <img src="./src/assets/Blob.png" alt="" className="w-[500px] max-w-full" /> 
        </div> 
        <div className="absolute right-0 z-0"> 
          <img src="./src/assets/Vector.png" alt="" /> 
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