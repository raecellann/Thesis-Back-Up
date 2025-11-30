import React, { useState, useEffect } from "react";
import AdminSidebar from "../component/AdminSidebar";

const AdminTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  // Example fetch
  useEffect(() => {
    // Replace with your backend/API
    setTeachers([
      { id: 1, name: "Prof. Santos", email: "psantos@school.edu" },
      { id: 2, name: "Prof. Dela Cruz", email: "dcruz@school.edu" },
    ]);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#161A20] text-white">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Teachers List</h1>

        <div className="bg-[#1E242E] p-6 rounded-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Verified</th>
              </tr>
            </thead>

            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id} className="border-b border-gray-800">
                  <td className="py-3">{teacher.name}</td>
                  <td className="py-3">{teacher.email}</td>
                  <td className="py-3 text-green-400">✔ Verified</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminTeachers;
