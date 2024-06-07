import { FaEllipsisV } from "react-icons/fa";
import profileSvg from "/profile.svg";

const AllChats = () => {
  return (
    <div className="flex flex-col w-1/4 h-full border border-white  backdrop-blur-md  rounded-lg">
      <div className="flex items-center justify-between p-4 border-b border-gray-300">
        <div className="flex items-center">
          <img
            src={profileSvg}
            alt="User Profile"
            className="w-12 h-12 border border-white rounded-full hover:shadow-md hover:shadow-sky-700 hover:scale-110"
          />
          <h2 className="ml-3 text-lg font-semibold text-white">Subhradip Das</h2>
        </div>
        <button className="text-gray-500 hover:text-white transition duration-300">
          <FaEllipsisV className="text-xl" />
        </button>
      </div>

      <div className="p-4 border-b border-gray-300 ">
        <input
          type="text"
          className="w-full p-1 pl-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search chats"
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center p-4 border-b text-white hover:text-black border-gray-300 hover:bg-gray-100 transition duration-300">
          <img
            src={profileSvg}
            alt="User Profile"
            className="w-12 h-12 border border-white rounded-full"
          />
          <div className="ml-4 flex-1">
            <h2 className="text-lg font-semibold">Friend Name</h2>
            <p className="text-sm text-gray-400">Last message here</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">3:30 PM</p>
            <div className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full mt-1">
              <span className="text-xs">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllChats;
