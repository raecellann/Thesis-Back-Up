import React, { useState } from "react";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

const InitialInvitePage = () => {
  const [invite1, setInvite1] = useState("");
  const [invite2, setInvite2] = useState("");
  const [invite3, setInvite3] = useState("");
  const [next, setNext] = useState(false);
  const [skip, setSkip] = useState(false);

  return (
    <div className="font-sans min-h-screen relative overflow-hidden overflow-x-hidden bg-[#FDFBEE]">
      {/* Navbar */}
      <header className="relative z-10 flex justify-between items-center py-6 text-white">
        {/* Background wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <img
            className="w-full"
            src="./src/assets/space-creation/header-wave.png"
            alt="header-wave"
          />
        </div>

        {/* Logo */}
        <div className="flex relative z-10 items-center gap-2 px-8 mt-4">
          <img
            src="./src/assets/book.png"
            alt="ImmacuLearn"
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-white drop-shadow-lg font-grotesque">
            ImmacuLearn
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center justify-between px-8 lg:px-20 mt-10 relative z-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black font-grotesque text-center">
            Invite your team
          </h1>

          <p className="text-black text-lg font-grotesque font-bold text-center leading-[1.2]">
            You’re all set! You may invite your teammates to collaborate with you!
          </p>

          {/* Input Fields */}
          <div className="space-y-4 flex flex-col">
            <label className="block text-gray-900 font-semibold">
              Invite your teammates (username or email):
            </label>

            {/* Invite Field 1 */}
            <InputField
              type="text"
              value={invite1}
              onChange={(e) => setInvite1(e.target.value)}
              placeholder="Member 1"
              className="w-[60%]"
              align="right"
            />

            {/* Invite Field 2 */}
            <InputField
              type="text"
              value={invite2}
              onChange={(e) => setInvite2(e.target.value)}
              placeholder="Member 2"
              className="w-[60%]"
            />

            {/* Invite Field 3 */}
            <InputField
              type="text"
              value={invite3}
              onChange={(e) => setInvite3(e.target.value)}
              placeholder="Member 3"
              className="w-[60%]"
            />

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
            <Button
            className="text-m py-1 px-4 font-grotesque"
            style={{
                background: "linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)",
                borderRadius: "8px",
            }}
            >
            Next
            </Button>
              <Button
                onClick={() => setSkip(true)}
                style={{
                  background: "#e5e7eb",
                  color: "#000",
                  borderRadius: "8px",
                  padding: "0.75rem 1.5rem",
                  fontFamily: '"Darker Grotesque", sans-serif',
                }}
              >
                Skip for now
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 relative">
          {/* Optional blue shape */}
          <div className="absolute -top-10 right-20 w-[300px] h-[300px] bg-blue-300 rounded-full opacity-40 blur-3xl"></div>

          {/* Laptop image */}
          <img
            src="./src/assets/space-creation/right-image.png"
            alt="Laptop Preview"
            className="relative z-10 max-w-full"
            style={{ width: "380px", height: "auto" }}
          />
        </div>
      </main>
    </div>
  );
};

export default InitialInvitePage;
