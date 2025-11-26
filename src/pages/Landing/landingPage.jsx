import React, { useState } from "react";
import { encryptData, decryptData } from "../../hooks/useLocalStorage";
import Button from "@/pages/component/Button";

const LandingPage = () => {
  const [showMainPage, setShowMainPage] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardsData = [
    {
      front: "Real-time Collaboration",
      back: "Collaborate instantly with peers on notes, tasks, and projects.",
      icon: "/src/assets/LandingPage/Calendar.png",
    },
    {
      front: "Organized Learning",
      back: "Manage deadlines, courses, and learning materials all in one place.",
      icon: "/src/assets/LandingPage/file.png",
    },
    {
      front: "Progress Tracking",
      back: "Track your learning journey and stay motivated with visual tools.",
      icon: "/src/assets/LandingPage/LOGO.png",
    },
  ];

  const run = async () => {
    const encrypted = await encryptData({ hello: "world" });
    const decrypted = await decryptData(encrypted);
    console.log({ encrypted, decrypted });
  };

  run();

  return (
    <div className="font-sans min-h-screen relative overflow-hidden bg-[#FDFBEE]">
      {/* NAVBAR */}
      <div className="w-full text-white py-4 px-10 relative overflow-hidden z-10">
        <header className="flex justify-between items-center w-full relative z-20">
          <div className="flex items-center gap-2 mt-2">
            <img
              src="/src/assets/LandingPage/LOGO.png"
              alt="Logo"
              className="w-[80px] h-[60px]"
            />
          </div>

          <nav className="hidden md:flex gap-10 font-medium text-white absolute left-1/2 transform -translate-x-1/2">
            <a href="#about">About</a>
            <a href="#feature">Feature</a>
            <a href="#contact">Contact Us</a>
          </nav>

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

        <img
          src="/src/assets/LandingPage/header wave.png"
          alt="Header Wave"
          className="absolute bottom-[1px] left-0 w-full z-10 h-full"
        />
      </div>

      {/* HERO SECTION */}
      <main className="flex flex-col md:flex-row justify-between items-center px-10 lg:px-28 mt-2 relative z-20">
        <div className="w-full md:w-1/2 max-w-[550px]">
          <h1 className="text-5xl md:text-4xl font-extrabold leading-tight">
            <span className="text-[#1D4ED8]">Wherever</span>
            <span className="text-black"> you are,</span>
            <br />
            <span className="text-[#3B82F6]">Learn Together!</span>
          </h1>

          <p className="mt-6 text-gray-800 text-lg leading-relaxed">
            ImmacuLearn transforms the way you experience education by offering
            a seamless, engaging, and collaborative platform designed for both
            students and educators.
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

        <div className="relative w-full md:w-1/2 flex justify-end mt-5 md:mt-0">
          <img
            src="/src/assets/LandingPage/sample.svg"
            alt="Students"
            className="relative w-[600px] z-10"
          />
        </div>
      </main>

      {/* SCHOOL SECTION */}
      <div className="w-full mt-5 relative">
        <img
          src="/src/assets/LandingPage/school.svg"
          alt="School"
          className="w-full h-auto object-cover"
        />

        <div className="absolute top-10 ml-10 text-left font-grotesque">
          <h2 className="text-3xl md:text-4xl text-white leading-tight">
            Improve your <span className="font-bold">study habit</span> with us!
          </h2>
          <p className="mt-2 text-lg md:text-xl text-white">
            Connect with your classmates and teachers!
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 border-2 border-white text-white font-bold text-[18px] rounded-lg cursor-pointer hover:bg-white hover:text-black transition duration-300">
            Create account now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* FEATURE SECTION */}
      <section
        className="w-full bg-[#FDFBEE] py-16 px-10 lg:px-28 flex flex-col md:flex-row items-start gap-10 font-grotesque relative"
        id="feature"
      >
        {/* ⭐ ASTERISK BEHIND (from Figma) */}
        <img
          src="/src/assets/LandingPage/asterisk.png"
          className="absolute left-[-10px] top-[350px] w-[180px] z-0"
          alt="asterisk"
        />

        {/* ➤ GREEN ARROW (Figma position) */}
        <img
          src="/src/assets/LandingPage/arrow.png"
          className="absolute left-[200px] top-[360px] w-[120px] z-20"
          alt="arrow"
        />

        {/* LEFT TEXT */}
        <div className="md:w-1/2 text-left relative z-30">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D4ED8]">
            Make your teamwork more organized with us.
          </h2>

          <p className="text-black mt-4 text-sm font-inter">
            Designed to enhance your learning experience through intuitive and
            collaborative tools. Learn faster, collaborate smarter, and stay
            organized effortlessly.
          </p>

          <Button
            className="mt-6 px-7 py-3 shadow-lg"
            style={{
              background: "linear-gradient(180deg, #6366f1 0%, #4f46e5 100%)",
              borderRadius: "10px",
              fontSize: "1.1rem",
            }}
          >
            Learn More
          </Button>
        </div>

        {/* RIGHT SIDE – STACKED CARDS */}
        <div className="md:w-1/2 flex justify-center items-center relative h-64 z-20">
          {/* Left Arrow */}
          <button
            onClick={() =>
              setActiveIndex(
                (prev) => (prev - 1 + cardsData.length) % cardsData.length
              )
            }
            className="absolute left-0 z-40 p-2 rounded-full shadow-md
             bg-black text-white 
             hover:bg-[#1D4ED8] transition"
          >
            &#8592;
          </button>

          {/* Cards */}
          {cardsData.map((card, index) => {
            const isActive = index === activeIndex;
            const isNext = index > activeIndex;
            const isPrev = index < activeIndex;

            return (
              <div
                key={index}
                className={`absolute w-80 h-52 rounded-xl shadow-lg border-2 flex flex-row items-center justify-between p-6 cursor-pointer transition-all duration-500
            ${
              isActive
                ? "z-30 bg-[#1D4ED8] text-white scale-100 translate-y-0 rotate-0"
                : "bg-white text-black"
            }
            ${
              isNext
                ? "z-20 translate-x-12 translate-y-4 rotate-3 scale-95"
                : ""
            }
            ${
              isPrev
                ? "z-10 -translate-x-12 -translate-y-4 -rotate-3 scale-95 opacity-50"
                : ""
            }
          `}
              >
                <div>
                  <h3
                    className={`font-bold text-xl ${
                      isActive ? "text-white" : "text-black"
                    }`}
                  >
                    {card.front}
                  </h3>
                  <p
                    className={`text-base ${
                      isActive ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {card.back}
                  </p>
                </div>
                <img src={card.icon} alt={card.front} className="w-20 h-20" />
              </div>
            );
          })}

          {/* Right Arrow */}
          <button
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % cardsData.length)
            }
            className="absolute right-0 z-40 p-2 rounded-full shadow-md
             bg-black text-white 
             hover:bg-[#1D4ED8] transition"
          >
            &#8594;
          </button>
        </div>
      </section>

      {/* ========================= BLUE DIVIDER WITH MARQUEE ========================= */}
      <div className="relative w-full mt-16">
        {/* Blue Divider with Marquee (above asterisk) */}
        <div className="w-full h-12 bg-[#4D9BEF] flex items-center justify-center overflow-hidden relative z-40">
          <div className="absolute whitespace-nowrap animate-marquee">
            {Array(10)
              .fill(
                <>
                  <span className="text-white text-xl font-bold mx-4">
                    Create your account for free!
                  </span>
                  <span className="text-white text-xl font-bold mx-2">•</span>
                </>
              )
              .map((el, i) => (
                <React.Fragment key={i}>{el}</React.Fragment>
              ))}
          </div>
        </div>
      </div>

      <style>
        {`
    @keyframes marquee {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
    .animate-marquee {
      display: inline-block;
      animation: marquee 40s linear infinite;
    }
  `}
      </style>
    </div>
  );
};

export default LandingPage;
