// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import dotenv from "dotenv"
dotenv.config()
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "dream-home-dd586.firebaseapp.com",
  projectId: "dream-home-dd586",
  storageBucket: "dream-home-dd586.appspot.com",
  messagingSenderId: "930879210107",
  appId: "1:930879210107:web:fe40ce9bb39dfe9b0658de",
  measurementId: "G-YC57W3Q76M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);