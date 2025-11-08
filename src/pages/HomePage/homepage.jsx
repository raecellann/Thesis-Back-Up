import React, { useState, useEffect } from "react";
import Sidebar from "../component/sidebar";
import Button from "../component/Button";

const HomePage1 = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [greeting, setGreeting] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const now = new Date();
    const month = now.toLocaleString('default', { month: 'long' });
    const day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear();
    const weekday = now.toLocaleString('default', { weekday: 'long' });
    setCurrentDate(`${month} ${day}, ${year} (${weekday})`);

    const hour = now.getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');

    setCurrentMonth(now.getMonth());
    setCurrentYear(now.getFullYear());
    setToday(now);
  }, []);

  return (
    <div className="flex font-sans min-h-screen bg-[#161A20] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex p-8 gap-6">
        {/* CENTER CONTENT */}
        <div className="flex-1">
        {/* Title and Date ABOVE the card */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white font-grotesque">
            Get Productive Today!
          </h2>
          <p className="text-gray-400 text-sm font-inter">{currentDate}</p>
        </div>

          {/* Header Card */}
          <div className="bg-[#1E242E] rounded-xl p-6 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-lg font-semibold text-[#B0C4FF] mb-1">
                  {greeting}, Raecell
                </h1>
                <p className="text-gray-400 text-sm">
                  Meet your classmates and collaborate with them.
                </p>
                <p className="text-gray-400 text-sm">
                  Join space or create your own.
                </p>
                <div className="flex gap-3 mt-4">
                  <Button>Create Space</Button>
                  <Button>Join Space</Button>
                </div>
              </div>
              <div>
                <img
                  src="/src/assets/HomePage/book-pen.svg"
                  alt="Book and Pen"
                  className="w-32 h-32 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Your Spaces Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">Your Space</h2>
              <button className="text-[#007AFF] hover:underline text-sm">View All</button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {["My Space Board", "Lectures", "Subject Grades"].map((title, i) => (
                <div key={i} className="bg-[#1E242E] p-4 rounded-lg hover:bg-[#242B38] transition">
                  <div className="h-28 bg-[#2E3440] rounded-lg mb-3"></div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-gray-500 text-xs mt-1">Opened 1 min ago</p>
                </div>
              ))}
            </div>
          </div>

          {/* Spaces Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">Spaces</h2>
              <button className="text-[#007AFF] hover:underline text-sm">View All</button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {["Zi’s Space", "Nath’s Space", "Wilson’s Space"].map((title, i) => (
                <div key={i} className="bg-[#1E242E] p-4 rounded-lg hover:bg-[#242B38] transition">
                  <div className="h-28 bg-[#2E3440] rounded-lg mb-3"></div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-gray-500 text-xs mt-1">Opened 3 mins ago</p>
                </div>
              ))}
            </div>
          </div>

          {/* Articles Section */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Articles</h2>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-[#1E242E] h-32 rounded-lg hover:bg-[#242B38] transition"></div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-80 bg-[#1E242E] rounded-xl p-6 flex flex-col justify-between">
          {/* Profile */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-20 h-20 rounded-full bg-[#2E3440] mb-3"></div>
            <h3 className="text-lg font-semibold">Raecell Ann</h3>
            <p className="text-gray-400 text-sm">Student</p>
            <button className="mt-3 bg-[#007AFF] hover:bg-[#0066D6] text-white text-sm px-3 py-1.5 rounded-md">
              Edit Profile
            </button>
          </div>

          {/* Calendar */}
          <div className="bg-[#1E242E] mb-6">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold">{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}</h4>
              <div className="flex gap-1">
                <button
                  onClick={() => {
                    if (currentMonth === 0) {
                      setCurrentMonth(11);
                      setCurrentYear(currentYear - 1);
                    } else {
                      setCurrentMonth(currentMonth - 1);
                    }
                  }}
                  className="text-gray-400 hover:text-white text-xs px-2 py-1 rounded"
                >
                  ‹
                </button>
                <button
                  onClick={() => {
                    if (currentMonth === 11) {
                      setCurrentMonth(0);
                      setCurrentYear(currentYear + 1);
                    } else {
                      setCurrentMonth(currentMonth + 1);
                    }
                  }}
                  className="text-gray-400 hover:text-white text-xs px-2 py-1 rounded"
                >
                  ›
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 text-center gap-2 text-gray-400 text-xs">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <span key={d}>{d}</span>
              ))}
              {(() => {
                const firstDay = new Date(currentYear, currentMonth, 1).getDay();
                const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
                const todayDate = today.getDate();
                const todayMonth = today.getMonth();
                const todayYear = today.getFullYear();

                const days = [];
                // Add empty cells for days before the first day of the month
                for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
                  days.push(<span key={`empty-${i}`} className="p-1.5 rounded-md"></span>);
                }
                // Add days of the month
                for (let i = 1; i <= daysInMonth; i++) {
                  const isToday = i === todayDate && currentMonth === todayMonth && currentYear === todayYear;
                  days.push(
                    <span
                      key={i}
                      className={`p-1.5 rounded-md cursor-pointer ${
                        isToday ? "bg-[#007AFF] text-white" : "hover:bg-[#2E3440]"
                      }`}
                    >
                      {i}
                    </span>
                  );
                }
                return days;
              })()}
            </div>
          </div>

          {/* Reminders */}
          <div>
            <h4 className="font-semibold mb-3">Reminders</h4>
            <ul className="space-y-3 text-sm">
              <li className="bg-[#2E3440] p-3 rounded-lg">
                <p className="font-medium">Week 7 Reflection Paper</p>
                <p className="text-gray-400 text-xs">Operating System – Oct 15</p>
              </li>
              <li className="bg-[#2E3440] p-3 rounded-lg">
                <p className="font-medium">Week 8 Individual Activity</p>
                <p className="text-gray-400 text-xs">Data Communications – Oct 24</p>
              </li>
              <li className="bg-[#2E3440] p-3 rounded-lg">
                <p className="font-medium">Chapter 1 Thesis Paper</p>
                <p className="text-gray-400 text-xs">Thesis – Oct 28</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage1;
