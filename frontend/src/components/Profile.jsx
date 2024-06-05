import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import profileSvg from "/profile.svg";

const Profile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-1/4 h-full p-4 border-l border-gray-300 flex flex-col">
      <div className="flex flex-col items-center mb-4">
        <img
          src={profileSvg}
          alt="User Profile"
          className="w-20 h-20 border border-black rounded-full mb-2"
        />
        <h2 className="text-lg font-semibold">Your Name</h2>
        <p className="text-center text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem.
        </p>
      </div>

      <div className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer p-2 bg-gray-200 rounded-md"
          onClick={toggleDropdown}
        >
          <span>Chat Settings</span>
          {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {isDropdownOpen && (
          <div className="mt-2 p-2 border border-gray-300 rounded-md">
            <div className="mb-2">
              <label className="block text-sm font-semibold">Theme</label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold">
                Dummy Option 1
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Dummy Field"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold">
                Dummy Option 2
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Dummy Field"
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-auto flex flex-col items-center">
        <button className="w-full mb-2 p-2 bg-red-500 text-white rounded-md transition duration-300 ease-in-out transform hover:bg-red-600 hover:scale-105">
          Block User
        </button>
        <button className="w-full p-2 bg-blue-500 text-white rounded-md transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
