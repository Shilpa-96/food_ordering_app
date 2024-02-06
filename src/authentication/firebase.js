// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz-SWdhlNzShLX7vs6FYTMIUAKAYjlWW0",
  authDomain: "food-app-b73c9.firebaseapp.com",
  projectId: "food-app-b73c9",
  storageBucket: "food-app-b73c9.appspot.com",
  messagingSenderId: "27422096779",
  appId: "1:27422096779:web:f1f347496a96bac410c38e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
