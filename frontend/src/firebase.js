// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
export const app = initializeApp(firebaseConfig);