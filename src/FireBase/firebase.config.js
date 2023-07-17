// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_apiKey);
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env. VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
  // apiKey: "AIzaSyC0zF3EFH2uegRxaeUri4Qx0ao-XNjOVDE",
  // authDomain: "toy-shop-421dc.firebaseapp.com",
  // projectId: "toy-shop-421dc",
  // storageBucket: "toy-shop-421dc.appspot.com",
  // messagingSenderId: "818294935022",
  // appId: "1:818294935022:web:f83b6a6b56769d735652ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;