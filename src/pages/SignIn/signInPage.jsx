import React, { useState } from "react";
import InputField from "@/pages/component/InputField";
import Button from "@/pages/component/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // ✅ track selected role

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role) {
      alert("Please select whether you are a Student or a Professor.");
      return;
    }
    alert(`Logging in as ${role}`);
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center font-sans relative overflow-hidden px-4"
      style={{ backgroundColor: "#FDFBEE" }}
    >
      {/* Decorative Background Images */}
      <img
        src="https://res.cloudinary.com/diws5bcu6/image/upload/v1761577252/freepik__background__93517_1_ww82rt.png"
        alt="Left Illustration"
        className="absolute bottom-0 left-4 w-100 md:w-100"
      />
      <img
        src="https://res.cloudinary.com/diws5bcu6/image/upload/v1761577536/download_1_t1ahpa.png"
        alt="Right Illustration"
        className="absolute bottom-0 right-4 w-100 md:w-100"
      />

      {/* Center Content */}
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          Log in with{" "}
          <span className="text-green-600 font-bold">ImmacuLearn</span> Today!
        </h2>
        <p className="text-gray-800 text-sm md:text-base mt-2 font-medium">
          Experience a smarter way to learn and achieve your goals effortlessly.
        </p>
      </div>

      {/* Login Form Box */}
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-10 w-full max-w-md relative z-10 border border-gray-200">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <h3 className="text-2xl font-bold text-green-700">ImmacuLearn</h3>
          <p className="text-gray-600 text-sm">Log in to continue</p>
        </div>

        {/* Form */}
        <form
          className="flex flex-col gap-4 items-center"
          onSubmit={handleSubmit}
        >
          <InputField
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* ✅ Checkbox Section */}
          <div className="flex justify-center gap-6 mt-2 w-full">
            <label className="flex items-center gap-2 text-gray-800 font-medium">
              <input
                type="checkbox"
                checked={role === "Student"}
                onChange={() => setRole("Student")}
              />
              Student
            </label>
            <label className="flex items-center gap-2 text-gray-800 font-medium">
              <input
                type="checkbox"
                checked={role === "Professor"}
                onChange={() => setRole("Professor")}
              />
              Professor
            </label>
          </div>

          {/* Log in Button */}
          <Button
            type="submit"
            style={{
              width: "30%",
              background: "#000",
            }}
            onClick={handleSubmit}
          >
            Log in
          </Button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-4">
          Check your email inbox for log in credentials.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
