import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd5Su16sGwLC0MiI9FhBlKrjtM1OlAQVM",
  authDomain: "gossipist-6969.firebaseapp.com",
  projectId: "gossipist-6969",
  storageBucket: "gossipist-6969.appspot.com",
  messagingSenderId: "681949647518",
  appId: "1:681949647518:web:f63f2b4615bca2eeb5a18f",
  databaseURL: "https://gossipist-6969-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(app);
