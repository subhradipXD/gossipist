import { FaEllipsisV } from "react-icons/fa";
import profileSvg from "/profile.svg";

const AllChats = () => {
  return (
    <div className="flex flex-col w-1/4 h-full border-r border-gray-300">
      <div className="flex items-center justify-between p-2 border-b border-gray-300">
        <div className="flex items-center">
          <img
            src={profileSvg}
            alt="User Profile"
            className="w-10 h-10 border border-black rounded-full"
          />
          <h2 className="ml-3 text-lg font-semibold">Your Name</h2>
        </div>
        <button className="text-gray-500">
          <FaEllipsisV className="text-lg" />
        </button>
      </div>

      <div className="p-2 border-b border-gray-300">
        <input
          type="text"
          className="w-full border p-1 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Search chats"
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center p-2 border-b border-gray-300 hover:bg-gray-100">
          <img
            src={profileSvg}
            alt="User Profile"
            className="w-10 h-10 border border-black rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-lg font-semibold">Friend Name</h2>
            <p className="text-sm text-gray-500">Last message here</p>
          </div>
          <div className="ml-auto">
            <p className="text-sm text-gray-500">3:30 PM</p>
            <div className="flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full">
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllChats;
