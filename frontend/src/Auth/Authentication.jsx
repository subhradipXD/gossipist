import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../Context/FirebaseContext";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();
// const auth = getAuth();


const Authentication = () => {
    const navigate = useNavigate();
    const Firebase = useFirebase();

    const [sEmail, setSEmail] = useState("");
    const [sPass, setSPass] = useState("");
    const [lEmail, setLEmail] = useState("");
    const [lPass, setLPass] = useState("");

    const [popupMessage, setPopupMessage] = useState("");
    const [popupType, setPopupType] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleSignUp = () => {
        Firebase.signUp(sEmail, sPass, () => {
            setSEmail("");
            setSPass("");
            showMessage("Signup successful! Please Login", "success");
        }).catch((error) => {
            showMessage(error.message, "error");
        });
    }

    const handleLogIn = () => {
        Firebase.logIn(lEmail, lPass, () => {
            setLEmail("");
            setLPass("");
            navigate("/chat");
        }).catch((error) => {
            showMessage(error.message, "error");
        });
    }

    const showMessage = (message, type) => {
        setPopupMessage(message);
        setPopupType(type);
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 5000);
    }



    // const signUpWithGoogle = () => {
    //     signInWithPopup(auth, provider)
    //         .then((result) => {
    //             console.log(result);
    //             // This gives you a Google Access Token. You can use it to access the Google API.
    //             const credential = GoogleAuthProvider.credentialFromResult(result);
    //             console.log(credential);
    //             const token = credential.accessToken;
    //             console.log(token);
    //             // The signed-in user info.
    //             const user = result.user;
    //             console.log(user);
    //             // IdP data available using getAdditionalUserInfo(result)
    //         }).catch((error) => {
    //             // Handle Errors here.
    //             const errorCode = error.code;
    //             console.log(errorCode);
    //             const errorMessage = error.message;
    //             console.log(errorMessage);
    //             // The email of the user's account used.
    //             const email = error.customData.email;
    //             console.log(email);
    //             // The AuthCredential type that was used.
    //             const credential = GoogleAuthProvider.credentialFromError(error);
    //             console.log(credential);
    //         });
    // }


    return (
        <div className=" p-10 flex flex-row text-black backdrop-blur-md rounded-md m-20 absolute inset-0 h-4/6 w-4/6 mx-auto my-auto">
            {showPopup && (
                <div className={`absolute top-0 z-10 left-1/2 -translate-x-1/2 mt-4 p-2 rounded text-black ${popupType === "success" ? "bg-green-700" : "bg-red-700"}`}>
                    {popupMessage}
                </div>
            )}
            <div className="w-1/2 flex flex-col items-center justify-center border-r border-r-indigo-500 p-10">
                <div className="mr-10 flex flex-col items-center space-y-4">
                    <h1 className="text-2xl font-bold text-white">Sign Up</h1>
                    <div className="flex flex-col mt-5 space-y-2">
                        <label className="text-lg font-semibold text-indigo-500">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            required
                            className="p-1 pl-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onChange={(e) => { setSEmail(e.target.value) }}
                            value={sEmail}
                        />
                        <label className="text-lg font-semibold text-indigo-500">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            required
                            className="p-1 pl-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onChange={(e) => { setSPass(e.target.value) }}
                            value={sPass}
                        />
                        <button
                            type="submit"
                            className="mt-4 p-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 transition duration-300"
                            onClick={() => {
                                handleSignUp();
                                setLEmail("");
                                setLPass("");
                            }}
                        >
                            Sign Up
                        </button>
                        <button
                            type="submit"
                            className="mt-4 p-1.5 bg-gray-500 text-black rounded-md hover:bg-white transition duration-300 shadow-lg flex items-center justify-center"
                        // onClick={() => { signUpWithGoogle }}
                        >
                            <FcGoogle className="mr-2" />Sign Up with Google!
                        </button>

                    </div>
                </div>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center p-10">
                <div className="ml-10 flex flex-col items-center space-y-4">
                    <h1 className="text-2xl font-bold text-white">Log In</h1>
                    <div className="flex flex-col mt-5 space-y-2">
                        <label className="text-lg font-semibold text-indigo-500">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            required
                            className="p-1 pl-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onChange={(e) => { setLEmail(e.target.value) }}
                            value={lEmail}
                        />
                        <label className="text-lg font-semibold text-indigo-500">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            required
                            className="p-1 pl-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onChange={(e) => { setLPass(e.target.value) }}
                            value={lPass}
                        />
                        <button
                            type="submit"
                            className="mt-4 p-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 transition duration-300"
                            onClick={() => {
                                handleLogIn();
                                setSEmail("");
                                setSPass("");
                            }}

                        >
                            Log In
                        </button>
                        <button
                            type="submit"
                            className="mt-4 p-1.5 bg-gray-500 text-black rounded-md hover:bg-white transition duration-300 shadow-lg flex items-center justify-center"
                            onClick={() => { }}
                        >
                            <FcGoogle className="mr-2" />Login with Google!
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Authentication;
