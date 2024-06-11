import { useContext } from "react";
import AllChats from "./components/AllChats";
import ChatBox from "./components/ChatBox";
import Profile from "./components/Profile";
import { AppContext } from "./context/ContextProvider";
import loading from "./assets/loading.svg";
const MainComponent = () => {

  const { authLoading } = useContext(AppContext);
  return (
    authLoading ?
      <div className="flex items-center justify-center min-h-screen">
        <img src={loading} alt="" className="max-w-full h-auto" />
      </div> :
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
