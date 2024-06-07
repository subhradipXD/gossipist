import AllChats from "./components/AllChats";
import ChatBox from "./components/ChatBox";
import Profile from "./components/Profile";

import { useFirebase } from "./Context/FirebaseContext";


const MainComponent = () => {

    const Firebase = useFirebase();
    console.log(Firebase);

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
    )
}

export default MainComponent
