// import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { firestoreDB } from "../lib/firebase";
// import { app } from "../lib/firebase";

// const auth = getAuth(app);
// const firestoreDB = getFirestore(app);

const Authentication = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem("userid");

  useEffect(() => {
    if (user !== null) {
      navigate("/chat");
    }
  });

  const [sEmail, setSEmail] = useState("");
  const [sPass, setSPass] = useState("");
  const [name, setName] = useState("");
  const [lEmail, setLEmail] = useState("");
  const [lPass, setLPass] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        sEmail,
        sPass
      );
      const user = userCredential.user;

      await setDoc(doc(firestoreDB, "users", user.uid), {
        name,
        avatar: null,
        email: sEmail,
        id: user.uid,
        blocked: [],
      });

      await setDoc(doc(firestoreDB, "userchats", user.uid), {
        chats: [],
      });

      toast.success("Signup successful! Please Login");
      setSEmail("");
      setSPass("");
      setName("");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const msg = errorCode.split("/")[1].replace(/-/g, " ");
      toast.error(msg);
      console.log(errorCode, errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleLogIn = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        lEmail,
        lPass
      );
      console.log(userCredential);
      const user = userCredential.user.uid;

      if (user) {
        localStorage.setItem("userid", user);
        toast.success("Login successful!");
        navigate("/chat");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const msg = errorCode.split("/")[1].replace(/-/g, " ");
      toast.error(msg);
      console.log(errorCode, errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className=" p-10 flex flex-row text-black backdrop-blur-md rounded-md m-20 absolute inset-0 h-4/6 w-4/6 mx-auto my-auto">
        <div className="w-1/2 flex flex-col items-center justify-center border-r border-r-indigo-500 p-10">
          <div className="mr-10 flex flex-col items-center space-y-2">
            <h1 className="text-2xl font-bold text-white">Sign Up</h1>
            <div className="flex flex-col mt-5 space-y-2">
              <label className="text-lg font-semibold text-indigo-500">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                required
                className="p-1 pl-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
              <label className="text-lg font-semibold text-indigo-500">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                className="p-1 pl-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => {
                  setSEmail(e.target.value);
                }}
                value={sEmail}
              />
              <label className="text-lg font-semibold text-indigo-500">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                required
                className="p-1 pl-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => {
                  setSPass(e.target.value);
                }}
                value={sPass}
              />
              <button
                type="submit"
                className={`mt-4 p-1 rounded-md text-white transition duration-300 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-500 hover:bg-indigo-700"
                }`}
                onClick={() => {
                  if (!loading) {
                    handleSignUp();
                    setLEmail("");
                    setLPass("");
                  }
                }}
                disabled={loading}
              >
                {loading ? "Loading" : "Sign Up"}
              </button>

              {/* <button
                            type="submit"
                            className="mt-4 p-1.5 bg-gray-500 text-black rounded-md hover:bg-white transition duration-300 shadow-lg flex items-center justify-center"
                            onClick={() => { signUpWithGoogle }}
                        >
                            <FcGoogle className="mr-2" />Sign Up with Google!
                        </button> */}
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center p-10">
          <div className="ml-10 flex flex-col items-center space-y-2">
            <h1 className="text-2xl font-bold text-white">Log In</h1>
            <div className="flex flex-col mt-5 space-y-2">
              <label className="text-lg font-semibold text-indigo-500">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                className="p-1 pl-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => {
                  setLEmail(e.target.value);
                }}
                value={lEmail}
              />
              <label className="text-lg font-semibold text-indigo-500">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                required
                className="p-1 pl-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => {
                  setLPass(e.target.value);
                }}
                value={lPass}
              />
              <button
                type="submit"
                className={`mt-4 p-1 rounded-md text-white transition duration-300 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-500 hover:bg-indigo-700"
                }`}
                onClick={() => {
                  if (!loading) {
                    handleLogIn();
                    setLEmail("");
                    setLPass("");
                  }
                }}
                disabled={loading}
              >
                {loading ? "Loading" : "Sign In"}
              </button>

              {/* <button
                            type="submit"
                            className="mt-4 p-1.5 bg-gray-500 text-black rounded-md hover:bg-white transition duration-300 shadow-lg flex items-center justify-center"
                            onClick={() => { }}
                        >
                            <FcGoogle className="mr-2" />Login with Google!
                        </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
