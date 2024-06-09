import AllChats from "./components/AllChats";
import ChatBox from "./components/ChatBox";
import Profile from "./components/Profile";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "./lib/useUserStore";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./lib/firebase";
const auth = getAuth(app);

const MainComponent = () => {
    const navigate = useNavigate();

    const user = localStorage.getItem("userid");
    const { fetchUserInfo, currentUser } = useUserStore();
    useEffect(() => {
        if (user === null) {
            navigate("/");
        }
        onAuthStateChanged(auth, (user) => {
            fetchUserInfo(user)
        })
        fetchUserInfo(user);
    }, [user]);
    console.log(currentUser);

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

export default MainComponent;
