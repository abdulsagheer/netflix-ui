// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use


const firebaseConfig = {
  apiKey: "AIzaSyBY0M1G4hlk2XYpHydADM_IqaX_aZcdq0I",
  authDomain: "netflix-mern-app-4efca.firebaseapp.com",
  projectId: "netflix-mern-app-4efca",
  storageBucket: "netflix-mern-app-4efca.appspot.com",
  messagingSenderId: "574106111758",
  appId: "1:574106111758:web:352a5eacc012acfe0b115f",
  measurementId: "G-020S81HHVB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

