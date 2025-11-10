import React, { useState } from "react";
import Sidebar from "../component/sidebar";

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const profileName = "Zeldrick Jesus"; // fixed name

  // Upload profile picture
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex font-grotesque min-h-screen bg-[#161A20] text-white leading-[1.2] font-semibold">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10 flex flex-col items-center">
        <div className="w-full max-w-5xl">
          {/* Title Section */}
          <h1 className="text-4xl font-bold text-center mb-2">Your Profile</h1>
          <p className="text-gray-300 mb-8 text-center">
            View and edit all your information here
          </p>

          <div className="flex flex-wrap gap-8 justify-center">
            {/* Profile Card */}
            <div className="bg-[#1E222A] rounded-2xl p-6 w-72 text-center shadow-lg border border-white">
              
              {/* Hidden File Input */}
              <input
                type="file"
                id="upload-img"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />

              {/* Profile Image (Clickable for Upload) */}
              <div
                className="mt-4 cursor-pointer group"
                onClick={() => document.getElementById("upload-img").click()}
              >
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-40 h-40 mx-auto rounded-xl object-cover border-4 border-[#3A7BFF] group-hover:opacity-80 transition"
                  />
                ) : (
                  <div className="w-40 h-40 mx-auto rounded-xl border-4 border-dashed border-[#3A7BFF] flex items-center justify-center text-gray-400 text-sm group-hover:text-white transition">
                    Upload Image
                  </div>
                )}
              </div>

              {/* Fixed Profile Name */}
              <h2 className="text-xl font-bold mt-4">{profileName}</h2>
              <p className="text-[#3A7BFF] mt-1 text-sm font-medium">Student</p>
            </div>

            {/* Personal Details */}
            <div className="bg-[#1E222A] rounded-2xl flex-1 p-8 border border-white shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Personal Details</h3>
                <button className="text-xs bg-[#3A7BFF] px-3 py-1 rounded-md font-semibold hover:bg-[#5592ff] transition-all">
                  Edit Profile
                </button>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-[#2A2E36] p-2 rounded-md w-full outline-none text-white border border-white"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-[#2A2E36] p-2 rounded-md w-full outline-none text-white border border-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-[#2A2E36] p-2 rounded-md col-span-2 outline-none text-white border border-white"
                />
              </div>

              {/* Select and Gender */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <select className="bg-[#2A2E36] p-2 rounded-lg outline-none border border-white text-white">
                  <option>Accountancy</option>
                  <option>Business Administration</option>
                  <option>Computer Science</option>
                  <option>Education</option>
                  <option>Hospitality Management</option>
                  <option>Tourism Management</option>
                </select>

                <select className="bg-[#2A2E36] p-2 rounded-lg outline-none border border-white text-white">
                  <option>4th Year</option>
                  <option>3rd Year</option>
                  <option>2nd Year</option>
                  <option>1st Year</option>
                </select>

                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-1">
                    <input type="radio" name="gender" className="accent-[#3A7BFF]" /> Male
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="gender"
                      defaultChecked
                      className="accent-[#3A7BFF]"
                    />{" "}
                    Female
                  </label>
                </div>
              </div>

              {/* Bio */}
              <div>
                <textarea
                  placeholder='“ If coding is for everyone, then I’m not everyone. ”'
                  className="bg-[#2A2E36] p-3 rounded-md w-full h-20 outline-none text-white resize-none border border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;