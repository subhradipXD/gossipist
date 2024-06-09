import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import profileSvg from "/profile.svg";

const Profile = () => {

  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="w-1/4 h-full p-4 border border-white flex flex-col backdrop-blur-md shadow-lg rounded-lg">
      <div className="flex flex-col items-center mb-6">
        <img
          src={profileSvg}
          alt="User Profile"
          className="w-24 h-24 border border-white rounded-full mb-3 hover:shadow-md hover:shadow-sky-700 hover:scale-110 transition-transform duration-300"
        />
        <h2 className="text-xl text-white font-semibold">Soumik Sil</h2>
        <p className="text-center text-sm text-white mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
        </p>
      </div>

      <div className="mb-6 hover:text-black">
        <div
          className="flex items-center justify-between cursor-pointer p-2 rounded-md text-white hover:text-black hover:bg-gray-300 transition-colors duration-300"
          onClick={toggleDropdown}
        >
          <span className="font-semibold">Chat Settings</span>
          {isDropdownOpen ? <FaChevronUp className="text-lg" /> : <FaChevronDown className="text-lg" />}
        </div>
        {isDropdownOpen && (
          <div className="mt-2 p-3 border border-gray-300 rounded-md shadow-inner">
            <div className="mb-3">
              <label className="block text-sm font-semibold mb-1 text-white">Theme</label>
              <select className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-semibold mb-1 text-white">Dummy Option 1</label>
              <input
                type="text"
                className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Dummy Field"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-semibold mb-1 text-white">Dummy Option 2</label>
              <input
                type="text"
                className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Dummy Field"
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-auto flex flex-col items-center">
        <button className="w-full mb-3 p-2 bg-red-500 text-white rounded-md transition duration-300 ease-in-out transform hover:bg-red-600 hover:scale-105">
          Block User
        </button>
        <button className="w-full p-2 bg-blue-500 text-white rounded-md transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105"
          onClick={() => {
            localStorage.removeItem("userid")
            navigate("/", { replace: true });
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
