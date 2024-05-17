

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3xP_QCD8qOM3SCnk3WQUZbhGPAvd_6nM",
  authDomain: "proyectoreact-9d2f8.firebaseapp.com",
  projectId: "proyectoreact-9d2f8",
  storageBucket: "proyectoreact-9d2f8.appspot.com",
  messagingSenderId: "56085800492",
  appId: "1:56085800492:web:8f96b24092664a6de7d389"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);