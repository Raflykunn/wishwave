import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjONpPVJ3qowjlcXesQwI08NKM4w4FICQ",
  authDomain: "wishwaveee.firebaseapp.com",
  projectId: "wishwaveee",
  storageBucket: "wishwaveee.firebasestorage.app",
  messagingSenderId: "128924193971",
  appId: "1:128924193971:web:d848227b0e537dc7734cc6",
  measurementId: "G-T90W92JH82",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
