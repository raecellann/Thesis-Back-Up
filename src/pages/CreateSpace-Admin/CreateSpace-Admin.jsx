import React, { useState, useEffect } from "react";
import Sidebar from "../component/sidebar";
import InputField from "../component/InputField";
import Button from "../component/Button";
import { ChevronDown } from "lucide-react";

const CreateSpaceAdmin = () => {
  const [spaceName, setSpaceName] = useState("");
  const [numMembers, setNumMembers] = useState(5);
  const [people, setPeople] = useState(Array(5).fill(""));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const coverImage = "/src/assets/HomePage/spaces-cover/cover1.jpg"; // Sample image
  const memberOptions = [2, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    setPeople(Array(numMembers).fill(""));
  }, [numMembers]);

  const handleCreateSpace = () => {
    if (spaceName.trim()) {
      alert(`Space "${spaceName}" created with ${numMembers} members!`);
      setSpaceName("");
      setNumMembers(5);
    } else {
      alert("Please enter a space name.");
    }
  };

  const handleMemberSelect = (value) => {
    setNumMembers(value);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-[#1A1E24] text-white font-inter">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Area */}
      <div className="flex-1 px-20 py-10 overflow-y-auto">
        <h1 className="text-2xl font-bold text-center mb-6">
          Create New Space, Here!
        </h1>

        <div className="bg-[#2A2A2A] rounded-xl p-6 w-[100%] mx-auto">
          {/* Cover Image */}
          <div className="relative">
            <img
              src={coverImage}
              alt="Cover"
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="absolute top-2 right-3 flex space-x-2 text-xs">
              <button className="text-white bg-black/50 px-2 py-1 rounded">
                Change Cover
              </button>
              <button className="text-white bg-black/50 px-2 py-1 rounded">
                Delete Cover
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-4">
            {/* Space Name */}
            <div className="col-span-3">
                <label className="block text-sm mb-1">Space Name:</label>
                <InputField
                placeholder="Enter space name"
                value={spaceName}
                onChange={(e) => setSpaceName(e.target.value)}
                style={{ width: "100%", backgroundColor: "#ffffff" }}
                />
            </div>

            {/* Maximum no. of Members */}
            <div className="col-span-1">
                <label className="block text-sm mb-1">Maximum No. of Members:</label>
                <div className="relative">
                <div
                    className="bg-[#1E1E1E] rounded-lg px-4 py-2 flex justify-between items-center cursor-pointer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <span>({numMembers})</span>
                    <ChevronDown size={18} />
                </div>
                {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 bg-[#1E1E1E] rounded-lg mt-1 z-10 max-h-40 overflow-auto">
                    {memberOptions.map((option) => (
                        <div
                        key={option}
                        className="px-4 py-2 hover:bg-[#3E3E3E] cursor-pointer"
                        onClick={() => handleMemberSelect(option)}
                        >
                        {option}
                        </div>
                    ))}
                    </div>
                )}
                </div>
            </div>
            </div>

          {/* Add People */}
          <div className="mt-6 relative">
            <label className="text-sm">Add People:</label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {people.map((person, index) => (
                <InputField
                  key={index}
                  placeholder="Name or Email"
                  value={person}
                  onChange={(e) =>
                    setPeople([...people.slice(0, index), e.target.value, ...people.slice(index + 1)])
                  }
                  style={{ backgroundColor: "#ffffff" }}
                />
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-8">
            <button className="bg-[#3E3E3E] text-white px-6 py-2 rounded-lg hover:bg-[#4A4A4A]">
              Cancel
            </button>
            <Button onClick={handleCreateSpace} className="bg-[#007AFF] hover:bg-[#2563eb]">
              Save Space
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSpaceAdmin;
