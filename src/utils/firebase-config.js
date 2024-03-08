
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCP9Y151d6caUDCBQ09S-GagK8DRwmJnAA",
  authDomain: "react-netflix-clone-d0de4.firebaseapp.com",
  projectId: "react-netflix-clone-d0de4",
  storageBucket: "react-netflix-clone-d0de4.appspot.com",
  messagingSenderId: "485945653762",
  appId: "1:485945653762:web:f844c81d7616ff5a62c51b",
  measurementId: "G-YVC2HEE196"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
