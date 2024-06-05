import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
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
    <div className="flex flex-col w-2/4 border-l border-r border-black mx-auto h-full">
      <div className="flex items-center justify-between p-2 border-b border-gray-300">
        <div className="flex items-center">
          <img
            src="profile-pic-url.jpg"
            alt="User Profile"
            className="w-10 h-10 ml-3 border border-black rounded-full hover:shadow-md hover:shadow-sky-700 hover:scale-110"
          />
          <div className="ml-4">
            <h2 className="text-base font-semibold">Soumik Sil</h2>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <button className="mr-5 hover:scale-125 text-blue-500">
            <FaPhoneAlt className="text-xl" />
          </button>
          <button className="mr-5 hover:scale-125 text-blue-500">
            <FaVideo className="text-xl" />
          </button>
          <button className="mr-5 hover:scale-125 text-blue-500">
            <FaInfoCircle className="text-xl" />
          </button>
        </div>
      </div>

      <div className="flex-1 p-2 overflow-y-auto">
        <div className="flex mb-4">
          <img
            src="profile-pic-url.jpg"
            alt="User Profile"
            className="w-8 h-8 ml-3 border border-black rounded-full"
          />
          <div className="ml-2 bg-gray-200 p-2 rounded-lg max-w-xs">
            <p className="text-sm">Incoming message text here</p>
            <time className="text-xs text-gray-500">10:30 AM</time>
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <div className="mr-2 bg-blue-500 text-white p-2 rounded-lg max-w-xs">
            <p className="text-sm">Outgoing message text here</p>
            <time className="text-xs text-gray-900">10:35 AM</time>
          </div>
          <img
            src="profile-pic-url.jpg"
            alt="User Profile"
            className="w-8 h-8 mr-3 border border-black rounded-full"
          />
        </div>
        <div className="flex mb-4">
          <img
            src="profile-pic-url.jpg"
            alt="User Profile"
            className="w-8 h-8 ml-3 border border-black rounded-full"
          />
          <div className="ml-2">
            <img
              src="incoming-image-url.jpg"
              alt="Incoming Image"
              className="max-w-xs rounded-lg border border-black"
            />
            <time className="text-xs text-gray-500">10:40 AM</time>
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <div className="mr-2">
            <img
              src="outgoing-image-url.jpg"
              alt="Outgoing Image"
              className="max-w-xs rounded-lg border border-black"
            />
            <time className="text-xs text-gray-500">10:45 AM</time>
          </div>
          <img
            src="profile-pic-url.jpg"
            alt="User Profile"
            className="w-8 h-8 mr-3 border border-black rounded-full"
          />
        </div>
      </div>

      <div className="relative">
        <div className="flex items-center pt-2 pb-2 border-t border-gray-300">
          <button
            className="m-5 text-blue-500 transform hover:scale-125 transition duration-300 ease-in-out"
            onClick={toggleEmojiPicker}
          >
            <FaSmile className="text-xl" />
          </button>
          <button className="mr-5 text-blue-500 transform hover:scale-125 transition duration-300 ease-in-out">
            <FaPaperclip className="text-xl" />
          </button>
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-lg"
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="ml-5 text-blue-500 transform hover:scale-125 transition duration-300 ease-in-out">
            <FaMicrophone className="text-xl" />
          </button>
          <button className="m-5 text-blue-500 transform hover:scale-125 transition duration-300 ease-in-out">
            <FaPaperPlane className="text-xl" />
          </button>
        </div>
        {isEmojiPickerVisible && (
          <div className="absolute bottom-16 left-0">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
