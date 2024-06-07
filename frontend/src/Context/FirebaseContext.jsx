import { createContext, useContext } from "react";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDd5Su16sGwLC0MiI9FhBlKrjtM1OlAQVM",
    authDomain: "gossipist-6969.firebaseapp.com",
    projectId: "gossipist-6969",
    storageBucket: "gossipist-6969.appspot.com",
    messagingSenderId: "681949647518",
    appId: "1:681949647518:web:f63f2b4615bca2eeb5a18f",
    databaseURL: "https://gossipist-6969-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(FirebaseApp);

const signUp = async (email, password, onSuccess) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        onSuccess();
        return userCredential;
    } catch (error) {
        throw new Error(error.code.split('/')[1].replace(/-/g, ' '));
    }
}

const logIn = async (email, password, onSuccess) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        onSuccess();
        return userCredential;
    } catch (error) {
        throw new Error(error.code.split('/')[1].replace(/-/g, ' '));
    }
}


const FirebaseDB = getDatabase(FirebaseApp);

const putData = (key, data) => {
    set(ref(FirebaseDB, key), data);
};


const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
    return (
        <FirebaseContext.Provider value={{ signUp, logIn, putData }}>
            {children}
        </FirebaseContext.Provider>
    )
}