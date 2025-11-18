import React, { useState, useEffect, useCallback } from "react";
import Cropper from "react-easy-crop";
import Sidebar from "../component/sidebar";
import InputField from "../component/InputField";
import Button from "../component/Button";
import { ChevronDown, X } from "lucide-react";

const CreateSpaceAdmin = () => {
  const [spaceName, setSpaceName] = useState("");
  const [numMembers, setNumMembers] = useState(5);
  const [people, setPeople] = useState(Array(5).fill(""));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCoverModalOpen, setIsCoverModalOpen] = useState(false);
  const [coverImage, setCoverImage] = useState("/src/assets/HomePage/spaces-cover/cover1.jpg");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isCropping, setIsCropping] = useState(false);

  const memberOptions = [2, 4, 5, 6, 7, 8, 9, 10];

  // 💠 Sample color gradients
  const colorOptions = [
    "linear-gradient(45deg, #FFC107, #FF5722)",
    "linear-gradient(45deg, #3F51B5, #2196F3)",
    "linear-gradient(45deg, #9C27B0, #673AB7)",
    "linear-gradient(45deg, #E91E63, #F44336)",
    "linear-gradient(45deg, #4CAF50, #8BC34A)",
    "linear-gradient(45deg, #FF9800, #FFC107)",
    "linear-gradient(45deg, #00BCD4, #009688)",
    "linear-gradient(45deg, #795548, #607D8B)",
  ];

  // 💠 Sample gallery images
  const galleryImages = [
    "/src/assets/HomePage/spaces-cover/cover1.jpg",
    "/src/assets/HomePage/spaces-cover/cover2.jpg",
    "/src/assets/HomePage/spaces-cover/cover3.jpg",
    "/src/assets/HomePage/spaces-cover/grades.jpg",
    "/src/assets/HomePage/spaces-cover/lectures.jpg",
    "/src/assets/HomePage/spaces-cover/space-board.jpg",
  ];

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

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Max file size is 5MB");
      return;
    }

    const url = URL.createObjectURL(file);
    setUploadedImage(url);
    setIsCoverModalOpen(false);
    setIsCropping(true);
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const createCroppedImage = async (imageSrc, croppedAreaPixels) => {
    const image = new Image();
    image.src = imageSrc;
    return new Promise((resolve) => {
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;

        ctx.drawImage(
          image,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          0,
          0,
          croppedAreaPixels.width,
          croppedAreaPixels.height
        );

        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          resolve(url);
        }, "image/jpeg");
      };
    });
  };

  const handleCropSave = async () => {
    if (uploadedImage && croppedAreaPixels) {
      const croppedImageUrl = await createCroppedImage(uploadedImage, croppedAreaPixels);
      setCoverImage(croppedImageUrl);
      setIsCropping(false);
      setUploadedImage(null);
      setIsCoverModalOpen(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#1A1E24] text-white font-inter">
      <Sidebar />

      <div className="flex-1 px-20 py-10 overflow-y-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Create New Space, Here!</h1>

        <div className="bg-[#2A2A2A] rounded-xl p-6 w-[100%] mx-auto">
          {/* Cover Image */}
          <div className="relative">
            <img
              src={coverImage}
              alt="Cover"
              className="w-full h-40 object-cover rounded-lg"
              style={{ background: coverImage.includes("gradient") ? coverImage : "" }}
            />
            <div className="absolute top-2 right-3 flex space-x-2 text-xs">
              <button
                className="text-white bg-black/50 px-2 py-1 rounded"
                onClick={() => setIsCoverModalOpen(true)}
              >
                Change Cover
              </button>
              <button
                className="text-white bg-black/50 px-2 py-1 rounded"
                onClick={() => setCoverImage("")}
              >
                Delete Cover
              </button>
            </div>
          </div>

          {/* Modal for Change Cover */}
          {isCoverModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
              <div className="bg-[#2A2A2A] rounded-lg p-6 w-[600px] relative">
                <button className="absolute top-2 right-2" onClick={() => setIsCoverModalOpen(false)}>
                  <X size={20} />
                </button>

                <h3 className="text-lg font-semibold mb-4">Edit Cover Photo</h3>

                {/* Color Gradient */}
                <div>
                  <p className="text-sm mb-2">Color & Gradient</p>
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {colorOptions.map((color, i) => (
                      <div
                        key={i}
                        className="h-12 rounded cursor-pointer"
                        style={{ background: color }}
                        onClick={() => {
                          setCoverImage(color);
                          setIsCoverModalOpen(false);
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <p className="text-sm mb-2">Gallery</p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {galleryImages.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        className="h-16 w-full object-cover rounded cursor-pointer"
                        onClick={() => {
                          setCoverImage(img);
                          setIsCoverModalOpen(false);
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Upload */}
                <label className="block text-sm mb-1">Upload from computer (max 5MB)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUpload}
                  className="w-full bg-[#1E1E1E] text-sm p-2 rounded"
                />
              </div>
            </div>
          )}

          {/* Cropping Modal */}
          {isCropping && uploadedImage && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
              <div className="bg-[#2A2A2A] rounded-lg p-6 w-[500px] relative">
                <button
                  className="absolute top-2 right-2"
                  onClick={() => {
                    setIsCropping(false);
                    setUploadedImage(null);
                  }}
                >
                  <X size={20} />
                </button>
                <h4 className="text-lg font-semibold mb-4">Crop Your Image</h4>
                <div className="relative h-64 mb-4">
                  <Cropper
                    image={uploadedImage}
                    crop={crop}
                    zoom={zoom}
                    aspect={16 / 9}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                  />
                </div>
                <div className="flex justify-end gap-3">
                  <button
                    className="bg-[#3E3E3E] px-4 py-2 rounded-lg hover:bg-[#4A4A4A]"
                    onClick={() => {
                      setIsCropping(false);
                      setUploadedImage(null);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-[#007AFF] px-4 py-2 rounded-lg hover:bg-[#2563eb]"
                    onClick={handleCropSave}
                  >
                    Crop & Save
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Space Name + Members */}
          <div className="mt-6 grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <label className="block text-sm mb-1">Space Name:</label>
              <InputField
                placeholder="Enter space name"
                value={spaceName}
                onChange={(e) => setSpaceName(e.target.value)}
                style={{ width: "100%", backgroundColor: "#ffffff" }}
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm mb-1">Maximum No. of Members:</label>
              <div
                className="bg-[#1E1E1E] rounded-lg px-4 py-2 flex justify-between items-center cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>({numMembers})</span>
                <ChevronDown size={18} />
              </div>
              {isDropdownOpen && (
                <div className="absolute bg-[#1E1E1E] mt-1 rounded-lg max-h-40 overflow-auto z-10">
                  {memberOptions.map((option) => (
                    <div
                      key={option}
                      className="px-4 py-2 hover:bg-[#3E3E3E] cursor-pointer"
                      onClick={() => setNumMembers(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Add People */}
          <div className="mt-6">
            <label className="text-sm">Add People:</label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {people.map((person, index) => (
                <InputField
                  key={index}
                  placeholder="Name or Email"
                  value={person}
                  onChange={(e) =>
                    setPeople([
                      ...people.slice(0, index),
                      e.target.value,
                      ...people.slice(index + 1),
                    ])
                  }
                  style={{ backgroundColor: "#ffffff" }}
                />
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-8">
            <button className="bg-[#3E3E3E] px-6 py-2 rounded-lg hover:bg-[#4A4A4A] text-xs ">
              Cancel
            </button>
            <Button onClick={handleCreateSpace} className="bg-[#007AFF] hover:bg-[#2563eb] text-xs">
              Save Space
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSpaceAdmin;
