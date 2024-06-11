import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firestoreDB } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export const AppContext = createContext();

function ContextProvider({ children }) {
  const [authLoading, setauthLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  async function fetchUser() {
    try {
      setauthLoading(true);
      const uid = localStorage.getItem("userid");
      if (uid) {
        const docRef = doc(firestoreDB, "users", uid);
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data());
        setUser({
          avatar: docSnap.data().avatar,
          email: docSnap.data().email,
          id: docSnap.data().id,
          name: docSnap.data().name,
        });
      } else {
        navigate("/", {
          replace: true,
        });
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setauthLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        authLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default ContextProvider;
