// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXkaKhEc5rZBYlw6XyaLyxc6C4w_u6F7s",
  authDomain: "e-commerce-c8e21.firebaseapp.com",
  projectId: "e-commerce-c8e21",
  storageBucket: "e-commerce-c8e21.appspot.com",
  messagingSenderId: "907862412362",
  appId: "1:907862412362:web:0f4f7051868a6555cbeab3",
  measurementId: "G-ZC21P6XLRN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);
