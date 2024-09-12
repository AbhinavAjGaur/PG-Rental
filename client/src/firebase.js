// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pg-rental-2e399.firebaseapp.com",
  projectId: "pg-rental-2e399",
  storageBucket: "pg-rental-2e399.appspot.com",
  messagingSenderId: "169570065920",
  appId: "1:169570065920:web:8f31b89d10095f8ddfc2e5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);