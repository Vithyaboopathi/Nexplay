// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADRtVM48EoEDn_rXULlEUUry1orN1u7YY",
  authDomain: "nexplay-c9c0c.firebaseapp.com",
  projectId: "nexplay-c9c0c",
  storageBucket: "nexplay-c9c0c.firebasestorage.app",
  messagingSenderId: "290525042277",
  appId: "1:290525042277:web:9976279c37ccf4f020588c",
  measurementId: "G-MX4WYXFVXP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
