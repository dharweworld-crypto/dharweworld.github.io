// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-XkGXnx9U-FGfs02V_4Rw1hNJqssjiq8",
  authDomain: "dharwe-world-6c795.firebaseapp.com",
  projectId: "dharwe-world-6c795",
  storageBucket: "dharwe-world-6c795.firebasestorage.app",
  messagingSenderId: "560219173915",
  appId: "1:560219173915:web:58185c11e49e0bf2c874be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔴 YE LINE SABSE IMPORTANT HAI
export const auth = getAuth(app);
