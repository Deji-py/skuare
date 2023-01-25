// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf8Ld8om5vnfutx-qezPRhzeJWrdnpp8M",
  authDomain: "skuare-10563.firebaseapp.com",
  projectId: "skuare-10563",
  storageBucket: "skuare-10563.appspot.com",
  messagingSenderId: "852411647509",
  appId: "1:852411647509:web:42af61005ba6d723e0301c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
