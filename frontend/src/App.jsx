import AllChats from "./components/AllChats";
import ChatBox from "./components/ChatBox";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="flex h-screen">
      <div className="flex w-full h-full ml-32 mr-32 border border-black">
        <AllChats />
        <ChatBox />
        <Profile />
      </div>
    </div>
  );
}

export default App;
