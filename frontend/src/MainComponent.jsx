import AllChats from "./components/AllChats";
import ChatBox from "./components/ChatBox";
import Profile from "./components/Profile";

const MainComponent = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex w-full h-full ml-32 mr-32">
          <AllChats />
          <ChatBox />
          <Profile />
        </div>
      </div>
    </>
  );
};

export default MainComponent;
