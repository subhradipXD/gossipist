import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import profileSvg from "/profile.svg";
import dummyImage from "/dummyImage.svg";
import {
  FaSmile,
  FaPaperclip,
  FaPaperPlane,
  FaPhoneAlt,
  FaVideo,
  FaInfoCircle,
  FaMicrophone,
} from "react-icons/fa";

const ChatBox = () => {
  const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmojiClick = (event, emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
  };

  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!isEmojiPickerVisible);
  };

  return (
    <div className="flex flex-col w-2/4 border border-white mx-auto h-full  backdrop-blur-md  shadow-lg rounded-lg">
      <div className="flex items-center justify-between p-4 border-b border-gray-300">
        <div className="flex items-center">
          <img
            src={profileSvg}
            alt="User Profile"
            className="w-12 h-12 ml-3 border border-white rounded-full hover:shadow-md hover:shadow-sky-700 hover:scale-110 transition-transform duration-300"
          />
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-white">Soumik Sil</h2>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <button className="mr-5 hover:scale-125 text-blue-500 transition-transform duration-300">
            <FaPhoneAlt className="text-xl" />
          </button>
          <button className="mr-5 hover:scale-125 text-blue-500 transition-transform duration-300">
            <FaVideo className="text-xl" />
          </button>
          <button className="mr-5 hover:scale-125 text-blue-500 transition-transform duration-300">
            <FaInfoCircle className="text-xl" />
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex mb-4">
          <img
            src={profileSvg}
            alt="User Profile"
            className="w-10 h-10 ml-3 border border-white rounded-full"
          />
          <div className="ml-2 bg-gray-200 p-3 rounded-lg max-w-xs shadow">
            <p className="text-sm">Incoming message text here</p>
            <time className="text-xs text-gray-500">10:30 AM</time>
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <div className="mr-2 bg-blue-500 text-white p-3 rounded-lg max-w-xs shadow">
            <p className="text-sm">Outgoing message text here</p>
            <time className="text-xs text-gray-100">10:35 AM</time>
          </div>
          <img
            src={profileSvg}
            alt="User Profile"
            className="w-10 h-10 mr-3 border border-white rounded-full"
          />
        </div>
        <div className="flex mb-4">
          <img
            src={profileSvg}
            alt="User Profile"
            className="w-10 h-10 ml-3 border border-white rounded-full"
          />
          <div className="ml-2">
            <img
              src={dummyImage}
              alt="Incoming Image"
              className="max-w-xs rounded-lg border border-white shadow"
            />
            <time className="text-xs text-gray-500">10:40 AM</time>
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <div className="mr-2">
            <img
              src={dummyImage}
              alt="Outgoing Image"
              className="max-w-xs rounded-lg border border-white shadow"
            />
            <time className="text-xs text-gray-500">10:45 AM</time>
          </div>
          <img
            src={profileSvg}
            alt="User Profile"
            className="w-10 h-10 mr-3 border border-white rounded-full"
          />
        </div>
      </div>

      <div className="relative">
        <div className="flex items-center p-4 border-t border-gray-300">
          <button
            className="mx-2 text-blue-500 transform hover:scale-125 transition-transform duration-300"
            onClick={toggleEmojiPicker}
          >
            <FaSmile className="text-xl" />
          </button>
          <button className="mx-2 mr-5 text-blue-500 transform hover:scale-125 transition-transform duration-300">
            <FaPaperclip className="text-xl" />
          </button>
          <input
            type="text"
            className="flex-1 p-2 pl-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="mx-2 ml-5 text-blue-500 transform hover:scale-125 transition-transform duration-300">
            <FaMicrophone className="text-xl" />
          </button>
          <button className="mx-2 text-blue-500 transform hover:scale-125 transition-transform duration-300">
            <FaPaperPlane className="text-xl" />
          </button>
        </div>
        {isEmojiPickerVisible && (
          <div className="absolute bottom-16 left-4">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
